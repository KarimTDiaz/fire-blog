import { doc, getDoc, onSnapshot } from 'firebase/firestore';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Banner from '../../components/banner/Banner';
import Button from '../../components/button/Button';
import Delete from '../../components/delete/Delete';
import Filters from '../../components/filters/Filters';
import Modal from '../../components/modal/Modal';
import { blogCollectionReference } from '../../config/firebase.config';
import { BUTTONS } from '../../constants/buttons';
import { AuthContext } from '../../contexts/Auth.context';
import {
	ActionButtons,
	PostImage,
	PostImageContainer,
	PostImageOverlay,
	PostInfo,
	PostTitle,
	PostsContainer,
	StyledPost
} from './styles';

const Home = () => {
	const [posts, setPosts] = useState([]);
	const [searchedPosts, setSearchedPosts] = useState(null);
	const [content, setContent] = useState(null);
	const { currentUser } = useContext(AuthContext);
	const navigate = useNavigate();
	useEffect(() => {
		const subscribeToData = onSnapshot(blogCollectionReference, snapshot => {
			const dataInfo = snapshot.docs.map(doc => ({
				...doc.data(),
				id: doc.id
			}));
			dataInfo.length === 0 ? setPosts(null) : setPosts(dataInfo);
			dataInfo.length === 0
				? setSearchedPosts(null)
				: setSearchedPosts(dataInfo);
		});
		return () => subscribeToData();
	}, []);

	if (posts.length === 0) return <h1>Loading..</h1>;

	return (
		<>
			<div>
				<Banner />
				<Filters posts={posts} setSearchedPosts={setSearchedPosts} />
				<PostsContainer>
					{searchedPosts.map(post => (
						<StyledPost key={post.id}>
							<PostImageContainer>
								<PostImage src={post.image} alt='Imagen de post' />
								<PostImageOverlay />
							</PostImageContainer>
							<PostTitle>{post.title}</PostTitle>
							<PostInfo>{post.texto}</PostInfo>
							<button onClick={() => getPostById(post.id)}>Details</button>
							{currentUser && currentUser.email === post.userEmail && (
								<>
									<ActionButtons>
										<Button
											type={BUTTONS.SECONDARY}
											action={
												() => navigate('/edit', { state: post })
												/* showModal(
													setContent,
													<Edit
														id={post.id}
														setContent={setContent}
														post={post}
													/>
												) */
											}
										>
											Edit
										</Button>
										<Button
											type={BUTTONS.SECONDARY}
											action={() =>
												showModal(
													setContent,
													<Delete id={post.id} setContent={setContent} />
												)
											}
										>
											Delete
										</Button>
									</ActionButtons>
								</>
							)}
						</StyledPost>
					))}
				</PostsContainer>
				<Modal>{content}</Modal>
			</div>
		</>
	);
};

const getPostById = async id => {
	const postReference = doc(blogCollectionReference, id);
	try {
		const postToRead = await getDoc(postReference);
		console.log(postToRead.data());
	} catch (err) {
		console.log(err);
	}
};

const showModal = (setContent, text) => {
	setContent(text);
};

export default Home;

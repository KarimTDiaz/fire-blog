import { useEffect, useState, useContext } from 'react';
import { blogCollectionReference } from '../../config/firebase.config';
import { doc, getDoc, onSnapshot } from 'firebase/firestore';
import { AuthContext } from '../../contexts/Auth.context';
import Modal from '../../components/modal/Modal';

import Delete from '../../components/delete/Delete';
import Edit from '../../components/edit/Edit';

const Home = () => {
	const [posts, setPosts] = useState([]);
	const [content, setContent] = useState(null);
	const { currentUser } = useContext(AuthContext);

	useEffect(() => {
		const subscribeToData = onSnapshot(blogCollectionReference, snapshot => {
			const dataInfo = snapshot.docs.map(doc => ({
				...doc.data(),
				id: doc.id
			}));
			dataInfo.length === 0 ? setPosts(null) : setPosts(dataInfo);
		});
		return () => subscribeToData();
	}, []);
	if (posts.length === 0) return <h1>Loading..</h1>;
	return (
		<>
			<div>
				{posts.map(post => (
					<div key={post.id}>
						<button onClick={() => getPostById(post.id)}>buton</button>
						<h1>{post.title}</h1>
						<p>{post.texto}</p>
						{currentUser && currentUser.email === post.userEmail && (
							<>
								<button
									onClick={() =>
										showModal(
											setContent,
											<Edit id={post.id} setContent={setContent} post={post} />
										)
									}
								>
									Edit Post
								</button>
								<button
									onClick={() =>
										showModal(
											setContent,
											<Delete id={post.id} setContent={setContent} />
										)
									}
								>
									Delete Post
								</button>
							</>
						)}
					</div>
				))}
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

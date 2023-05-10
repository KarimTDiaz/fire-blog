import { useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/Auth.context';
import { addDoc } from 'firebase/firestore';
import { blogCollectionReference } from '../../config/firebase.config';

const NewPost = () => {
	const navigate = useNavigate();
	const { currentUser } = useContext(AuthContext);
	const [newPost, setNewPost] = useState({
		title: '',
		texto: '',
		userEmail: currentUser.email
	});
	useEffect(() => {
		if (!currentUser) navigate('/');
	}, [currentUser]);

	return (
		<>
			<h1>New Post</h1>
			<div>
				<form onSubmit={ev => createPost(ev, newPost)}>
					<div>
						<label htmlFor='title'>Title</label>
						<input
							onChange={ev => {
								setNewPost({ ...newPost, title: ev.target.value });
							}}
							type='text'
							id='title'
						/>
					</div>
					<div>
						<label htmlFor='text'>Text</label>
						<input
							onChange={ev => {
								setNewPost({ ...newPost, texto: ev.target.value });
							}}
							type='text'
							id='text'
						/>
					</div>
					<button>Create Post</button>
				</form>
			</div>
		</>
	);
};

const createPost = async (ev, newPost) => {
	ev.preventDefault();
	try {
		await addDoc(blogCollectionReference, {
			...newPost,
			date: new Date().toLocaleString()
		});
	} catch (err) {
		console.log(err);
	}
	ev.target.reset();
};

export default NewPost;

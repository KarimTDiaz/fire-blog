import { addDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 } from 'uuid';
import Title from '../../components/title/Title';
import Upload from '../../components/upload/Upload';
import { blogCollectionReference, storage } from '../../config/firebase.config';
import { IMAGES_URLS } from '../../constants/images-urls';
import { POST_OPTIONS } from '../../constants/postOptions';
import { AuthContext } from '../../contexts/Auth.context';
import {
	NewPostContainer,
	NewPostForm,
	NewPostFormField,
	NewPostInput,
	NewPostLabel,
	NewPostTextArea,
	StyledSelect
} from './styles';

const NewPost = () => {
	const [file, setFile] = useState('');
	const navigate = useNavigate();
	const { currentUser } = useContext(AuthContext);
	const [newPost, setNewPost] = useState({
		title: '',
		texto: '',
		postTheme: '',
		userEmail: currentUser.email
	});
	useEffect(() => {
		if (!currentUser) navigate('/');
	}, [currentUser]);

	return (
		<>
			<NewPostContainer>
				<NewPostForm
					onSubmit={ev => createPost(ev, newPost, navigate, file, currentUser)}
				>
					<Title>New Post</Title>
					<StyledSelect
						id='postOptions'
						onChange={ev =>
							setNewPost({ ...newPost, postTheme: ev.target.value })
						}
					>
						{POST_OPTIONS.map(option => {
							return <option>{option}</option>;
						})}
					</StyledSelect>
					<NewPostFormField>
						<NewPostLabel htmlFor='title'>Título</NewPostLabel>
						<NewPostInput
							onChange={ev => {
								setNewPost({ ...newPost, title: ev.target.value });
							}}
							type='text'
							id='title'
						/>
					</NewPostFormField>
					<NewPostFormField>
						<NewPostLabel htmlFor='content'>Contenido</NewPostLabel>
						<NewPostTextArea
							onChange={ev => {
								setNewPost({ ...newPost, texto: ev.target.value });
							}}
							type='text'
							id='content'
						/>
					</NewPostFormField>
					<NewPostFormField>
						<Upload
							defaultPreview={IMAGES_URLS.DEFAULT}
							setFile={setFile}
						></Upload>
					</NewPostFormField>
					<button>Create Post</button>
				</NewPostForm>
			</NewPostContainer>
		</>
	);
};

const createPost = async (ev, newPost, navigate, file, currentUser) => {
	ev.preventDefault();
	if (file) {
		try {
			const nameNoExtension = file.name.substring(
				0,
				file.name.lastIndexOf('.')
			);
			const finalName = `${nameNoExtension}-${v4()}`;
			const directory = currentUser.email;
			const storageRef = ref(storage, `${directory}/${finalName}`);
			const upload = await uploadBytes(storageRef, file);
			const imageURL = await getDownloadURL(storageRef);
			await addDoc(blogCollectionReference, {
				...newPost,
				date: new Date().toLocaleString(),
				image: imageURL
			});
		} catch (err) {
			console.error('Error al subir el archivo', err);
		}
	} else {
		await addDoc(blogCollectionReference, {
			...newPost,
			date: new Date().toLocaleString(),
			image: IMAGES_URLS.DEFAULT
		});
	}
	ev.target.reset();
	navigate('/');
};

export default NewPost;

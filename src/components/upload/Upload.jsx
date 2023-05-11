import { v4 } from 'uuid';
import { storage } from '../../config/firebase.config';
import {
	deleteObject,
	getDownloadURL,
	ref,
	uploadBytes
} from 'firebase/storage';
import { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/Auth.context';

const Upload = ({ setPost, post }) => {
	const [image, setImage] = useState(post.image);
	const { currentUser } = useContext(AuthContext);
	return (
		<>
			<form>
				<input
					type='file'
					onChange={ev =>
						handleLoadFile(
							ev.target.files[0],
							setImage,
							currentUser,
							setPost,
							post
						)
					}
				/>
			</form>
			<img src={image} alt='' />
			{image && (
				<button onClick={() => handleDeleteFile(image, setImage)}>
					Delete
				</button>
			)}
		</>
	);
};

const handleLoadFile = async (file, setImage, currentUser, setPost, post) => {
	const nameNoExtension = file.name.substring(0, file.name.lastIndexOf('.'));
	const finalName = `${nameNoExtension}-${v4()}`;
	const directory = currentUser.email;
	const storageRef = ref(storage, `${directory}/${finalName}`);

	try {
		const upload = await uploadBytes(storageRef, file);
		const imageURL = await getDownloadURL(storageRef);
		console.log(upload);
		console.log(imageURL);
		setPost({ ...post, image: imageURL });
		setImage(imageURL);
	} catch (err) {
		console.error('Error al subir el archivo', err);
	}
};

const handleDeleteFile = async (imageURL, setImage) => {
	const storageRef = ref(storage, imageURL);
	try {
		await deleteObject(storageRef);
		setImage('');
		console.log('Foto Eliminada Correctamente');
	} catch (err) {
		console.error('Error al eliminar la foto', err);
	}
};

export default Upload;

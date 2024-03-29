import { doc, updateDoc } from 'firebase/firestore';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Upload from '../../components/upload/Upload';
import { blogCollectionReference } from '../../config/firebase.config';

const Edit = () => {
	const { state } = useLocation();
	console.log(state);
	const [editPost, setEditPost] = useState(state);

	return (
		<>
			<h1>Edit Post</h1>
			<form onSubmit={ev => updatePost(ev, id, editPost)}>
				<div>
					<label htmlFor='title'>Title</label>
					<input
						onChange={ev =>
							handleEditInfo(editPost, setEditPost, 'title', ev.target.value)
						}
						type='text'
						id='title'
						value={state.title}
					/>
				</div>
				<div>
					<label htmlFor='texto'>Text</label>
					<input
						onChange={ev =>
							handleEditInfo(editPost, setEditPost, 'texto', ev.target.value)
						}
						type='text'
						id='texto'
						value={state.texto}
					/>
				</div>
				<div>
					<Upload setPost={setEditPost} post={editPost} />
				</div>
				<button>EDIT</button>
			</form>
		</>
	);
};

const handleEditInfo = (editPost, setEditPost, key, value) => {
	setEditPost({ ...editPost, [key]: value });
};
const updatePost = async (ev, id, newData) => {
	ev.preventDefault();
	try {
		const postToUpdate = doc(blogCollectionReference, id);
		await updateDoc(postToUpdate, newData);
		console.log('Documento actualizado correctamente');
	} catch (err) {
		console.error('Error al actualizar el documento', err);
	}
};

export default Edit;

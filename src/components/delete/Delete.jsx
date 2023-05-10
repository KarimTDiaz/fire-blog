import { deleteDoc, doc } from 'firebase/firestore';
import { blogCollectionReference } from '../../config/firebase.config';

const Delete = ({ id, setContent }) => {
	return (
		<>
			<h1>Quieres borrar el post?</h1>
			<button onClick={() => deletePost(id, setContent)}>YES</button>
			<button onClick={() => setContent(null)}>NO</button>
		</>
	);
};

const deletePost = async (id, setContent) => {
	try {
		const postToDelete = doc(blogCollectionReference, id);
		await deleteDoc(postToDelete);
		setContent(null);
	} catch (err) {
		console.error('Error al borrar el documento', err);
	}
};
export default Delete;

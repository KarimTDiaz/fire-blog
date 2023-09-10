import { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/Auth.context';

const Upload = ({ defaultPreview, setFile }) => {
	const [image, setImage] = useState(defaultPreview);
	const { currentUser } = useContext(AuthContext);
	return (
		<>
			<input
				type='file'
				onChange={ev => {
					handlePreview(ev.target.files[0], setImage);
					handleLoadFile(ev, setFile);
				}}
			/>

			<img src={image} alt='' />
			{image && (
				<button onClick={() => handleDeleteFile(image, setImage)}>
					Delete
				</button>
			)}
		</>
	);
};

const handlePreview = (file, setImage) => {
	const reader = new FileReader();
	reader.onload = e => {
		setImage(e.target.result);
	};
	reader.readAsDataURL(file);
};

const handleLoadFile = async (event, setFile) => {
	console.log(event.target);
	const file = event.target.files[0];
	setFile(file);
};

export default Upload;

import { useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { AuthContext } from '../../contexts/Auth.context';

const NewPost = () => {
	const navigate = useNavigate();
	const { currentUser } = useContext(AuthContext);
	useEffect(() => {
		if (!currentUser) navigate('/');
	}, [currentUser]);
	return <h1>NEW POST</h1>;
};

export default NewPost;

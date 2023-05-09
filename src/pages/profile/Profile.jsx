import { useNavigate } from 'react-router-dom';
import { auth } from '../../config/firebase.config';
import { signOut } from 'firebase/auth';
import { useContext, useEffect } from 'react';
import { AuthContext } from '../../contexts/Auth.context';

const Profile = () => {
	const navigate = useNavigate();
	const { currentUser } = useContext(AuthContext);
	useEffect(() => {
		if (!currentUser) navigate('/');
	}, [currentUser]);
	return (
		<>
			<h1>PROFILE</h1>
			<button onClick={() => handleLogOut(navigate)}>Log out</button>
		</>
	);
};

const handleLogOut = async navigate => {
	await signOut(auth);
	navigate('/');
};
export default Profile;

import { useNavigate } from 'react-router-dom';
import { auth } from '../../config/firebase.config';
import { signOut } from 'firebase/auth';

const Profile = () => {
	const navigate = useNavigate();

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

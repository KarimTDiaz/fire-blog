import {
	GithubAuthProvider,
	GoogleAuthProvider,
	signInWithPopup
} from 'firebase/auth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../config/firebase.config';
import { BUTTONS } from '../../constants/buttons';
import { ICONS } from '../../constants/icons';
import Button from '../button/Button';
import { LoginButtons } from './styles';

const SocialLogin = () => {
	const [error, setError] = useState(false);
	const navigate = useNavigate();
	return (
		<LoginButtons>
			<Button
				type={BUTTONS.SOCIAL}
				action={() => loginWithGoogle(navigate, setError)}
				icon={ICONS.google}
			>
				Sign in with Google
			</Button>
			<Button
				type={BUTTONS.SOCIAL}
				action={() => loginWithGithub(navigate, setError)}
				icon={ICONS.github}
			>
				Sign in with GIthub
			</Button>
			{error && <h1>Email o contraseña incorrectos</h1>}
		</LoginButtons>
	);
};

const loginWithGoogle = async (navigate, setError) => {
	const provider = new GoogleAuthProvider();
	try {
		const result = await signInWithPopup(auth, provider);
		const credential = GoogleAuthProvider.credentialFromResult(result);
		setError(false);
		console.log(credential);
		navigate('/');
	} catch (err) {
		console.log(err);
		setError(true);
	}
};

const loginWithGithub = async (navigate, setError) => {
	const provider = new GithubAuthProvider();
	try {
		const result = await signInWithPopup(auth, provider);
		const credential = GithubAuthProvider.credentialFromResult(result);
		setError(false);
		navigate('/');
		console.log(credential);
	} catch (err) {
		console.log(err);
		setError(true);
	}
};

export default SocialLogin;

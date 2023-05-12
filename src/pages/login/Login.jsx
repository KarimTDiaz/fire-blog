import { useState } from 'react';
import { fillData } from '../../utils/fillData';
import {
	signInWithEmailAndPassword,
	GoogleAuthProvider,
	signInWithPopup,
	GithubAuthProvider
} from 'firebase/auth';
import { auth } from '../../config/firebase.config';
import { SignInButton, SignInIcon, LoginContainer } from './styles';
import { AuthContext } from '../../contexts/Auth.context';
import { useNavigate } from 'react-router-dom';

const Login = () => {
	const [loginData, setLoginData] = useState({
		email: '',
		password: ''
	});
	const [error, setError] = useState(false);

	return (
		<>
			<LoginContainer>
				<h1>Login</h1>
				<form onSubmit={ev => handleSubmit(ev, loginData, setError)}>
					<div>
						<label htmlFor='email'>Email</label>
						<input
							type='text'
							id='email'
							onChange={ev =>
								fillData(loginData, setLoginData, ev.target.value, 'email')
							}
						/>
					</div>
					<div>
						<label htmlFor='password'>Password</label>
						<input
							type='password'
							id='password'
							onChange={ev =>
								fillData(loginData, setLoginData, ev.target.value, 'password')
							}
						/>
					</div>
					<button>Sign in</button>
					<SignInButton onClick={() => loginWithGoogle()}>
						<SignInIcon src='/assets/icon-google.svg' alt='Icono de google' />
						<p>Sign in with Google</p>
					</SignInButton>
					<SignInButton onClick={() => loginWithGithub()}>
						<SignInIcon src='/assets/icon-github.svg' alt='Icono de github' />
						<p>Sign in with Github</p>
					</SignInButton>
				</form>
				{error && <h1>Email o contraseña incorrectos</h1>}
			</LoginContainer>
		</>
	);
};

const handleSubmit = async (ev, loginData, setError) => {
	ev.preventDefault();
	const { email, password } = loginData;
	try {
		await signInWithEmailAndPassword(auth, email, password);
		setError(false);
	} catch (err) {
		console.log(err);
		setError(true);
	}
	ev.target.reset();
};

const loginWithGoogle = async () => {
	const provider = new GoogleAuthProvider();
	try {
		const result = await signInWithPopup(auth, provider);
		const credential = GoogleAuthProvider.credentialFromResult(result);
		console.log(credential);
	} catch (err) {
		console.log(err);
	}
};

const loginWithGithub = async () => {
	const provider = new GithubAuthProvider();
	try {
		const result = await signInWithPopup(auth, provider);
		const credential = GithubAuthProvider.credentialFromResult(result);
		console.log(credential);
	} catch (err) {
		console.log(err);
	}
};

export default Login;

import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/button/Button';
import SocialLogin from '../../components/social-log-in/SocialLogin';
import Title from '../../components/title/Title';
import { auth } from '../../config/firebase.config';
import { BUTTONS } from '../../constants/buttons';
import { fillData } from '../../utils/fillData';
import {
	LoginContainer,
	LoginForm,
	LoginFormField,
	LoginInput,
	LoginLabel
} from './styles';

const Login = () => {
	const [loginData, setLoginData] = useState({
		email: '',
		password: ''
	});
	const [error, setError] = useState(false);

	const navigate = useNavigate();

	return (
		<>
			<LoginContainer>
				<LoginForm onSubmit={ev => handleSubmit(ev, loginData, setError)}>
					<Title>SIGN IN</Title>
					<LoginFormField>
						<LoginLabel htmlFor='email'>Email</LoginLabel>
						<LoginInput
							type='text'
							id='email'
							onChange={ev =>
								fillData(loginData, setLoginData, ev.target.value, 'email')
							}
						/>
					</LoginFormField>
					<LoginFormField>
						<LoginLabel htmlFor='password'>Password</LoginLabel>
						<LoginInput
							type='password'
							id='password'
							onChange={ev =>
								fillData(loginData, setLoginData, ev.target.value, 'password')
							}
						/>
					</LoginFormField>

					<Button type={BUTTONS.PRIMARY}>Sign in</Button>
				</LoginForm>
				<SocialLogin />
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

export default Login;

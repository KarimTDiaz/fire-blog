import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/button/Button';
import ErrorPopUp from '../../components/error-pop-up/ErrorPopUp';
import Title from '../../components/title/Title';
import { auth } from '../../config/firebase.config';
import { BUTTONS } from '../../constants/buttons';
import { AuthContext } from '../../contexts/Auth.context';
import { fillData } from '../../utils/fillData';
import {
	RegisterContainer,
	RegisterForm,
	RegisterFormField,
	RegisterInput,
	RegisterLabel
} from './styles';

const Register = () => {
	const [registerData, setRegisterData] = useState({
		email: '',
		password: '',
		confirm: '',
		userName: ''
	});
	const [error, setError] = useState(null);

	const navigate = useNavigate();
	const { currentUser } = useContext(AuthContext);
	useEffect(() => {
		if (currentUser) navigate('/');
	}, [currentUser]);

	return (
		<>
			<RegisterContainer>
				<RegisterForm onSubmit={ev => handleSubmit(ev, registerData, setError)}>
					<Title>REGISTRO</Title>
					<RegisterFormField>
						<RegisterLabel htmlFor='userName'>User Name</RegisterLabel>
						<RegisterInput
							type='text'
							id='userName'
							onChange={ev =>
								fillData(
									registerData,
									setRegisterData,
									ev.target.value,
									'userName'
								)
							}
						/>
					</RegisterFormField>
					<RegisterFormField>
						<RegisterLabel htmlFor='email'>Email</RegisterLabel>
						<RegisterInput
							type='email'
							id='email'
							onChange={ev =>
								fillData(
									registerData,
									setRegisterData,
									ev.target.value,
									'email'
								)
							}
						/>
					</RegisterFormField>
					<RegisterFormField>
						<RegisterLabel htmlFor='password'>Password</RegisterLabel>
						<RegisterInput
							type='password'
							id='password'
							onChange={ev =>
								fillData(
									registerData,
									setRegisterData,
									ev.target.value,
									'password'
								)
							}
						/>
					</RegisterFormField>
					<RegisterFormField>
						<RegisterLabel htmlFor='confirm'>Confirm password</RegisterLabel>
						<RegisterInput
							type='password'
							id='confirm'
							onChange={ev =>
								fillData(
									registerData,
									setRegisterData,
									ev.target.value,
									'confirm'
								)
							}
						/>
					</RegisterFormField>
					{error && <ErrorPopUp>{error}</ErrorPopUp>}
					<Button type={BUTTONS.PRIMARY}>Sign up</Button>
				</RegisterForm>
			</RegisterContainer>
		</>
	);
};

const handleSubmit = async (ev, registerData, setError) => {
	ev.preventDefault();
	const { userName, email, password, confirm } = registerData;
	if (password !== confirm) {
		setError('Las contraseñas no coinciden');
	}

	try {
		await createUserWithEmailAndPassword(auth, email, password);
		await updateProfile(auth.currentUser, {
			displayName: userName
		});
		await getIdToken(auth.currentUser, true);
	} catch (err) {
		console.log(err);
	}
	ev.target.reset();
};
export default Register;

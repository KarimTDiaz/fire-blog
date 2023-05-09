import { auth } from '../../config/firebase.config';
import { fillData } from '../../utils/fillData';
import { useState, useContext, useEffect } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/Auth.context';

const Register = () => {
	const [registerData, setRegisterData] = useState({
		email: '',
		password: '',
		confirm: ''
	});
	const navigate = useNavigate();
	const { currentUser } = useContext(AuthContext);
	useEffect(() => {
		if (currentUser) navigate('/');
	}, [currentUser]);

	return (
		<>
			<h1>Register</h1>
			<form onSubmit={ev => handleSubmit(registerData, ev)}>
				<div>
					<label htmlFor='email'>Email</label>
					<input
						type='text'
						id='email'
						onChange={ev =>
							fillData(registerData, setRegisterData, ev.target.value, 'email')
						}
					/>
				</div>
				<div>
					<label htmlFor='password'>Password</label>
					<input
						type='text'
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
				</div>
				<div>
					<label htmlFor='confirm'>Confirm password</label>
					<input
						type='text'
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
				</div>
				<button>Sign up</button>
			</form>
		</>
	);
};

const handleSubmit = async (registerData, ev) => {
	ev.preventDefault();
	const { email, password } = registerData;
	try {
		await createUserWithEmailAndPassword(auth, email, password);
	} catch (err) {
		console.log(err);
	}
	ev.target.reset();
};
export default Register;

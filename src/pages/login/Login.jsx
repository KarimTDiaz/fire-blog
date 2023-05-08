import { useState } from 'react';
import { fillData } from '../../utils/fillData';
const Login = () => {
	const [loginData, setLoginData] = useState({
		email: '',
		password: ''
	});

	return (
		<>
			<h1>Login</h1>
			<form onSubmit={ev => handleSubmit(ev, loginData)}>
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
						type='text'
						id='password'
						onChange={ev =>
							fillData(loginData, setLoginData, ev.target.value, 'password')
						}
					/>
				</div>
				<button>Sign in</button>
			</form>
		</>
	);
};

const handleSubmit = (ev, loginData) => {
	ev.preventDefault();
	console.log(loginData);
};

export default Login;

import styled from 'styled-components';

const LoginContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
const SignInButton = styled.div`
	display: flex;
	background-color: grey;
	padding: 0.2rem;
	border-radius: 5px;
	cursor: pointer;
`;
const SignInIcon = styled.img`
	width: 35px;
`;
export { LoginContainer, SignInButton, SignInIcon };

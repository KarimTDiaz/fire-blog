import styled from 'styled-components';
import { COLORS } from '../../constants/variables';

const LoginContainer = styled.div`
	padding-top: 5rem;
`;
const LoginForm = styled.form`
	padding: 0 3rem;
`;

const LoginFormField = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 1rem;
`;
const LoginInput = styled.input`
	padding: 0.3rem 0;
	border: 1px solid ${COLORS.PRIMARY};
	border-radius: 5px;
	&:-webkit-autofill,
	&:-webkit-autofill:hover,
	&:-webkit-autofill:focus {
		-webkit-box-shadow: 0 0 0px 1000px #fff inset;
	}
`;
const LoginLabel = styled.label``;

export { LoginContainer, LoginForm, LoginFormField, LoginInput, LoginLabel };

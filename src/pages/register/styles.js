import styled from 'styled-components';
import { COLORS } from '../../constants/variables';

const RegisterContainer = styled.div`
	padding-top: 5rem;
`;

const RegisterForm = styled.form`
	padding: 0 3rem;
`;
const RegisterFormField = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 1rem;
`;
const RegisterInput = styled.input`
	padding: 0.3rem 0;
	border: 1px solid ${COLORS.PRIMARY};
	border-radius: 5px;
	&:-webkit-autofill,
	&:-webkit-autofill:hover,
	&:-webkit-autofill:focus {
		-webkit-box-shadow: 0 0 0px 1000px #fff inset;
	}
`;
const RegisterLabel = styled.label``;

export {
	RegisterContainer,
	RegisterForm,
	RegisterFormField,
	RegisterInput,
	RegisterLabel
};

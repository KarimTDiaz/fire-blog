import styled from 'styled-components';
import { COLORS } from '../../constants/variables';

const NewPostContainer = styled.div`
	padding-top: 5rem;
`;
const NewPostForm = styled.form`
	padding: 0 3rem;
`;
const NewPostFormField = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 1rem;
`;
const NewPostInput = styled.input`
	padding: 0.3rem 0;
	border: 1px solid ${COLORS.PRIMARY};
	border-radius: 5px;
	&:-webkit-autofill,
	&:-webkit-autofill:hover,
	&:-webkit-autofill:focus {
		-webkit-box-shadow: 0 0 0px 1000px #fff inset;
	}
`;
const NewPostLabel = styled.label``;

const StyledSelect = styled.select`
	position: relative;
	width: 60%;
	padding: 0.25rem;
	margin-bottom: 2rem;
	font-size: 1rem;
	line-height: 1.1;
	background-color: transparent;
	border: 1px solid ${COLORS.PRIMARY};
	border-radius: 5rem;
	cursor: pointer;
`;

const NewPostTextArea = styled.textarea`
	height: 200px;
	padding: 0.3rem 0;
	border: 1px solid ${COLORS.PRIMARY};
	border-radius: 5px;
	&:-webkit-autofill,
	&:-webkit-autofill:hover,
	&:-webkit-autofill:focus {
		-webkit-box-shadow: 0 0 0px 1000px #fff inset;
	}
`;
export {
	NewPostContainer,
	NewPostForm,
	NewPostFormField,
	NewPostInput,
	NewPostLabel,
	NewPostTextArea,
	StyledSelect
};

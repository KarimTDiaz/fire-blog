import styled from 'styled-components';
import { COLORS } from '../../constants/variables';

const StyledErrorPopUp = styled.div`
	padding: 0.2rem 0;
	margin-bottom: 1rem;
	text-align: center;
	border: 1px solid ${COLORS.ERROR};
	border-radius: 5px;
`;

const ErrorMessage = styled.p`
	margin: 0;
	color: ${COLORS.ERROR};
`;

export { ErrorMessage, StyledErrorPopUp };

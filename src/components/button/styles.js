import styled from 'styled-components';
import { COLORS } from '../../constants/variables';

const PrimaryButton = styled.button`
	width: max-content;
	padding: 0.3rem 0.5rem;
	font-size: 15px;
	color: ${COLORS.PRIMARY};
	background-color: transparent;
	border: 1px solid ${COLORS.PRIMARY};
`;
const SecondaryButton = styled(PrimaryButton)`
	background-color: ${COLORS.PRIMARY};
	color: ${COLORS.LIGHT};
	border-radius: 3px;
`;

const SocialButton = styled(PrimaryButton)`
	display: flex;
	align-items: center;
	width: 200px;
	border-radius: 5px;
	cursor: pointer;
`;
const SocialIcon = styled.img`
	width: 35px;
`;
export { PrimaryButton, SecondaryButton, SocialButton, SocialIcon };

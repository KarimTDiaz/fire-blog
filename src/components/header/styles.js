import styled from 'styled-components';
import { COLORS } from '../../constants/variables';

const StyledHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: fixed;
	left: 0;
	z-index: 100;
	width: 100vw;
	padding: 1rem;
	background-color: ${COLORS.SECONDARY};
`;

const StyledMenu = styled.header`
	display: flex;
	gap: 2rem;
`;

export { StyledHeader, StyledMenu };

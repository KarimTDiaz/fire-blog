import styled from 'styled-components';
import { COLORS } from '../../constants/variables';

const FiltersForm = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 0 1rem;
	@media screen and (min-width: 640px) {
		flex-direction: row;
		justify-content: center;
		align-items: center;
		gap: 2rem;
	}
`;

const SearchContainer = styled.div`
	display: flex;
	justify-content: center;

	position: relative;
	margin-bottom: 1rem;
	@media screen and (min-width: 640px) {
		width: 100%;
	}
`;
const SearchIcon = styled.img`
	position: absolute;
	top: 20%;
	left: 4%;
	width: 25px;
	@media screen and (min-width: 640px) {
		left: 1.5%;
	}
`;

const SearchInput = styled.input`
	position: relative;
	width: 100%;
	padding: 0.5rem 2rem 0.5rem 3rem;
	font-size: 1.125rem;
	background-color: transparent;
	color: ${COLORS.SECONDARY};
	border: 1px solid ${COLORS.SECONDARY};
	border-radius: 5rem;

	&:focus {
		outline: none;
		caret-color: ${COLORS.PRIMARY};
	}
`;

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
	@media screen and (min-width: 640px) {
		width: 200px;
		top: 5px;
	}
`;

export { FiltersForm, SearchContainer, SearchIcon, SearchInput, StyledSelect };

import styled from 'styled-components';
import { COLORS, FONTS } from '../../constants/variables';

const BannerContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 2rem;
	padding: 6rem 1rem 2rem 1rem;
`;
const TitleContainer = styled.div`
	width: max-content;
	margin-left: auto;
	margin-right: auto;
`;
const StyledTitle = styled.h1`
	margin: 0;
	font-family: ${FONTS.PRIMARY};
	font-size: 2.5rem;
	font-weight: 700;
	@media screen and (min-width: 630px) {
		font-size: 5rem;
	}
	@media screen and (min-width: 1200px) {
		font-size: 6rem;
	}
`;

const StyledSubTitle = styled.h2`
	text-align: right;
	margin: 0;
	font-size: 1.2rem;
	color: ${COLORS.PRIMARY};
`;
const BannerImage = styled.img`
	width: 100%;
`;

export {
	BannerContainer,
	BannerImage,
	StyledSubTitle,
	StyledTitle,
	TitleContainer
};

import { useEffect, useState } from 'react';
import { IMAGES } from '../../constants/images-urls';
import {
	BannerContainer,
	BannerImage,
	StyledSubTitle,
	StyledTitle,
	TitleContainer
} from './styles';

const Banner = () => {
	const [imageSrc, setImageSrc] = useState('');
	useEffect(() => {
		const handleResize = () => {
			const width = window.innerWidth;
			width > 630
				? setImageSrc(IMAGES.bannerDesktop)
				: setImageSrc(IMAGES.banner);
		};

		handleResize();
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<BannerContainer>
			<TitleContainer>
				<StyledTitle>ShortHand Blog</StyledTitle>
				<StyledSubTitle>A blog for developers</StyledSubTitle>
			</TitleContainer>
			<BannerImage {...imageSrc} />
		</BannerContainer>
	);
};

export default Banner;

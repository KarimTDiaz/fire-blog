import { useNavigate } from 'react-router-dom';
import { ICONS } from '../../constants/icons';
import { StyledLogo } from './styles';

const Logo = () => {
	const navigate = useNavigate();
	return <StyledLogo {...ICONS.logo} onClick={() => navigate('/')} />;
};

export default Logo;

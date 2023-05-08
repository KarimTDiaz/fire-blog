import { NavLink } from 'react-router-dom';
import { StyledMenu } from './styles';

const Header = () => {
	return (
		<header>
			<nav>
				<StyledMenu>
					<NavLink to={'/'}>Home</NavLink>

					<NavLink to={'/login'}>Login</NavLink>

					<NavLink to={'/register'}>Register</NavLink>
				</StyledMenu>
			</nav>
		</header>
	);
};

export default Header;

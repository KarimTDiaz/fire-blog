import { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { BUTTONS } from '../../constants/buttons';
import { AuthContext } from '../../contexts/Auth.context';
import Button from '../button/Button';
import Logo from '../logo/Logo';
import { StyledHeader, StyledMenu } from './styles';

const Header = () => {
	const { currentUser } = useContext(AuthContext);
	const navigate = useNavigate();
	return (
		<StyledHeader>
			<Logo />
			<nav>
				<StyledMenu>
					<NavLink to={'/'}>Home</NavLink>
					{!currentUser ? (
						<>
							<div>
								<Button
									type={BUTTONS.PRIMARY}
									action={() => navigate('/login')}
								>
									SignIn
								</Button>
								Ç
								<Button
									type={BUTTONS.PRIMARY}
									action={() => navigate('/register')}
								>
									Register
								</Button>
							</div>
						</>
					) : (
						<>
							<NavLink to={'/new-post'}>New Post</NavLink>
							<NavLink to={'/profile'}>Profile</NavLink>
						</>
					)}
				</StyledMenu>
			</nav>
		</StyledHeader>
	);
};

export default Header;

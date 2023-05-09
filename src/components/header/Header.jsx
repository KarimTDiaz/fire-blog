import { NavLink } from 'react-router-dom';
import { StyledMenu, StyledHeader } from './styles';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/Auth.context';

const Header = () => {
	const { currentUser } = useContext(AuthContext);
	console.log(currentUser);
	return (
		<StyledHeader>
			<h1>{currentUser ? currentUser.email : ' NO USER'}</h1>
			<nav>
				<StyledMenu>
					<NavLink to={'/'}>Home</NavLink>
					{!currentUser ? (
						<>
							<NavLink to={'/login'}>Login</NavLink>
							<NavLink to={'/register'}>Register</NavLink>
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

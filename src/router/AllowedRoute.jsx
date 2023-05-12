import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../contexts/Auth.context';

const AllowedRoute = ({ redirectTo = '/', children }) => {
	const { currentUser } = useContext(AuthContext);
	if (currentUser) return <Navigate to={redirectTo} replace />;
	return children;
};

export default AllowedRoute;

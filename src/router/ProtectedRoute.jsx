import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../contexts/Auth.context';

const ProtectedRoute = ({ redirectTo = '/', children }) => {
	const { currentUser } = useContext(AuthContext);
	if (!currentUser) return <Navigate to={redirectTo} replace />;
	return children;
};

export default ProtectedRoute;

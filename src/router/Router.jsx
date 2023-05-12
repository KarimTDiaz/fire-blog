import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from '../layouts/Layouts';
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';
import NewPost from '../pages/new-post/NewPost';
import Profile from '../pages/profile/Profile';
import AllowedRoute from './AllowedRoute';
import ProtectedRoute from './ProtectedRoute';
import { useContext } from 'react';
import { AuthContext } from '../contexts/Auth.context';

const Router = () => {
	const { currentUser } = useContext(AuthContext);
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Home />} />
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
				<Route
					path='/new-post'
					element={
						<ProtectedRoute>
							<NewPost />
						</ProtectedRoute>
					}
				/>
				<Route
					path='/profile'
					element={
						<ProtectedRoute>
							<Profile />
						</ProtectedRoute>
					}
				/>
				<Route path='*' element={<Navigate to={'/'} />} />
			</Route>
		</Routes>
	);
};

export default Router;

import { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthContext } from '../contexts/Auth.context';
import Layout from '../layouts/Layouts';
import Edit from '../pages/edit/Edit';
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import NewPost from '../pages/new-post/NewPost';
import Profile from '../pages/profile/Profile';
import Register from '../pages/register/Register';
import ProtectedRoute from './ProtectedRoute';

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
				<Route
					path='/edit'
					element={
						<ProtectedRoute>
							<Edit />
						</ProtectedRoute>
					}
				/>
				<Route path='*' element={<Navigate to={'/'} />} />
			</Route>
		</Routes>
	);
};

export default Router;

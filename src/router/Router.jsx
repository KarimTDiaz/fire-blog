import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from '../layouts/Layouts';
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';
import NewPost from '../pages/new-post/NewPost';
import Profile from '../pages/profile/Profile';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Home />} />
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
				<Route path='/new-post' element={<NewPost />} />
				<Route path='/profile' element={<Profile />} />
				<Route path='*' element={<Navigate to={'/'} />} />
			</Route>
		</Routes>
	);
};

export default Router;

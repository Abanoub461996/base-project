import { createBrowserRouter, createRoutesFromElements, Navigate, Route, Outlet } from 'react-router-dom';
import RootLayout from '../../layouts/RootLayout';
import ErrorElement from "../../layouts/ErrorElement";
import Home from '../../pages/Home/Home';
import MainAuthForm from '../../pages/Auth/MainAuthForm';
import Login from '../../pages/Auth/Login';
const userAuthed = () => {

	if (!localStorage.getItem('userToken')) {
		
		throw new Error('You are not Authenticated, Try to Login Again');
	} else {
		return new Promise((resolve) => {
			resolve('some string');
		});
	}
};

const Router = createBrowserRouter(
	createRoutesFromElements([
		<>
		{/* login routes */}
		<Route path="" element={<MainAuthForm />} id="login">
				<Route path="login" element={<Login />} />
				{/* <Route path="reset-password" element={<ChangePassword />} /> */}
				{/* <Route path="forget-password" element={<ForgetPassword />} /> */}
			</Route>
			<Route
				path=""
				element={<RootLayout />}
				id="page_content"
				loader={userAuthed}
				errorElement={<Navigate to="/login" />}
			>
				<Route index element={<Home />} id="home" />
				{/*<Route path="rounds" element={<ActivitiesLayout />}>
					<Route index element={<Rounds />} />
					<Route path="activities/:slug?/:type?" element={<Activities />} />
					<Route path="my-activity/:type/:slug" element={<MyActivity />} />
				</Route> */}
			</Route>
		</>,
	]),
);
export default Router;
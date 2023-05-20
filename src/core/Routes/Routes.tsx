import { createBrowserRouter, createRoutesFromElements, Navigate, Route, Outlet } from 'react-router-dom';
import RootLayout from '../../layouts/RootLayout';
import ErrorElement from "../../layouts/ErrorElement";
import Home from '../../pages/Home/Home';
const userAuthed = () => {
    return new Promise((resolve, reject) => {
        resolve('some string');
    });

    // The Function To use in case of Auth system is established
	if (!localStorage.getItem('userToken')) {
		throw new Error('You are not Authenticated, Try to Login Again');
	} else {
		return new Promise((resolve, reject) => {
			resolve('some string');
		});
	}
};

const router = createBrowserRouter(
	createRoutesFromElements([
		<>
			<Route
				path=""
				element={<RootLayout />}
				id="page_content"
				loader={userAuthed}
				errorElement={<ErrorElement />}
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
export default router;
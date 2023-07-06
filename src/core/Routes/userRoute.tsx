// eslint-disable-next-line import/named
import { Outlet, RouteObject } from 'react-router';
import { routeModel } from '../enum/routeModels';

// Instant Loaded Components
import AuthenticationRoute from '../../components/Auth/Auth';
import Popup from '../../components/Popup/Popup';
import Home from '../../pages/Home/Home';

// LAzy Loaded
// const Admin = React.lazy(() => import("./Admin.js"));

export const userRoutes: RouteObject[] = [
	{ index: true, element: <Home /> },
	{
		path: routeModel.tournament,
		element: (
			<>
				<Outlet />
			</>
		),
		children: [
			{ index: true, element: <>Tournaments View</> },
			{ path: routeModel.create, element: <Popup title={'sda'} content={<>hello</>} /> },
			{ path: ':slug', element: <>show tournament</> },
		],
	},
	{
		path: routeModel.championsCup,
		element: (
			<>
				<div>title</div>
				<Outlet />
			</>
		),
		children: [
			{ index: true, element: <>Cups View</> },
			{ path: routeModel.create, element: <Popup title={'sda'} content={<>hello</>} /> },
			{ path: ':slug', element: <>show Cup</> },
		],
	},
	{
		path: routeModel.users,
		element: (
			<>
				<Outlet />
			</>
		),
		children: [
			{ index: true, element: <>Users View</> },
			{ path: routeModel.create, element: <Popup title={'sda'} content={<>add</>} /> },
			{ path: 'edit/:slug', element: <Popup title={'sda'} content={<>edit</>} /> },
		],
	},
	{
		path: routeModel.teams,
		element: (
			<>
				<Outlet />
			</>
		),
		children: [
			{ index: true, element: <>Teams View</> },
			{ path: routeModel.create, element: <Popup title={'sda'} content={<>hello</>} /> },
		],
	},
	{ path: routeModel.calender, element: <> calender</> },
	{ path: routeModel.notifications, element: <> notifications</> },
	{
		path: routeModel.helpCenter,
		element: (
			<>
				<Outlet />
			</>
		),
		children: [
			{ index: true, element: <>Faqs View</> },
			{ path: routeModel.create, element: <Popup title={'sda'} content={<>Faqs add</>} /> },
		],
	},
	{
		path: routeModel.myProfile,
		element: (
			<>
				<div>my profile</div>
			</>
		),
	},
];

export const authRoutes: RouteObject[] = [
	{
		path: routeModel.login,
		element: (
			<AuthenticationRoute>
				<>login</>
			</AuthenticationRoute>
		),
	},
	{
		path: routeModel.forgotPassword,
		element: (
			<AuthenticationRoute>
				<>forgot-password</>
			</AuthenticationRoute>
		),
	},
	{
		path: routeModel.resetPassword,
		element: (
			<AuthenticationRoute>
				<>reset-password</>
			</AuthenticationRoute>
		),
	},
];

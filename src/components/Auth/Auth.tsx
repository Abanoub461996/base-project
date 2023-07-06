import { Suspense } from "react";
import { Navigate } from "react-router-dom";
import { useLocalStorage } from 'react-use';

// eslint-disable-next-line react/prop-types
const AuthenticationRoute = ({children}) => {
	const [token] = useLocalStorage('token');
	if (!token) {
		return <>
		<Suspense fallback={<div>Loading</div>}>
		{children}
		</Suspense>
		</>;
	} else return <Navigate to="/" />;
};

export default AuthenticationRoute;

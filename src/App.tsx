import { useState } from 'react';
import router from './core/Routes/Routes';
import { RouterProvider } from 'react-router-dom';

import './App.css';


function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;

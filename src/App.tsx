// !Routing
import Router from './core/Routes/Routes';
import { RouterProvider } from 'react-router-dom';
// !Localization
import './core/localization/i18next'; //Localization instance passed

import './core/GlobalDigitalStyle/global.css';
import './App.css';



function App() {

	return (
		<>
			<RouterProvider router={Router} />
		</>
	);
}

export default App;

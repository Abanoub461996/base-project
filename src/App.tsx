import { useState } from 'react';
import './App.css';

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<h1 className="p-6 max-w-sm mx-auto bg-black text-white">Vite + React</h1>
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
				<p className="Manrope">
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">Click on the Vite and React logos to learn more</p>
		</>
	);
}

export default App;
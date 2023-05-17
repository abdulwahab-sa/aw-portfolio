import './App.css';
import { lazy, Suspense } from 'react';

const Home = lazy(() => import('./pages/Home'));

function App() {
	return (
		<Suspense
			fallback={
				<div id="loading">
					<div className="loader"></div>
				</div>
			}
		>
			<Home />
		</Suspense>
	);
}

export default App;

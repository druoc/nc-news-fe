import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Articles from './components/Articles';
import Users from './components/Users';

const App = () => {
	return (
		<main>
			<Header />
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="articles" element={<Articles />} />
				<Route path="users" element={<Users />} />
			</Routes>
		</main>
	);
};

export default App;

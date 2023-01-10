import { Routes, Route } from 'react-router-dom';
import { getArticles } from './utils/api';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Articles from './components/Articles';
import Users from './components/Users';

const App = () => {
	const [articles, setArticles] = useState([]);

	useEffect(() => {
		getArticles().then((usersFromApi) => {
			setArticles(usersFromApi);
		});
	}, [setArticles]);

	console.log(articles);
	return (
		<main>
			<Header />
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="articles" element={<Articles articles={articles} />} />
				<Route path="users" element={<Users />} />
			</Routes>
		</main>
	);
};

export default App;

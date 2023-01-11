import { Routes, Route } from 'react-router-dom';
import { getArticles } from './utils/api';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Articles from './components/Articles';
import FullArticle from './components/FullArticle';
import Users from './components/Users';

const App = () => {
	const [articles, setArticles] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setIsLoading(true);
		getArticles().then((usersFromApi) => {
			setArticles(usersFromApi);
			setIsLoading(false);
		});
	}, [setArticles]);

	return (
		<main>
			<Header />
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route
					path="articles"
					element={<Articles articles={articles} isLoading={isLoading} />}
				/>
				<Route path="articles/:article_id" element={<FullArticle />} />
				<Route path="users" element={<Users />} />
			</Routes>
		</main>
	);
};

export default App;

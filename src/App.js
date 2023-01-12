import { Routes, Route } from 'react-router-dom';
import { getArticles } from './utils/api';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Articles from './components/Articles';
import FullArticle from './components/FullArticle';

const App = () => {
	const [articles, setArticles] = useState([]);
	const [articlesLoading, setArticlesLoading] = useState(true);

	useEffect(() => {
		setArticlesLoading(true);
		getArticles().then((usersFromApi) => {
			setArticles(usersFromApi);
			setArticlesLoading(false);
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
					element={
						<Articles articles={articles} articlesLoading={articlesLoading} />
					}
				/>
				<Route path="articles/:article_id" element={<FullArticle />} />
			</Routes>
		</main>
	);
};

export default App;

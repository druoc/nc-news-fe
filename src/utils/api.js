import axios from 'axios';

export const getArticles = () => {
	return axios
		.get('https://nc-news-lwqn.onrender.com/api/articles')
		.then((result) => {
			return result.data.articles;
		});
};

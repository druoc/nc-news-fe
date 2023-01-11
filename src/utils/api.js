import axios from 'axios';

export const getArticles = () => {
	return axios
		.get('https://nc-news-lwqn.onrender.com/api/articles')
		.then((result) => {
			return result.data.articles;
		});
};

export const getArticleById = (article_id) => {
	return axios
		.get(`https://nc-news-lwqn.onrender.com/api/articles/${article_id}`)
		.then((result) => {
			return result;
		});
};

export const convertDate = (date) => {
	return date.slice(0, 10);
};

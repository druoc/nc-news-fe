import axios from 'axios';

export const convertDate = (date) => {
	return date.slice(0, 10);
};

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

export const getArticleComments = (article_id) => {
	return axios
		.get(
			`https://nc-news-lwqn.onrender.com/api/articles/${article_id}/comments`
		)
		.then((result) => {
			return result.data;
		});
};

export const updateArticleVote = (article_id, vote) => {
	return axios.put(
		`https://nc-news-lwqn.onrender.com/api/articles/${article_id}`,
		{ inc_votes: vote }
	);
};

export const postArticleComment = (article_id, username, body) => {
	return axios
		.post(
			`https://nc-news-lwqn.onrender.com/api/articles/${article_id}/comments`,
			{ username: username, body: body }
		)
		.then((result) => {
			return result.data[0];
		});
};

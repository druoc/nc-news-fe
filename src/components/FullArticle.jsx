import { Card, Button, Space } from 'antd';
import {
	getArticleById,
	getArticleComments,
	updateArticleVote,
} from '../utils/api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { TailSpin } from 'react-loading-icons';

import CommentCard from './CommentCard';
import SubmitComment from './SubmitComment';

const FullArticle = () => {
	//state variables
	const { article_id } = useParams();
	const [article, setArticle] = useState({});
	const [articleIsLoading, setArticleIsLoading] = useState(true);
	const [comments, setComments] = useState([]);
	const [optimisticVote, setOptimisticVote] = useState(0);
	const [error, setError] = useState('');
	const [postedComment, setPostedComment] = useState({});
	const username = 'cooljmessy';

	//useEffect hooks
	useEffect(() => {
		setArticleIsLoading(true);
		getArticleById(article_id).then((response) => {
			setArticle(response.data);
			setArticleIsLoading(false);
		});
	}, [setArticle, article_id]);

	useEffect(() => {
		getArticleComments(article_id).then((response) => {
			setComments(response);
		});
	}, [setComments, article_id]);

	//event handler functions
	const upVoteArticle = () => {
		let count = 0;
		count++;
		updateArticleVote(article_id, count)
			.then(() => {
				setOptimisticVote(optimisticVote + 1);
			})
			.catch((err) => {
				if (err.response) {
					setError('Something went wrong...');
				}
			});
	};

	const downVoteArticle = () => {
		let count = 0;
		count--;
		updateArticleVote(article_id, count)
			.then(() => {
				setOptimisticVote(optimisticVote - 1);
			})
			.catch((err) => {
				if (err.response) {
					setError('Something went wrong...');
				}
			});
	};

	if (articleIsLoading) {
		return (
			<Space style={{ display: 'flex', justifyContent: 'center' }}>
				<TailSpin />
			</Space>
		);
	}
	return (
		<>
			<section className="full-article">
				<Card title={article.title}>
					<p>{article.body}</p>
					<strong>
						<p>by {article.author}</p>
					</strong>
					<p>Votes: {article.votes + optimisticVote}</p>
					<Space>
						<Button type="primary" onClick={upVoteArticle}>
							Vote +
						</Button>
						<Button onClick={downVoteArticle}>Vote -</Button>
						<span style={{ color: 'red' }}>{error}</span>
					</Space>
				</Card>
			</section>

			<section className="section-comments-section">
				<SubmitComment
					username={username}
					article_id={article_id}
					postedComment={postedComment}
					setPostedComment={setPostedComment}
				/>
				<Space
					size="middle"
					style={{
						display: 'flex',
						justifyContent: 'center',
					}}
					wrap
				>
					{comments.map((comment) => {
						return <CommentCard key={comment.comment_id} comment={comment} />;
					})}
				</Space>
			</section>
		</>
	);
};

export default FullArticle;

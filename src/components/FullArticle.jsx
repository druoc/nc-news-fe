import { Card, Button, Space } from 'antd';
import { getArticleById } from '../utils/api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { TailSpin } from 'react-loading-icons';
import { getArticleComments } from '../utils/api';
import CommentCard from './CommentCard';

const FullArticle = () => {
	const { article_id } = useParams();
	const [article, setArticle] = useState({});
	const [articleIsLoading, setArticleIsLoading] = useState(true);
	const [comments, setComments] = useState([]);

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

	if (articleIsLoading) {
		return <TailSpin />;
	}
	return (
		<>
			<section className="full-article">
				<Card title={article.title}>
					<p>{article.body}</p>
					<strong>
						<p>by {article.author}</p>
					</strong>
					<p>Votes: {article.votes}</p>
					<Space>
						<Button type="primary">Vote +</Button>
						<Button>Vote -</Button>
					</Space>
				</Card>
			</section>

			<section className="section-comments-section">
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

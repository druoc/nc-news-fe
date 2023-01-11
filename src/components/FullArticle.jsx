import { Card, Button, Space } from 'antd';
import { getArticleById } from '../utils/api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { TailSpin } from 'react-loading-icons';

const FullArticle = () => {
	const { article_id } = useParams();
	const [article, setArticle] = useState({});
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setIsLoading(true);
		getArticleById(article_id).then((response) => {
			setArticle(response.data);
			setIsLoading(false);
		});
	}, [setArticle, article_id]);

	if (isLoading) {
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
		</>
	);
};

export default FullArticle;

import { Typography, Card, Button } from 'antd';
import { Link } from 'react-router-dom';
import { convertDate } from '../utils/api';

const ArticleCard = ({ article }) => {
	const { Title } = Typography;

	return (
		<div className="article-card">
			<Card
				title={article.title}
				bordered={true}
				style={{ width: 500, maxWidth: '90vw' }}
			>
				<Button type="default">
					<Link to={`/articles/${article.article_id}`}>
						Read full article...
					</Link>
				</Button>
				<p>Votes: {article.votes}</p>
				<p>Comments: {article.comment_count}</p>
				<Title level={5}>Topic: {article.topic}</Title>
				<p>
					Posted by: {article.author} on {convertDate(article.created_at)}
				</p>
			</Card>
		</div>
	);
};

export default ArticleCard;

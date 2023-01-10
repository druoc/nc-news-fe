import { Typography, Card, Button, Space } from 'antd';

const ArticleCard = ({ article }) => {
	const { Title } = Typography;
	return (
		<div className="article-card">
			<Card title={article.title} bordered={true} style={{ width: 500 }}>
				<Button type="dashed">Read full article...</Button>
				<p>Votes: {article.votes}</p>
				<p>Comments: {article.comment_count}</p>
				<Title level={5}>Topic: {article.topic}</Title>
				<Space>
					<Button type="primary">Vote +</Button>
					<Button>Vote -</Button>
				</Space>
			</Card>
		</div>
	);
};

export default ArticleCard;

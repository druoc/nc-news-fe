import { useState } from 'react';
import ArticleCard from './ArticleCard';
import { Typography, Space } from 'antd';

const Articles = ({ articles }) => {
	const { Title } = Typography;
	const [isLoading, setIsLoading] = useState(false);
	return (
		<section className="articles-section">
			<Title level={3}>Listing articles:</Title>
			<div className="articles-container">
				<Space
					size="middle"
					style={{ display: 'flex', justifyContent: 'center' }}
					wrap
				>
					{articles.map((article) => {
						return <ArticleCard key={article.article_id} article={article} />;
					})}
				</Space>
			</div>
		</section>
	);
};

export default Articles;

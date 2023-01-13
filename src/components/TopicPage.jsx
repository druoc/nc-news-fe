import ArticleCard from './ArticleCard';
import { Typography, Space } from 'antd';
import { useState, useEffect } from 'react';
import { getArticles } from '../utils/api';
import Grid from 'react-loading-icons/dist/esm/components/bars';

const TopicPage = ({ topic }) => {
	const { Title } = Typography;

	const [filteredArticles, setFilteredArticles] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setIsLoading(true);
		getArticles().then((articles) => {
			const filtered = articles.filter((article) => {
				return article.topic === topic;
			});
			setFilteredArticles(filtered);
			setIsLoading(false);
		});
	}, [setFilteredArticles, topic]);

	if (isLoading) {
		return (
			<Space style={{ display: 'flex', justifyContent: 'center' }}>
				<Grid />
			</Space>
		);
	}

	return (
		<section className="articles-section">
			<Title
				level={3}
				style={{ display: 'flex', justifyContent: 'center', color: '#fff' }}
			>
				Listing {topic} articles:
			</Title>
			<div className="articles-container">
				<Space
					size="middle"
					style={{ display: 'flex', justifyContent: 'center' }}
					wrap
				>
					{filteredArticles.map((article) => {
						return <ArticleCard key={article.article_id} article={article} />;
					})}
				</Space>
			</div>
		</section>
	);
};

export default TopicPage;

import ArticleCard from './ArticleCard';
import { Typography, Space } from 'antd';
import { Bars } from 'react-loading-icons';

const Articles = ({ articles, isLoading }) => {
	const { Title } = Typography;

	if (isLoading) {
		return <Bars />;
	}
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

import { Typography } from 'antd';

const ErrorPage = () => {
	const { Title } = Typography;
	return (
		<section className="error-page">
			<Title
				level={4}
				style={{ color: 'red', display: 'flex', justifyContent: 'center' }}
			>
				Sorry, that page or resource does not exist!
			</Title>
		</section>
	);
};

export default ErrorPage;

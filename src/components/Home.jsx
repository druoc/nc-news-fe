import { Typography } from 'antd';
const Home = () => {
	const { Title } = Typography;
	return (
		<div className="home">
			<Title
				className="home-header"
				level={3}
				style={{ display: 'flex', justifyContent: 'center', color: '#fff' }}
			>
				Hello, welcome to NC News!
			</Title>
		</div>
	);
};

export default Home;

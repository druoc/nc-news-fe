import { Typography } from 'antd';
const Home = () => {
	const { Title } = Typography;
	return (
		<div className="home">
			<Title level={3}>Hello, welcome to NC News!</Title>
		</div>
	);
};

export default Home;

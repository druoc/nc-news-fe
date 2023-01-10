import { Typography } from 'antd';

const Header = () => {
	const { Title } = Typography;
	return (
		<header className="header">
			<Title level={1}>NC News</Title>
		</header>
	);
};

export default Header;

import { Typography, Button, Space } from 'antd';
import { Link } from 'react-router-dom';

const Topics = () => {
	const { Title } = Typography;

	return (
		<section className="topics">
			<Title
				level={3}
				style={{ color: '#fff', display: 'flex', justifyContent: 'center' }}
			>
				View Topics:
			</Title>

			<Title
				level={5}
				style={{ color: '#fff', display: 'flex', justifyContent: 'center' }}
			>
				Click one of the navigation links below to view articles filtered by
				topic.
			</Title>
			<Space
				style={{
					display: 'flex',
					justifyContent: 'center',
				}}
			>
				<Button>
					<Link to="coding" className="nav-links">
						Coding
					</Link>
				</Button>

				<Button>
					<Link to="football" className="nav-links">
						Football
					</Link>
				</Button>
				<Button>
					<Link to="cooking" className="nav-links">
						Cooking
					</Link>
				</Button>
			</Space>
		</section>
	);
};

export default Topics;

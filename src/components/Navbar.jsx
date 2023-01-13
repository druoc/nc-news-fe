import { Link } from 'react-router-dom';
import { Button, Space } from 'antd';

const Navbar = () => {
	return (
		<nav className="navbar">
			<Space
				style={{
					display: 'flex',
					justifyContent: 'center',
					marginBottom: '20px',
				}}
			>
				<Button>
					<Link to="/" className="nav-links">
						Home
					</Link>
				</Button>

				<Button>
					<Link to="articles" className="nav-links">
						Articles
					</Link>
				</Button>
				<Button>
					<Link to="topics" className="nav-links">
						Topics
					</Link>
				</Button>
			</Space>
		</nav>
	);
};

export default Navbar;

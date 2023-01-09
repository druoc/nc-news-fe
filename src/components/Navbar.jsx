import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className="navbar">
			<ul>
				<li>
					<Link to="/" className="nav-links">
						Home
					</Link>
				</li>
				<li>
					<Link to="articles" className="nav-links">
						Articles
					</Link>
				</li>
				<li>
					<Link to="users" className="nav-links">
						Users
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;

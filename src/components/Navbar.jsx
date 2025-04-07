import { Link } from "react-router-dom";
import "./Navbar.css"; // Import the CSS file for styling

function Navbar() {
    return (
        <nav className="navbar">
            <h1 className="navbar-title">ONLINE LIBRARY</h1>
            <ul className="navbar-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/browse">Browse</Link></li>
                <li><Link to="/add">Add Book</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
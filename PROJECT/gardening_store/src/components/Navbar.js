import React from 'react';
import { Link} from 'react-router-dom';
import "./Navbar.css";
const Navbar = () => {
    return (
        <nav className="nav">
            <ul>
                <li className="nav-item">
                    <Link to="/home" className="nav-link" >
                        Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/about" className="nav-link" >
                        AboutUs
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/bestselling" className="nav-link">
                        Best Selling
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/seeds" className="nav-link">
                        Seeds
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/soil" className="nav-link">
                        Soil & Fertilizer
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/growbags" className="nav-link">
                        Plant Grow Bags
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/pots" className="nav-link" >
                        Pots
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/tools" className="nav-link">
                        Tools
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/feedback" className="nav-link">
                        Feedback
                    </Link>
                </li>
                <li className="nav-item" >
                    <Link to="/" className="nav-link" >
                        Login/SignUp
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;

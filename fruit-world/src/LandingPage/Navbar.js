
import { Link, Navigate, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";
import { FaSearch, FaUser, FaShoppingCart } from 'react-icons/fa';

export default function Navbar() {
    const navigate = useNavigate()
    return (
        <nav className="navbar">
            <div className="logo-container">
                <h2 className="logo">Fruit World</h2>
                <h5 className="slogan">Farm to Home</h5>
            </div>

            <ul className="nav-links">
                <li><Link to="/hero">Home</Link></li>
                <li>About</li>
                <li>Shop</li>
                <li>Gallery</li>
                <li>Contact</li>
            </ul>

            <div className="search-box">
                <input type="text" placeholder="Search" />
                <button className="search-btn">
                    <FaSearch size={20} />
                </button>
            </div>

            <div className="icons">
                <span style={{
                    fontSize: '18px',
                    color: '#555'
                }}><FaUser  size={18}  onClick={()=> navigate("/LoginPage")}/></span>
                <span><button className="floating-cart-btn">
                    <FaShoppingCart size={18} />
                </button></span>
            </div>
        </nav>
    );
}


import { Outlet, Link, NavLink } from "react-router-dom";
import './Layout.css'

export default function Layout() {
    return <>
        <nav className="nav">
            <Link to="/">Home</Link> 
                       {/* <Link to="/contact">Contact</Link>  ||
            <Link to="/blogs">Blogs</Link> ||
            <NavLink to="/about" style={({ isActive }) =>
                ({ color: isActive ? "blue" : "red" })}> About Us</NavLink> ||
            <Link to="/service">Services</Link> ||
            <Link to="/product">Product</Link> ||
            <Link to="/getcall">getCall</Link> ||
            <Link to="/postCall">Post Call</Link> ||
            <Link to="/updatecall">Update Data</Link> || */}

        </nav>
        <hr /> <hr />
        <Outlet></Outlet>
    </>
}
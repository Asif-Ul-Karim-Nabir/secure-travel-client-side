import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css'

const Header = () => {
    const {user,logOut } = useAuth()
    return (
        <div className="header-container">
            <div className="logo">
               <Link to="/home">
               <h2>Secure Travel</h2>
               </Link>
            </div>
            <div className="nav-link">
                <Link to="/home">Home</Link>
                <Link to="/plans">Plans</Link>
                {!user?.email && <Link to="/login">Login</Link>} 
                {user?.email && <Link to="/add-plan">Add Plan</Link>} 
                {user?.email && <Link to="/orders">My Orders</Link>} 
                {user?.email && <Link to="/home" onClick={logOut}>LogOut</Link>}
                {/* <p>{user?.displayName}</p> */}
                <img src={user?.photoURL} alt="" />
            </div>
        </div>
    );
};

export default Header;
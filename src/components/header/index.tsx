import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
/**
* @author
* @function Header
**/

const Header = () => {
  return(
    <header className="header">
        <nav className="headerMenu">
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
        </nav>
        <div>
        <nav className="headerMenu">
          <Link to="/login">Login</Link>
            <Link to="/sign-up">Signup</Link>
        </nav>
        </div>
    </header>
   )

 }

export default Header

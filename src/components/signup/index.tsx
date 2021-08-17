import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

/**
* @author
* @function Header
**/

const Home = () => {
  return(
    <div>
      <h2>Join</h2>
        <form className="login-form">
        <div className="form-group">
          <span>Full name</span>
          <input type="name" className="form-control" id="exampleInputEmail1" />
        </div>
        <div className="form-group mt-2">
          <span>Email</span>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="form-group mt-2">
          <span>Username(only letters, number, and underscores)</span>
          <input type="username" className="form-control" />
        </div>
        <div className="form-group mt-2">
          <span>Password(min 6 char)</span>
          <input type="password" className="form-control" id="exampleInputPassword1" />
        </div>
        
        <button type="submit" className="btn btn-dark btn-login">Join</button>
        <p className="dont-acc mt-3">Already have an account? <Link to="/login">Login</Link></p>
      </form>    
    </div>
   )

 }

export default Home

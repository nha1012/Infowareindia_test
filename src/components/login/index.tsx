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
      <h2>Login</h2>
      <form className="login-form">
      <div className="form-group">
        <span>Email</span>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
      </div>
      <div className="form-group mt-2">
        <span>Password</span>
        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
      </div>
      <button type="submit" className="btn btn-dark btn-login">Login</button>
      <p className="dont-acc mt-3">Don't have an account? <Link to="/sign-up">Join</Link></p>
    </form>
    </div>
    
   )

 }

export default Home

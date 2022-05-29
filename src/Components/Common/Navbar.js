import React from 'react';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from "../../firebase.init";
import { Link } from 'react-router-dom';
import logo from '../../assets/logo0.png'


const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
  };

    const menu = <>   
     <li><Link to="/">Home</Link></li>               
     <li><Link to="/blog">Blog</Link></li>               
     <li><Link to="/myportfolio">My Portfolio</Link></li>
     {/* <li><Link to="/purchase">Purchase</Link></li> */}
     <li><Link to="/dashboard">Dashboard</Link></li>
     {user ? <li><Link to="" onClick={logout}>Log out</Link></li> : <li><Link to="/login">Log in</Link></li>}
    </>
     
    
    return (
        <div>
            <div className="navbar bg-base-100">              
  <div className="navbar-start">
    <div className="dropdown lg:hidden md:hidden">
      <label tabIndex="0" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {menu}
      </ul>
    </div>
    <Link to="/" className="btn btn-ghost text-2xl font-bold"><img className='mr-3' src={logo} alt="" /><span>Solid Tools Corp</span></Link>      
  </div>
  <div className="navbar-end hidden lg:flex">  
    <ul className="menu menu-horizontal p-0">
     {menu}
    </ul>
  </div>  
</div>
        </div>
    );
};

export default Navbar;
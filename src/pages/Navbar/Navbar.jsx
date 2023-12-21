import React from 'react';
import logos from '/img/task-logo.png';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import  './Navbar.css'
import useAuth from '../../hooks/useAuth';
const Navbar = () => {

  const {user, logoutUser} = useAuth();
  const navigate = useNavigate()

    const navlinks = <>
        <li><NavLink className='mx-1 overflow-auto md:my-0' to={'/'}>Home</NavLink></li>
        <li><NavLink className='mx-1  my-1 md:my-0' to={'/dashboard'}>Dashboard</NavLink></li>
        <li><NavLink className='mx-1 ' to={'/about'}>About</NavLink></li>
        <li><NavLink className='mx-1 my-1 md:my-0' to={'/contact'}>Contact</NavLink></li>
    </>

const handleLogout = ()=> {
  logoutUser()
  .then( () => {
    setTimeout(() => {
    }, 200);
    navigate('/') 
  })
  .catch(error => console.error(error))
}

    return (
        <div className="navbar  bg-base-100 shadow-md bg rounded-t-none rounded-r-md rounded-l-md">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[5] p-2 shadow bg-base-100 rounded-box w-52">
        {navlinks}
      </ul>
    </div>
    <Link ><img className="w-32" src={logos} alt="" /></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {navlinks}
    </ul>
  </div>
  <div className="navbar-end">

   { user ? <button onClick={handleLogout} className="btn btn-sm bg-orange-800 hover:bg-orange-500 hover:text-black text-white">Logout</button>
   : <NavLink to={'/login'} className="btn btn-sm bg-red-500 text-white">Login</NavLink>
  } 
  </div>
</div>
    );
};

export default Navbar;
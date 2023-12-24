import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookSquare, FaGithub, FaLinkedin } from "react-icons/fa";
const Footer = () => {
    return (
        <footer className="footer items-center rounded-md p-4 bg-neutral text-neutral-content">
  <aside className="items-center grid-flow-col">
    <img className='w-24 bg-slate-50 rounded-full'  src="./img/task-logo.png" alt="" />
    <p>Copyright © 2023 - All right reserved</p>
  </aside> 
  <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
    <Link to={'https://www.facebook.com/cse.wadud'}>
      <FaFacebookSquare className="text-slate-400 text-2xl hover:text-blue-400" />
    </Link>
    <Link to={'https://github.com/amiadud'}>
    <FaGithub className='text-gray-400 text-2xl hover:text-cyan-400' />
    </Link>
    <Link to={'https://www.linkedin.com/in/md-abdul-adud-5b65762a5'}><FaLinkedin className='text-gray-300 text-2xl hover:text-gray-400' /></Link>
  </nav>
</footer>
    );
};

export default Footer;

import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
    <nav>
        <div className='navbar'>
        <div className='Logo'>
            <h2>Logo</h2>
        </div>
        <ul className='list'> 
        <Link to='/'>
        <li className='list-item'>About</li>
        </Link>
        <Link to='/contact'>
        <li className='list-item'>Contact</li>
        </Link>
        <Link to='/live'>
        <li className='list-item'>Live</li>
        </Link>
        </ul>
        </div>
    </nav>
    </>
  );
}

export default Navbar;
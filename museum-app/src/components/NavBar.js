import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css'
const NavBar = () => {
  return (<div className='navbar'>
    <Link to ='/'>The Gallery</Link>
    <Link to = '/'>Home</Link>
    <Link to ='/about'>About</Link>
    <a href="">Contact</a>

  </div>
  )
}

export default NavBar;
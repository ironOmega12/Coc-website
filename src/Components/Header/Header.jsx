import React, { useRef } from 'react'
import './Header.css'

const Header = () => {

    const navListRef = useRef(null);

    const toggleBg = () => {
        const navList = navListRef.current;
        if (navList) {
            navList.classList.toggle('open');
        }
    };

  return (
      <header>
        <a href='#' className='logo'>COC-Website</a>

        <ul ref={navListRef} className='nav-list'>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Clans</a></li>
            <li><a href="#">Town Hall</a></li>
            <li><a href="#">Troops</a></li>
            <li><a href="#">Contact</a></li>
        </ul>

        <div className='bx bx-menu' id='menu-icon' onClick={toggleBg}></div>
      </header>
  )
}

export default Header
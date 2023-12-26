import React from 'react'
import './navbar.css';
import { Link, animateScroll as scroll } from 'react-scroll';
const navbar = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };


  return (
    <div>
    <ul className='nav-unorderedList'>
      <li className='nav-listItem' style={{cursor:'pointer'}}>
        <Link
          to='contact-me-section'
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className='nav-text'
        >
          Contact
        </Link>
      </li>
      <li className='nav-listItem'style={{cursor:'pointer'}}>
        <Link
          to='home-section'
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className='nav-text'
        >
          Home
        </Link>
      </li>
      <li className='nav-listItem'style={{cursor:'pointer'}}>
        <Link
          to='about-me-section'
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className='nav-text'
        >
          About me
        </Link>
      </li>
      <li className='nav-listItem' style={{ cursor: 'pointer' }}>
          {/* Use a regular anchor for external links */}
          <a
            href='https://drive.google.com/file/d/1ANP2lssJ8V8nXUNiTgLkF4QCFZFxZ65S/view?usp=sharing'
            target='_blank'  // Open the link in a new tab
            rel='noopener noreferrer'
            className='nav-text'
          >
            Resume
          </a>
        </li>
    </ul>
  </div>
  )
}

export default navbar;
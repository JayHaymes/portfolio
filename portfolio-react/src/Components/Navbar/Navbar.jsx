import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './Navbar.css';
import logo from '../../assets/logo-color.svg';

const Navbar = () => {
    return (
        <div className='navbar'>
            <img className='navbar-logo' src={logo} alt='Logo' />
            <ul className="nav-menu">
                <li><AnchorLink className='anchor-link' href='#home'><p>Home</p></AnchorLink></li>
                <li><AnchorLink className='anchor-link' offset='50' href='#about'><p>About Me</p></AnchorLink></li>
                <li><AnchorLink className='anchor-link' offset='50' href='#services'><p>Services</p></AnchorLink></li>
                <li><AnchorLink className='anchor-link' offset='50' href='#work'><p>Portfolio</p></AnchorLink></li>
                <li><AnchorLink className='anchor-link' offset='50' href='#contact'><p>Contact</p></AnchorLink></li>
            </ul>
            <div className="nav-connect"><AnchorLink className='anchor-link' offset='50' href='#contact'>Connect With Me</AnchorLink></div>
        </div>
    );
}

export default Navbar;

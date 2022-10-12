import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav className='menu'>
                <a href="./Home">Home</a>
                <a href="./Home">About</a>
                <a href="./Home">Contact Us</a>
                <a href="./Home">Privacy Policy</a>
            </nav>
        </div>
    );
};

export default Header;
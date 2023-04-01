import React from 'react';
import './Header.css';
import logo from '../../images/hardy.png'
const Header = () => {
    return (
        <div>
            <nav className='header'>
                    <div>
                        <h1>Knowledge Cafe</h1>
                    </div> 
                    <div> 
                        <img className='img-style' src={logo} alt="" />
                     </div>
            </nav>
        </div>
    );
};

export default Header;
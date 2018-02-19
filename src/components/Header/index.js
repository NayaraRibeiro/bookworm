import React from 'react';
import bookworm_logo from '../../book_shelf.svg';
import './Header.css';
import HeaderLink from "../../containers/Links";

const Header = ( ) => (
    <div className='header'>
        <div className='page_logo'>
            <div className='logo_header'>
                <a href="/">
                    <img src={bookworm_logo} alt="Page logo - draw of black bookshelf"/>
                    <span className='page_title' title='Bookworm Library'>BOOKWORM</span>
                </a>
            </div>
        </div>

        <div className='header_nav'>
            <HeaderLink address='about_us'> ABOUT US</HeaderLink>
        </div>
    </div>
);

export default Header;
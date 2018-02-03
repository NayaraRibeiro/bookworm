import React, {Component} from 'react';
import bookworm_logo from '../../book_shelf.svg';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div className='header'>
                <div className='page_logo'>
                    <div className='logo_header'>
                        <a href="/">
                            <img src={bookworm_logo} alt="Page logo - draw of black bookshelf"/>
                            <span className='page_title' title='BOOKWORM'>BOOKWORM</span>
                        </a>
                    </div>
                </div>
            </div>

        );
    }
}

export default Header;
import React, {Component} from 'react';
import bookworm_logo from '../../book_shelf.svg';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div className='header'>
                <div className='page_logo'>
                    <div className='logo_header'>
                        <img src={bookworm_logo} alt="Page logo - draw of black bookshelf"/>
                    </div>

                    <div className='page_title'>BOOKWORM</div>
                </div>
            </div>

        );
    }
}

export default Header;
import React, {Component} from 'react';
import github_logo from '../../github-logo.svg';

import './Footer.css'

class Footer extends Component {
    render() {
        return (
            <div className='footer'>
                <div className='footer_title'>WHERE THE LIBRARY LIVES</div>
                <div className='git_logo'>
                    <a href="https://github.com/NayaraRibeiro/bookworm" title='Github library page'> <img src={github_logo} alt="Github logo" /></a>
                </div>
            </div>
        );
    }
}

export default Footer;
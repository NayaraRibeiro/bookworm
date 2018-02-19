import React from 'react';
import github_logo from '../../github-logo.svg';

import './Footer.css'

const Footer = () => (
    <div className='footer'>
        <div className='footer_title'>WHERE THE LIBRARY LIVES</div>
        <div className='git_logo'>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/NayaraRibeiro/bookworm" title='Github library page'>
                <img src={github_logo} alt="Github logo" />
            </a>
        </div>
    </div>
);

export default Footer;
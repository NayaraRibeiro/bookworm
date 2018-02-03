import React, {Component} from 'react';
import github_logo from '../../github-logo.svg';

class Footer extends Component {
    render() {
        return (
            <div className='footer'>
                <div className='footer_title'>WHERE THE LIBRARY LIVES</div>
                <div className='git_logo'>
                    <img src={github_logo} alt="Github logo"/>
                </div>
            </div>
        );
    }
}

export default Footer;

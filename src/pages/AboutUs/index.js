import React, { Component } from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";

class AboutUs extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className='about_us_content'>
                    <div className='about_us_title'>ABOUT US</div>
                    <div className='block_right'>
                        <div className='right_title'> ABOUT THE PROJECT
                            <div className='right_text'>
                                Bla bla bla
                            </div>
                        </div>
                    </div>

                    <div className='block_left'>
                        <div className='left_title'> ABOUT ME
                            <div className='left_text'>
                                Loren ipsum
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default AboutUs;
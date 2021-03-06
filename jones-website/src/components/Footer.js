import React from 'react';
import { BsInstagram, BsFacebook } from 'react-icons/bs'
import './Footer.css';

function Footer() {
    return (
        <div className='footer-container'>
            <div className='footer-row-container'>
                <img src='/jones_logo_small_t.webp' height={50} alt='Jones Crest'/>
                <div style={{margin:'0 2rem'}}>
                    <h3 className='footer-h-font'>JONES COLLEGE</h3>
                    <p className='footer-p-font'>23 Sunset Blvd<br/>
                        Houston TX, 77005</p>
                </div>
                <a style={{margin:'10px'}} target="_blank" rel="noreferrer" href='https://www.instagram.com/mary_gibbs_jones_college/'>
                    <BsInstagram color='white' size={35}/> 
                </a>
                <a style={{margin:'10px'}} target="_blank" rel="noreferrer" href='https://www.facebook.com/jones.historian?fref=ts'>
                    <BsFacebook color='white' size={35}/> 
                </a>
            </div>
            <p className='footer-q-font'>
                Questions? Contact College Coordinator Michelle Bennack at mrb4@rice.edu.
            </p>
        </div>
    )
}

export default Footer

import './Footer.css'
import { FaGithubAlt, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { useState } from 'react';

const Footer = ({state}) => {
    const darkmode={
        backgroundColor:"#3B3B3B",
        color:"white"
    }
    const purple={
        color:"#A270FF"
    }

    return (
        <div className='footer' style={state?darkmode:{}}>
                <div className='bottom'>
                    <span className='line'></span>
                    <p>"The game is won in the Mind"</p>
                    <div>
                        <a href='https://github.com/sdrawkcaBdeaR'><FaGithubAlt className='handle' style={state?purple:{}}/></a>
                        <a href='https://www.linkedin.com/in/nitin-rohit-a01346114/'><FaLinkedin className='handle' style={state?purple:{}}/></a>
                        <a href='https://www.instagram.com/dn_passaw/'><FaInstagram className='handle' style={state?purple:{}}/></a>
                    </div>
                </div>
        </div>
    )
}

export default Footer
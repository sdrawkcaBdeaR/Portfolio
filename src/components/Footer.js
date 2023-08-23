import './Footer.css'
import { FaGithubAlt, FaLinkedin, FaInstagram } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='footer'>
                <div className='bottom'>
                    <span className='line'></span>
                    <p>"The game is won in the Mind"</p>
                    <div>
                        <a href='https://github.com/sdrawkcaBdeaR'><FaGithubAlt className='handle' /></a>
                        <a href='https://www.linkedin.com/in/nitin-rohit-a01346114/'><FaLinkedin className='handle' /></a>
                        <a href='https://www.instagram.com/dn_passaw/'><FaInstagram className='handle' /></a>
                    </div>
                </div>
        </div>
    )
}

export default Footer
import Typed from 'react-typed'
import './Hero.css'

const Hero = () => {
    const tags=["Creative Thinker","Problem Solver","Curious Pioneer","Inventive Analyst"];

    return (
        <div className='hero'>
            <div className='content'>
                <p>Call me</p>
                <p>C Nitin Rohit</p>
                <p> <Typed strings={tags} typeSpeed={120} backSpeed={80} loop /> </p>
                <p>Learn -&gt; Think -&gt; Execute </p>
                {/* <button href='/' className='button'>Free Consultation</button> */}
            </div>
        </div>
    )
}

export default Hero
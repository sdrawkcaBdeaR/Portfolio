import Typed from 'react-typed'
import './Hero.css'

const Hero = () => {

    return (
        <div className='hero'>
            <div className='content'>
                <p>Call me</p>
                <p>C Nitin Rohit</p>
                <p> <Typed strings={["Creative Thinker","Problem Solver"]} typeSpeed={120} backSpeed={80} loop /> </p>
                <p>Learn -&gt; Think -&gt; Execute </p>
                {/* <button href='/' className='button'>Free Consultation</button> */}
            </div>
        </div>
    )
}

export default Hero
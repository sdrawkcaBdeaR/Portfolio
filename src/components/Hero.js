import Typed from 'react-typed'
import './Hero.css'
import { useState } from 'react';

const Hero = ({state}) => {
    const tags=["Creative Thinker","Problem Solver","Curious Pioneer","Inventive Analyst"];
    const darkmode={
        backgroundColor:"#2B2B2B",
        color:"white"
    }
    const purple={
        color:"#A259FF"
    }

    return (
        <div className='hero' style={state?darkmode:{}}>
            <div className='content'>
                <p>Call me</p>
                <p>C Nitin Rohit</p>
                <p style={state?purple:{}}> <Typed strings={tags} typeSpeed={120} backSpeed={80} loop /> </p>
                <p>Learn -&gt; Think -&gt; Execute </p>
                {/* <button href='/' className='button'>Free Consultation</button> */}
            </div>
        </div>
    )
}

export default Hero
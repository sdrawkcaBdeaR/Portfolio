import './Domain.css'
import ai from '../images/AI.jpg'
import sde from '../images/software.jpg'
import cs from '../images/control.jpg'
import { useState } from 'react';


const Domain = ({state}) => {
    const darkmode={
        backgroundColor:"#2B2B2B",
        color:"white"
    }
    const darkmodecard={
        backgroundColor:"#3B3B3B",
        color:"white",
        border:"0px"
    }

    return (
        <div className='domain' id='domain' style={state?darkmode:{}}>
            <div className='container'>
                <h2>Domain</h2>
                <span className='line'></span>
                <div className='content'>
                    <div className='card' style={state?darkmodecard:{}}>
                        <img src={sde} alt='user1'/>
                        <p><span>Software development</span></p>
                        <p>The realm of software development captivates me due to its creative problem-solving and tangible impact. Embracing continuous learning in this dynamic field not only fuels my drive to innovate but also empowers me to transform abstract concepts into practical, user-centered solutions. With each line of code, I find the means to shape the digital landscape and contribute to a technology-driven future.</p>
                        <p className='quote'>"Where 0s and 1s write the language of technology."</p>
                    </div>
                    <div className='card' style={state?darkmodecard:{}}>
                        <img src={ai} alt='user1'/>
                        <p><span>Artificial Intelligence</span></p>
                        <p>The world of AI fascinates me with its boundless potential and transformative impact. Embracing the constant evolution in this dynamic field not only fuels my passion for innovation but also empowers me to craft intelligent systems that simulate human intelligence and decision-making. With each algorithm and model, I find the means to shape the future by harnessing the capabilities of AI to tackle intricate challenges and unlock new realms of possibility.</p>
                        <p className='quote'>"Turning data into insights, and innovation into possibility"</p>
                    </div>
                    <div className='card' style={state?darkmodecard:{}}>
                        <img src={cs} alt='user1'/>
                        <p><span>Control Systems</span></p>
                        <p>Immersed in control systems, I'm drawn to their blend of theory and real-world impact. Embracing perpetual advancement fuels my passion for precision and empowers me to engineer systems that govern processes with accuracy. Each refined algorithm and feedback loop shapes outcomes, ensuring stability in intricate systems driving technology and industries.</p>
                        <p className='quote'>"Orchestrating precision in complexity"</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Domain;
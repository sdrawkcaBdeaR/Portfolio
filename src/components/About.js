import './About.css'
import nitin from '../images/nitin2.jpg'
import Modaltag from './Modaltag'

const About = ({state}) => {
    const darkmode={
        backgroundColor:"#3B3B3B",
        color:"white"
    }
    
    return (
        <div className='about' id='about' style={state?darkmode:{}}>
            <h2>About</h2>
            <div className='container'>
                <img className='pp' src={nitin}/>
                <div className='col-2'>
                    <span className='line'></span>
                    <p>I’m a passionate technology enthusiast and coding aficionado! With a dynamic personality driven by a relentless curiosity for all things, I like to explore things which could be learned and exploited. With a thirst for knowledge and a penchant for continuous learning, I embrace every challenge as an opportunity to grow. Whether it's unraveling the mysteries of complex algorithms or crafting elegant solutions to real-world problems. I take mathematics as my first step in all the problems I solve, giving me a procedural way to achieve my desired goal.</p>
                    <p>I am Nitin Rohit, a final-year student from the Department of Electrical Engineering at the Indian Institute of Technology Kharagpur.</p>
                    {/* <button className='button'>Explore More</button> */}
                </div>
            </div>
        </div>
    )
}

export default About
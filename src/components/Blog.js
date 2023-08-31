import './Blog.css'
import ai from '../images/AI.jpg'
import sde from '../images/software.jpg'
import cs from '../images/control.jpg'
import { useState } from 'react';
import ShowBlog from './ShowBlog';

const Blog = ({state}) => {
    const darkmode={
        backgroundColor:"#2B2B2B",
        color:"white"
    }
    
    const blogs=[
        {
            imgadd:sde,
            title:"Blog1",
            description:"The realm of software development captivates me due to its creative problem-solving and tangible impact. Embracing continuous learning in this dynamic field not only fuels my drive to innovate but also empowers me to transform abstract concepts into practical, user-centered solutions. With each line of code, I find the means to shape the digital landscape and contribute to a technology-driven future.",
            quote: "Where 0s and 1s write the language of technology."
        },
        {
            imgadd:ai,
            title:"Blog2",
            description:"The world of AI fascinates me with its boundless potential and transformative impact. Embracing the constant evolution in this dynamic field not only fuels my passion for innovation but also empowers me to craft intelligent systems that simulate human intelligence and decision-making. With each algorithm and model, I find the means to shape the future by harnessing the capabilities of AI to tackle intricate challenges and unlock new realms of possibility.",
            quote: "Turning data into insights, and innovation into possibility"
        },
        {
            imgadd:cs,
            title:"Blog3",
            description:"Immersed in control systems, I'm drawn to their blend of theory and real-world impact. Embracing perpetual advancement fuels my passion for precision and empowers me to engineer systems that govern processes with accuracy. Each refined algorithm and feedback loop shapes outcomes, ensuring stability in intricate systems driving technology and industries.",
            quote: "Orchestrating precision in complexity"
        }
    ]
    const showblogs=blogs.map((blog,index)=>{
        return(
            <ShowBlog item={blog} key={index} state={state}/>
        )
    })

    return (
        <div className='blog' id='blog' style={state?darkmode:{}}>
            <div className='container'>
                <h2>Blog</h2>
                <span className='line'></span>
                <div className='content'>
                    {showblogs}
                </div>
            </div>
        </div>
    )
}

export default Blog;
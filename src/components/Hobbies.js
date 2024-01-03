import './Domain.css'
import reading from '../images/reading.jpeg'
import football from '../images/football.jpg'
import fineass from '../images/fineass.jpg'
import { useState } from 'react';


const Hobbies = ({state}) => {
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
        <div className='domain' id='Hobbies' style={state?darkmode:{}}>
            <div className='container'>
                <h2>Hobbies</h2>
                <span className='line'></span>
                <div className='content'>
                    <div className='card' style={state?darkmodecard:{}}>
                        <img src={fineass} alt='user1'/>
                        <p><span>Fine Arts</span></p>
                        <p>In the enchanting realm of fine arts, creativity takes center stage, weaving a tapestry of expression that transcends the mundane. It's a captivating dance of colors on canvas, an orchestra of emotions in a musical composition, and the dramatic interplay of light and shadow in sculpture. Fine arts embody the soul's whispers and the mind's musings, offering a sanctuary where imagination knows no bounds. Each stroke of a brush or note played is a portal to another dimension, inviting us to explore the depths of human emotion and the vast landscapes of creativity. It's not just about creating art; it's about conjuring magic that resonates with the heart and soul, making fine arts a timeless celebration of the boundless facets of our humanity.</p>
                        <p className='quote'>"Art is chaos taking shape."</p>
                    </div>
                    <div className='card' style={state?darkmodecard:{}}>
                        <img src={reading} alt='user1'/>
                        <p><span>Reading Books</span></p>
                        <p>Embarking on the literary odyssey of reading is akin to opening a treasure chest of boundless wonders. Within the pages of a book, a symphony of words unfolds, weaving stories that beckon us into enchanting worlds. It's a journey where imagination takes the reins, steering us through the landscapes of diverse characters, intricate plots, and profound ideas. Reading is not just a pastime; it's an art, a dance of intellect and emotion choreographed by the strokes of an author's pen. As we delve into the written tapestry, each chapter becomes a chapter of our own exploration, making reading a transcendent experience that invites us to escape, dream, and discover the uncharted territories of both literature and ourselves.</p>
                        <p className='quote'>"A book won't be same when you read it again."</p>
                    </div>
                    <div className='card' style={state?darkmodecard:{}}>
                        <img src={football} alt='user1'/>
                        <p><span>Football</span></p>
                        <p>Football, more than just a sport, is a captivating spectacle that ignites passion and camaraderie across the globe. As the referee's whistle echoes on the pitch, a symphony of skill, strategy, and sheer determination unfolds. The vibrant energy of the game transcends borders, uniting fans in a collective celebration of athleticism and teamwork. From the electrifying roar of the crowd to the precise artistry of players maneuvering the ball, football is a fusion of physical prowess and tactical finesse. It embodies the spirit of resilience, where triumphs and defeats are etched on the field, and every goal is a euphoric crescendo. Beyond the competition, football weaves a cultural tapestry, connecting people with a shared love for the beautiful game.</p>
                        <p className='quote'>"Nobody who ever gave his best regretted it."</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hobbies;
import './TimeLine.css'
import { useState } from 'react';
import sde from '../images/software.jpg'
import fineass from '../images/fineass.jpg'
import football from '../images/football.jpg'


const TimeLine=({state})=>{

    const [ind,setInd]=useState(0);
    const places=['TRIVANDRUM','GOA','KOCHI','MUMBAI','CHENNAI','ANDAMAN','KANYAKUMARI','KHARAGPUR','NEXT WHAT!'];
    const placedesp=['I didnt choose this part of my life, because I wansn’t a life yet. Yes, this is where I was born. I have visited trivandrum so many times now, love the food here it has so much flavor to it, south India in general.',
    'I just remember being here once, coz I was just a baby, that too becuase of a photo which was taken in a beach where there were  foreigners wearing bikini ;). I hope I will visit Goa once again, you know if you know. ',
    'My earliest memories are from this place. I think I attained my consciousness here. I had a good friend, first friend, whose name I do not remember. The flashes of memories are all about Kerala, white sarees, coconut trees and beach.',
    'This is where I learned to cycle, skate and play football, basically my childhood. Mumbai being the place of rich and poor, it made me understand many things, seeing slum to one side and high raised building on the other side.',
    'Realised there is something called school, started experiencing it or rather more like learning. Got to know that I was good at sports and was not bad as I thought in studies. Puberty just said meh. But friends did give a proper welcome.',
    'Great place for tourism, but would not recommend if you are trying to settle. Coconuts are cheap here, and they taste juicy. Clean and clear beaches to spend quality time with friends and family. It was like entering Garden of Eden.',
    'Place where I thought I had people who loved me, which all turned into a nightmare. Maybe we are not meant to be in the place were we came from. I will try to cherish the old memories so that I do not forget this place.',
    'Start of Adulthood. Had one of the biggest highs and lows of my life here. This place has changed me a lot, but for the good. Made a lot of friends, and one stranger who also thought me something. Maybe life is not all about happiness.',
    'Stepping out may feel kind of overwhelming but it has to be done, and trust me it is amazing. Settling is peacful but exposure to new places and people will unlock unexplored feelings, and is it not all about feelings. ']
    const imgadd=[sde,fineass,football,sde,fineass,sde,fineass,football,sde,fineass]

    const handleClickn=()=>{
        if(ind<places.length-1)
        setInd(ind+1);
    }
    const handleClickp=()=>{
        if(ind)
        setInd(ind-1);
    }

    const al="<";
    const ar=">";

    const darkmode={
        backgroundColor:"#2B2B2B",
        color:"white"
    }
    const darkmodecard={
        backgroundColor:"#3B3B3B",
        color:"white",
        border:"0px"
    }

    return(
       <div className='domain' style={state?darkmode:{}}>
            <h2>Time Line</h2>
            <div className='extra'>
                <div className='cen'>
                    <img className='limg' src={imgadd[ind]} />
                </div>
                <div>
                    <div className='changer'>
                        <div className='brack al' onClick={handleClickp} style={state?darkmodecard:{}}>{al}</div>
                        <div className='place' style={state?darkmodecard:{}}>{places[ind]}</div>
                        <div className='brack ar' onClick={handleClickn} style={state?darkmodecard:{}}>{ar}</div>
                    </div>
                    <div className='changer'>
                        <div className='desc' style={state?darkmodecard:{}}>
                            {placedesp[ind]}
                        </div>
                    </div>
                </div>
                <div className='cen'>
                    <img className='limg' src={imgadd[ind+1]} />
                </div>
            </div>
       </div>
    )
}

export default TimeLine
import './TimeLine.css'
import { useState } from 'react';
import sde from '../images/software.jpg'
import fineass from '../images/fineass.jpg'
import football from '../images/football.jpg'


const TimeLine=({state})=>{

    const [ind,setInd]=useState(0);
    const places=['TRIVANDRUM','GOA','KOCHI','MUMBAI','CHENNAI','ANDAMAN','KANYAKUMARI','KHARAGPUR','NEXT WHAT!'];
    const placedesp=['This is were I was born.',
    'I just remember being here once, coz i was just a baby',
    'My early memories are from this place.']
    const imgadd=[sde,fineass,football,sde,fineass]

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
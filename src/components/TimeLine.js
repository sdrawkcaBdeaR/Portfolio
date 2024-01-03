import './TimeLine.css'
import { useState } from 'react';

const TimeLine=({state})=>{

    const [ind,setInd]=useState(0);
    const places=['TRIVANDRUM','GOA','KOCHI','MUMBAI','CHENNAI','ANDAMAN','KANYAKUMARI','KHARAGPUR','NEXT WHAT!'];

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
             <div className='changer'>
                <div className='brack al' onClick={handleClickp} style={state?darkmodecard:{}}>{al}</div>
                <div className='place' style={state?darkmodecard:{}}>{places[ind]}</div>
                <div className='brack ar' onClick={handleClickn} style={state?darkmodecard:{}}>{ar}</div>
            </div>
            <div className='changer'>
                <div className='desc' style={state?darkmodecard:{}}>
                    description
                </div>
            </div>
       </div>
    )
}

export default TimeLine
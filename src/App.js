import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Domain from "./components/Domain";
import Footer from "./components/Footer";
import { useState } from "react";

const App=()=>{
    const [toggle,setToggle]=useState(false);
    const changeState=()=>{
        setToggle(!toggle);
    }

    return (
        <>
            <Navbar buttonClick={changeState}/>
            <Hero state={toggle}/>
            <About state={toggle}/>
            <Domain state={toggle}/>
            <Footer state={toggle}/>
        </>
    )
}

export default App;
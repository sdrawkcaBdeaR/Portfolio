import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Domain from "./components/Domain";
import Footer from "./components/Footer";

const App=()=>{
    return (
        <>
            <Navbar/>
            <Hero/>
            <About/>
            <Domain/>
            <Footer/>
        </>
    )
}

export default App;
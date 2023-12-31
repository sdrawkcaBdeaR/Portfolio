import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/main.css";
import ToggleButon from "./ToggleButton";

function Navbar({buttonClick}) {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<header>
			<ToggleButon buttonClick={buttonClick}/>
			<h3>NITRO</h3>
			<div>
			<nav ref={navRef}>
				<a href="#" onClick={showNavbar}>Home</a>
				<a href='#about' onClick={showNavbar}>About</a>
                <a href="#domain" onClick={showNavbar}>Domain</a>
				<a href="#blog" onClick={showNavbar}>Blogs</a>
				<a href="#Hobbies" onClick={showNavbar}>Hobbies</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
			</div>
		</header>
	);
}

export default Navbar;
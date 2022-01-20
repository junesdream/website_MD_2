import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import './Navbar.css'
import Logo from '../assets/threelogo.png'


function Navbar() {
	const [click, setClick] = useState(false);
	const [button, setButton] = useState(true);

	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);

	const showButton = () => {
		if (window.innerWidth <= 960) {
			setButton(false);
		} else {
			setButton(true);
		}
	};
	
useEffect (() => {
	showButton();
}, []);

window.addEventListener("resize", showButton);

	return (
		<>
			<nav className="navbar">
				<div className="navbar-container">
					<Link
						to="/"
						className="navbar-logo"
						onClick={closeMobileMenu}
					>
						<img src={Logo} alt="logo" style={{ width: "25px" }} />
						소리 <br /> 노리
					</Link>
					<div className="menu-icon" onClick={handleClick}>
						<i className={click ? "fas fa-times" : "fas fa-bars"} />
					</div>
					<ul className={click ? "nav-menu active" : "nav-menu"}>
						<li className="nav-item">
							<Link
								to="/"
								className="nav-links"
								onClick={closeMobileMenu}
							>
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link
								to="/stories"
								className="nav-links"
								onClick={closeMobileMenu}
							>
								Stories
							</Link>
						</li>
						<li className="nav-item">
							<Link
								to="/faces"
								className="nav-links"
								onClick={closeMobileMenu}
							>
								Faces
							</Link>
						</li>
						<li className="nav-item">
							<Link
								to="/music"
								className="nav-links"
								onClick={closeMobileMenu}
							>
								Music
							</Link>
						</li>
						<li className="nav-item">
							<Link
								to="/about"
								className="nav-links"
								onClick={closeMobileMenu}
							>
								About us
							</Link>
						</li>

						<li>
							<Link
								to="/sign-up"
								className="nav-links-mobile"
								onClick={closeMobileMenu}
							>
								Sign Up
							</Link>
						</li>
					</ul>
					{/* {button && (
						<Button buttonStyle="btn--outline">SIGN UP</Button>
					)} */}
				</div>
				<div className="nav-btn">
					{button && (
						<Button buttonStyle="btn--outline">SIGN UP</Button>
					)}
				</div>
			</nav>
		</>
	);
}

export default Navbar

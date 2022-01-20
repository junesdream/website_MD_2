import React from "react";
import "./Footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "../assets/threelogo.png";

function Footer() {
	return (
		<div className="footer-container">
			<section className="footer-subscription">
				<p className="footer-subscription-heading">
					Join the Adventure newsletter to receive our best floors
					news
				</p>
				<p className="footer-subscription-text">
					You can unsubscribe at any time.
				</p>
				<div className="input-areas">
					<form>
						<input
							className="footer-input"
							name="email"
							type="email"
							placeholder="Your Email"
						/>
						<Button buttonStyle="btn--outline">Subscribe</Button>
					</form>
				</div>
			</section>
			<div class="footer-links">
				<div className="footer-link-wrapper">
					<div class="footer-link-items">
						<h2>About Us</h2>
						<Link to="/sign-up">How it works</Link>
						<Link to="/">Testimonials</Link>
						<Link to="/">Fellow</Link>
						<Link to="/">Investors</Link>
						<Link to="/">Terms of Service</Link>
					</div>
					<div class="footer-link-items">
						<h2>Contact Us</h2>
						<Link to="/">Contact</Link>
						<Link to="/">Support</Link>
						<Link to="/">Destinations</Link>
						<Link to="/">Sharingships</Link>
					</div>
				</div>
				<div className="footer-link-wrapper">
					<div class="footer-link-items">
						<h2>Videos</h2>
						<Link to="/">Submit Video</Link>
						<Link to="/">Ambassadors</Link>
						<Link to="/">Agency</Link>
						<Link to="/">Influencer</Link>
					</div>
					<div class="footer-link-items">
						<h2>Social Media</h2>
						<Link to="/">Instagram</Link>
						<Link to="/">Facebook</Link>
						<Link to="/">Youtube</Link>
						<Link to="/">Twitter</Link>
					</div>
				</div>
			</div>
			<section class="social-media">
				<div class="social-media-wrap">
					<div class="footer-logo">
						<Link to="/" className="social-logo">
							{/* <img
								src={Logo}
								alt="logo"
								style={{ width: "25px" }}
							/>
							소리 <br /> 노리 */}
							Pecase&Love
						</Link>
					</div>
					<small class="website-rights">
			
						sorinori © 2022
					</small>
					<div class="social-icons">
						<Link
							class="social-icon-link facebook"
							to="/"
							target="_blank"
							aria-label="Facebook"
						>
							<i class="fab fa-facebook-f" />
						</Link>
						<Link
							class="social-icon-link instagram"
							to="/"
							target="_blank"
							aria-label="Instagram"
						>
							<i class="fab fa-instagram" />
						</Link>
						<Link
							class="social-icon-link youtube"
							to="/"
							target="_blank"
							aria-label="Youtube"
						>
							<i class="fab fa-youtube" />
						</Link>
						<Link
							class="social-icon-link twitter"
							to="/"
							target="_blank"
							aria-label="Twitter"
						>
							<i class="fab fa-twitter" />
						</Link>
						<Link
							class="social-icon-link twitter"
							to="/"
							target="_blank"
							aria-label="LinkedIn"
						>
							<i class="fab fa-linkedin" />
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Footer;


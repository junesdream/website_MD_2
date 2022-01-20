import React from "react";
import "../../App.css";
import AboutCard from "../cards/AboutCard";
import ContactCard from "../cards/ContactCard";
import Bout from "../../assets/videos/bout.mp4";

const About = () => {
	return (
		<>
			<video src={Bout} autoPlay loop muted />
			<h1 className="about">ABOUT &#9749; </h1>
			<AboutCard />
			<ContactCard />
		</>
	);
};

export default About;

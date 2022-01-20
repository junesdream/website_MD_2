import React from "react";
import "../../App.css";
import FacesBack from '../FacesBack'
import FacesCard from '../cards/FacesCard'
import Turntable from '../../assets/videos/turntable.mp4'


const Faces = () => {
    return (
		<>
			<video src={Turntable} autoPlay loop muted />
			<h1 className="faces">FACES</h1>
			<FacesBack />
			<FacesCard />
		</>
	);
}

export default Faces


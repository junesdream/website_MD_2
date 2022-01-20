import React from "react";
import "../../App.css";
import MusicBack from "../MusicBack";
import MusicCard from "../cards/MusicCard";
// import Record from "../../assets/mu-images/music-vidoe.mp4"
import Danceclub from "../../assets/mu-images/dance-video.mp4";

const Music = () => {
	return (
		<>
			{/* <video src={Record} autoPlay loop muted /> */}
			<video src={Danceclub} autoPlay loop muted />

			<h1 className="music">Music</h1>
			<MusicBack />
			<MusicCard />
		</>
	);
}

export default Music








import React from "react";
import "../../App.css";
import StoriesCard from '../cards/StoriesCard'
import StoryDiegoCard from "../cards/StoryDiegoCard";
import Circlerainbow from '../../assets/videos/circle-rainbow.mp4'


const Stories = () => {
	return (
		<>
		<video src={Circlerainbow} autoPlay loop muted />;
			<h1 className="stories">STORIES</h1>
			<StoriesCard />
			<StoryDiegoCard />
		</>
	);
}

export default Stories



// const Music = () => {
// 	return (
// 		<>
// 			{/* <video src={Record} autoPlay loop muted /> */}
// 			<video src={Danceclub} autoPlay loop muted />

// 			<h1 className="music">Music</h1>
// 			<MusicBack />
// 			<MusicCard />
// 		</>
// 	);
// };

// export default Music;
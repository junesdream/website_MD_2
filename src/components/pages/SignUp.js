import React from "react";
import "../../App.css";
import Signup from '../../assets/videos/circle-rainbow.mp4';
// export default function SignUp() {
// 	return <h1 className="sign-up">LIKE & SUBSCRIBE</h1>;
// }


const SignUp = () => {
	return (
		<>
			<video src={Signup} autoPlay loop muted />
			<h1 className="about">SIGN UP ✍ </h1>
		</>
	);
};

export default SignUp;

import React from 'react'
import CardItem from "./CardItem";
import "./Cards.css";
import Crew1 from '../../assets/about-images/crew-1.jpg'
import Crew2 from '../../assets/about-images/crew-2.jpeg'
import Crew3 from '../../assets/about-images/crew-3.jpg'
import Crew4 from '../../assets/about-images/crew-4.jpg'
import Crew5 from '../../assets/about-images/crew-5.jpg'
import Crew6 from '../../assets/about-images/crew-6.jpg'
import Crew7 from '../../assets/about-images/crew-7.JPG'

const AboutCard = () => {
    return (
		<div className="aboutCard">
			{/* <h1>
				Check best Faces from the floors{" "}
			</h1> */}
			<div className="cards__container">
				<div className="cards__wrapper">
					<h1>🏳️‍🌈 Our hard-working peace & love team 🌈 </h1>
					<ul className="cards__items">
						<CardItem
							src={Crew7}
							text="Mr. Muzi Shock: Happy!"
							label="crew"
							path="/about"
						/>
					</ul>
					<ul className="cards__items">
						<CardItem
							src={Crew1}
							text="Dr.Moon: Attorney for justice & Columnist. Power!"
							label="crew"
							path="/about"
						/>
						<CardItem
							src={Crew2}
							text="Nori: Chief Editor, Finance & Sounddesign. Cheers !"
							label="crew"
							path="/about"
						/>
						<CardItem
							src={Crew3}
							text="Sori: Managing & Social-Media Network. Voila!!"
							label="crew"
							path="/about"
						/>
					</ul>
					<ul className="cards__items">
						<CardItem
							src={Crew4}
							text="Redbilly: Singing-Voice & Music Making. Yeah!"
							label="crew"
							path="/about"
						/>
						<CardItem
							src={Crew5}
							text="Mizgold: Chief Reportering & Social Networking. Charming!"
							label="crew"
							path="/about"
						/>
						<CardItem
							src={Crew6}
							text="Queensy: Tunning Beats & Hiting Groove. Ahoi!"
							label="crew"
							path="/about"
						/>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default AboutCard

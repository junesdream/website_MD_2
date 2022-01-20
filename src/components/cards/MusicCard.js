import React from 'react'
import CardItem from "./CardItem";
import "./Cards.css";
import Dj1 from "../../assets/mu-images/Dj-1.png";
import Dj2 from "../../assets/mu-images/Dj-2.jpeg";
import Dj3 from "../../assets/mu-images/Dj-3.jpeg";
import Location from "../../assets/mu-images/location.png";
import Bar from "../../assets/mu-images/bar.png";
import Clubbar from "../../assets/mu-images/Clubbar.png";
import Location2 from "../../assets/mu-images/location-2.png";
import Locationtext from "../../assets/mu-images/location-3.png";
import Location4 from "../../assets/mu-images/location-4.jpg";

const MusicCard = () => {
    return (
		<div className="musicCard">
			{/* <h1>
				Check best Faces from the floors{" "}
			</h1> */}
			<div className="cards__container">
				<div className="cards__wrapper">
					<h1>The best DJs and Location in town of the month </h1>
					<ul className="cards__items">
						<CardItem
							src={Dj1}
							text="Techno Berlin / Israel Label: LoL Shal Digital Kings!"
							label="Partok"
							path="/faces"
						/>
						<CardItem
							src={Dj2}
							text="Disco Berlin / Saarbrücken Label: Indie Zanker Vinylqueen"
							label="Aron Blau "
							path="/faces"
						/>
						<CardItem
							src={Dj3}
							text="House Berlin / New Orleans Label: Buttons Sequnser Prince"
							label="Bouffent Bouffent "
							path="/faces"
						/>
					</ul>
					<ul className="cards__items">
						<CardItem
							src={Location}
							text="Best Faces on Ravefloors, you see here. Amore!"
							label="Location"
							path="/faces"
						/>
						<CardItem
							src={Bar}
							text="Best Faces on Ravefloors, you see here. Amore!"
							label="Location"
							path="/faces"
						/>
						<CardItem
							src={Clubbar}
							text="Best Faces on Ravefloors, you see here. Amore!"
							label="Locationes"
							path="/faces"
						/>
					</ul>
					<ul className="cards__items">
						<CardItem
							src={Location2}
							text="Best Faces on Ravefloors, you see here. Amore!"
							label="Party"
							path="/faces"
						/>
						<CardItem
							src={Locationtext}
							text="Best Faces on Ravefloors, you see here. Amore!"
							label="Report"
							path="/faces"
						/>
						<CardItem
							src={Location4}
							text="Best Faces on Ravefloors, you see here. Amore!"
							label="City"
							path="/faces"
						/>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default MusicCard

import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import Happiness from "../../assets/about-images/happines.jpg";
import Contact2 from "../../assets/about-images/contact-2.jpg";
import Contact3 from "../../assets/about-images/contact-3.jpg";
import Contact1 from "../../assets/about-images/contact-1.png";

const ContactCard = () => {
	return (
		<div className="contactCard">
			{/* <h1>
				Check best Faces from the floors{" "}
			</h1> */}
			<div className="cards__container">
				<div className="cards__wrapper">
					<h1>
						🏳️‍🌈 Share and donate for our Berlin raver community and their
						friends 🌈{" "}
					</h1>
					<ul className="cards__items">
						<CardItem
							src={Happiness}
							text="Let's do it for peace&love!"
							label="Contact"
							path="/about"
						/>
						<CardItem
							src={Contact2}
							text="Kontakt: Muster Str. 100 10969 Berlin
									☎ Telefon: 030/1234 789456 Fax: 1234-56789
									📧 E-Mail:info@sorinori.com
									https:// sorinori.netlify.app"
							label="Contact"
							path="/about"
						/>
					</ul>
					<ul className="cards__items">
						<CardItem
							src={Contact3}
							text="Sharing is caring is a common phrase but had a big meaning that when we share something with someone else it is equal to caring him."
							label="Contact"
							path="/about"
						/>
						<CardItem
							src={Contact1}
							text="We look forward to your support and a corresponding donation: Recipient: SORINORI e.V. IBAN: DE12 3456 7890 1234 comdirect.com"
							label="Contact"
							path="/about"
						/>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default ContactCard;

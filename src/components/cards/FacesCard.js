import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import Face1 from "../../assets/Oxana.jpg";
import Face2 from "../../assets/diora.jpg";
import Face3 from "../../assets/person-15.png";
import Face4 from "../../assets/face-4.png";

const FacesCard = () => {
	return (
		<div className="facesCard">
			{/* <h1>
				Check best Faces from the floors{" "}
			</h1> */}
			<div className="cards__container">
				<div className="cards__wrapper">
					<h1>The best Faces from the floors of the month </h1>
					<ul className="cards__items">
						<CardItem
							src={Face1}
							text="Best Faces on Ravefloors, you see here. Amore!"
							label="Oxna"
							path="/faces"
						/>
						<CardItem
							src={Face4}
							text="Best Faces on Ravefloors, you see here. Amore!"
							label="Report"
							path="/faces"
						/>
					</ul>
					<ul className="cards__items">
						<CardItem
							src={Face2}
							text="Best Faces on Ravefloors, you see here. Amore!"
							label="Diora"
							path="/faces"
						/>
						<CardItem
							src={Face3}
							text="Best Faces on Ravefloors, you see here. Amore!"
							label="Mr. Smile"
							path="/faces"
						/>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default FacesCard;

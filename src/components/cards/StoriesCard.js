import React from 'react'
import CardItem from "./CardItem";
import "./Cards.css";
import Stories1 from '../../assets/st-images/stories-1.jpg'
import Stories2 from "../../assets/st-images/stories-2.jpg"
import Stories3 from "../../assets/st-images/stories-3.jpg";
import Stories4 from "../../assets/st-images/stories-4.jpg";
import Stories5 from "../../assets/st-images/stories-5.png";
import Stories6 from "../../assets/st-images/stories-6.png";

const StoriesCard = () => {
    return (
		<div className="storiesCard">
			{/* <h1>Learn amazing stories from the floors </h1> */}
			<div className="cards__container">
				<div className="cards__wrapper">
					<h1>Learn amazing stories from the floors of the Month </h1>
					<ul className="cards__items">
						<CardItem
							src={Stories1}
							text="Joyfull story from the floors, you learn here. Exciting!"
							label="stories"
							path="/stories"
						/>
						<CardItem
							src={Stories2}
							text="Joyfull story from the floors, you learn here. Exciting!"
							label="stories"
							path="/stories"
						/>
					</ul>
					<ul className="cards__items">
						<CardItem
							src={Stories3}
							text="Joyfull story from the floors, you learn here. Exciting!"
							label="stories"
							path="/stories"
						/>
						<CardItem
							src={Stories4}
							text="Joyfull story on Ravefloors, you learn here. Exciting!"
							label="stories"
							path="/stories"
						/>
					</ul>
					<ul className="cards__items">
						<CardItem
							src={Stories6}
							text="Joyfull story from the floors, you learn here. Exciting!"
							label="stories"
							path="/stories"
						/>
						<CardItem
							src={Stories5}
							text="Joyfull story on Ravefloors, you see here. Exciting!"
							label="stories"
							path="/stories"
						/>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default StoriesCard

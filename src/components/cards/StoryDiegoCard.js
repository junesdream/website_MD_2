import React from 'react'
import CardItem from "./CardItem";
import "./Cards.css";
import Diegologo from '../../assets/d-images/diegologo.png'
import Diego2 from '../../assets/d-images/Diego_2.png'
import Diego6 from '../../assets/d-images/Diego_6.jpg'
import Diego3 from '../../assets/d-images/Diego_3.png'
import Diegoborn from '../../assets/d-images/diego-born.jpg'
import Diego5 from '../../assets/d-images/Diego_5.jpg'
import Olaberlin from '../../assets/d-images/olaberlin.png'
import Diego1 from '../../assets/d-images/Diego_1.png'
import Diegooi from '../../assets/d-images/diego_oi.jpg'
import Profildiego from '../../assets/d-images/profil_diego.png'



const StoryDiegoCard = () => {
    return (
		<div className="storyDiegoCard">
			{/* <h1>Learn amazing stories from the floors </h1> */}
			<div className="cards__container">
				<div className="cards__wrapper">
					<h1>Let's get to know Diego amigos!</h1>
					<ul className="cards__items">
						<CardItem
							src={Diegologo}
							text="Amazing raver with full of passion to dance and art. Extraordinary!"
							label="Diego"
							path="/stories"
						/>
						<CardItem
							src={Diego2}
							text="Amazing raver with full of passion to dance and art. Extraordinary!"
							label="Diego"
							path="/stories"
						/>
						<CardItem
							src={Diego6}
							text="Amazing raver with full of passion to dance and art. Extraordinary!"
							label="Diego"
							path="/stories"
						/>
					</ul>
					<ul className="cards__items">
						<CardItem
							src={Diego3}
							text="Amazing raver with full of passion to dance and art. Extraordinary!"
							label="Diego"
							path="/stories"
						/>
						<CardItem
							src={Diegoborn}
							text="Amazing raver with full of passion to dance and art. Extraordinary!"
							label="Diego"
							path="/stories"
						/>
						<CardItem
							src={Diego5}
							text="Amazing raver with full of passion to dance and art. Extraordinary!"
							label="Diego"
							path="/stories"
						/>
					</ul>
					<ul className="cards__items">
						<CardItem
							src={Olaberlin}
							text="Amazing raver with full of passion to dance and art. Extraordinary!"
							label="Diego"
							path="/stories"
						/>
						<CardItem
							src={Diego1}
							text="Amazing raver with full of passion to dance and art. Extraordinary!"
							label="Diego"
							path="/stories"
						/>
					</ul>
					<ul className="cards__items">
						<CardItem
							src={Diegooi}
							text="Amazing raver with full of passion to dance and art. Extraordinary!"
							label="Diego"
							path="/stories"
						/>
						<CardItem
							src={Profildiego}
							text="Amazing raver with full of passion to dance and art. Extraordinary!"
							label="Diego"
							path="/stories"
						/>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default StoryDiegoCard


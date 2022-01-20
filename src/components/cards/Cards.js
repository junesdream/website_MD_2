import React from 'react'
import CardItem from "./CardItem";
import './Cards.css'
// import Cardback from '../assets/card_back.png'
import Cardimage1 from '../../assets/cardimage-1.jpg'
import Cardimage2 from '../../assets/cardimage-2.jpg'
import Cardimage3 from '../../assets/cardimage-3.jpg'
import Cardimage4 from '../../assets/cardimage-4.jpg'
import Cardimage5 from '../../assets/cardimage-5.jpg'

const Card = () => {
    return (
		<div className="cards">
			<h1>Check out Berlin undeground! </h1>
			<div className="cards__container">
				<div className="cards__wrapper">
					<ul className="cards__items">
						<CardItem
							src={Cardimage2}
							text="Explore the hidden mind behind the faces"
							label="stories"
							path="/stories"
						/>
						<CardItem
							src={Cardimage1}
							text="Explore the hidden places behind underground"
							label="stories"
							path="/stories"
						/>
					</ul>
					<ul className="cards__items">
						<CardItem
							src={Cardimage4}
							text="Explore the hidden mind behind the faces"
							label="stories"
							path="/stories"
						/>
						<CardItem
							src={Cardimage3}
							text="Explore the hidden mind behind the faces"
							label="stories"
							path="/stories"
						/>
						<CardItem
							src={Cardimage5}
							text="Explore the hidden mind behind the faces"
							label="stories"
							path="/stories"
						/>
					</ul>
				</div>
			</div>
		</div>
	);
} 

export default Card

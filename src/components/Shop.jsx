import React, {useState,useEffect} from "react";
import Layout from "./Layout";
import "../styles/Shop.scss"
import { images } from "../assets/index.js"
console.log(images)
const ShopCard = (props)=>{

	let imgPath = images[props.name]
	console.log(imgPath)

	return (
		<li> 
		<img src={imgPath}/>
		<p className="ShopCardText">{props.name[0].toUpperCase()+props.name.substring(1)}</p>
		<p className="ShopCardCost">{props.cost}</p>
		<button onClick={props.addItem} className="addToCart">Add to Cart</button>
		</li> 
	)
}


const Shop = (props) => { 
	const [shopCart,setShopCart] = useState([]) 
	const items = require("../data/items.json").items
	const addItemToCart = (index) => 
	{
		setShopCart([...shopCart,items[index]])
	}

	const itemCards = items.map((item,index) => 
		<ShopCard key={item.name} name={item.name} cost={item.cost} img={item.img} addItem={()=>{addItemToCart(index)}}/>
	)
	return (
		<Layout className="Shop">
		<ul className="ShopList">
			{itemCards}
		</ul>
		</Layout>
	)
}

export default Shop;

import React, {useState,useEffect} from "react"

import Layout from "./Layout"

import '../styles/Home.scss';

const Home = (props) => {


	return (
		<Layout className="Home"> 
		<h1>This shop sells jars.  Its called Jarhead</h1>
		<p>Here is an example of things in jars.  See things that we sell in jars on the shop tab.</p> 
		<img alt="jars" src={require("../assets/homejars.jpg")}/>
		

		</Layout>

	)

}

export default Home

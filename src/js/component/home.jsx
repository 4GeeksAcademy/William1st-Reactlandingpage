import React from "react";
import {Navbar} from "./navbar.jsx"
import {Jumbotron} from "./jumbotron.jsx"
import {Cards} from "./cards.jsx"  
import  "/workspaces/William1st-Reactlandingpage/src/styles/index.css"
import Footer from "./Footer.jsx";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Navbar/>
			<Jumbotron/>
			<div style={{display:"flex", justifyContent: "space-around"}}>
				<Cards/> 
				<Cards/> 
				<Cards/> 
				<Cards/>
			</div>
			<Footer/>
		</div>
	);
};

export default Home;

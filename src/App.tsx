import React, { useEffect } from "react";
import "./App.css";
import Landing from "./Landing/Landing";
import TrueLanding from "./TrueLanding/TrueLanding";
import Banner from "./Banner/Banner";
import { PROJECTS } from "./_data/Projects";
import Menu from "./Menu/Menu";

function ForLOOOP() {
	return PROJECTS.map((e, i) => {
		return <Landing index={i} data={e} />;
	});
}

function App() {
	useEffect(() => {
		console.log("WIDTH CHANGE");
	}, [window.innerWidth]);
	return (
		<div className="App">
			<TrueLanding />
			{/* <Banner /> */}
			{/* {ForLOOOP()} */}
			{/* <Banner /> */}
		</div>
	);
}

export default App;

import React, { useEffect } from "react";
import "./App.css";
import Landing from "./Landing/Landing";
import Banner from "./Banner/Banner";
import Grid from "./Grid.tsx/Grid";
import { ListFormat } from "typescript";

let LandingZ = [<Landing />, <Landing />, <Landing />];

function ForLOOOP() {
	return LandingZ.map((e, i) => {
		console.log(i);

		return <Landing index={i} />;
	});
}

function App() {
	useEffect(() => {
		console.log("WIDTH CHANGE");
	}, [window.innerWidth]);
	return (
		<div className="App">
			{/* <Grid /> */}
			<Banner />
			{ForLOOOP()}
			{/* <Landing />
			<Landing />
			<Landing /> */}
		</div>
	);
}

export default App;

import React, { useEffect } from "react";
import "./App.css";
import Landing from "./Landing/Landing";
import Banner from "./Banner/Banner";
import Grid from "./Grid.tsx/Grid";
import { ListFormat } from "typescript";

import { PROJECTS } from "./_data/Projects";

interface Data {
	name: string | undefined;
	description: string | undefined;
	image: string | undefined;
}

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

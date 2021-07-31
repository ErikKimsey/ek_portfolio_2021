import React, { useEffect } from "react";
import "./App.css";
import Landing from "./Landing/Landing";
import TrueLanding from "./TrueLanding/TrueLanding";
import Banner from "./Banner/Banner";
import { PROJECTS } from "./_data/Projects";
import Menu from "./Menu/Menu";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Switch>
					<Route exact path="/">
						<TrueLanding />
					</Route>
					<Route
						path="/portfolio"
						component={() => {
							window.location.href = "http://erikkimsey.com";
							return null;
						}}
					/>
					<Route path="/playground">
						<Landing />
					</Route>
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;

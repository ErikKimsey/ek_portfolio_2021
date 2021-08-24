import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PlaygroundLanding from "./PlaygroundLanding/PlaygroundLanding";
import TrueLanding from "./TrueLanding/TrueLanding";
import PortfolioLanding from "./PortfolioSite/PortfolioLanding";
// import Menu from "./Menu/Menu";
import "./App.css";

function App() {
	return (
		<BrowserRouter>
			<div className="App" style={{ padding: "0 0px" }}>
				<Switch>
					<Route exact path="/">
						<TrueLanding />
					</Route>
					<Route path="/portfolio">
						<PortfolioLanding />
					</Route>
					<Route path="/playground">
						<PlaygroundLanding />
					</Route>
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;

import React from "react";
import { Route, Switch } from "react-router-dom";
import PlaygroundLanding from "./PlaygroundLanding/PlaygroundLanding";
import TrueLanding from "./TrueLanding/TrueLanding";
import Portfolio from "./PortfolioSite/Portfolio";
import "./App.css";

function App() {
	return (
		<div className="App" style={{ padding: "0 0px" }}>
			<Switch>
				<Route exact path="/" component={TrueLanding} />
				<Route path="/portfolio" component={Portfolio} />
				<Route path="/playground" component={PlaygroundLanding} />
			</Switch>
		</div>
	);
}

export default App;

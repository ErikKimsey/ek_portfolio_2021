import React from "react";
import { BrowserRouter, Route, Switch, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import PlaygroundLanding from "./PlaygroundLanding/PlaygroundLanding";
import TrueLanding from "./TrueLanding/TrueLanding";
import PortfolioLanding from "./PortfolioSite/PortfolioLanding";
// import Menu from "./Menu/Menu";
import "./App.css";

function App() {
	let location = useLocation();
	console.log("LOCATION" + location);

	return (
		<div className="App" style={{ padding: "0 0px" }}>
			<TransitionGroup>
				<CSSTransition
					timeout={300}
					classNames="fade"
					key={location.key}
				>
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
				</CSSTransition>
			</TransitionGroup>
		</div>
	);
}

export default App;

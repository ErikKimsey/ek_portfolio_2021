import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./Landing/Landing";
import TrueLanding from "./TrueLanding/TrueLanding";
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

import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ParentContainer from "./HOC/ParentContainer";

function App() {
	return (
		<div className="App">
			<ParentContainer />
		</div>
	);
}

export default App;

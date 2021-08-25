import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./assets/fonts/SilverStream.ttf";
import "./assets/fonts/DESIB.ttf";
import "./assets/fonts/nasalization.otf";
import "./assets/fonts/padomela.ttf";
import "./assets/fonts/HelloAngel.ttf";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("app")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

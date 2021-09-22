import React from "react";
import { render, screen } from "@testing-library/react";
// import {jest} from "jest";
import App from "./App";

jest.mock("react-router-dom", () => ({
	useLocation: jest.fn().mockReturnValue({
		pathname: "/another-route",
		search: "",
		hash: "",
		state: null,
		key: "5nvxpbdafa",
	}),
}));

// describe("App component", () => {
// 	test("renders App comp", () => {
// 		render(<App />);
// 	});
// });

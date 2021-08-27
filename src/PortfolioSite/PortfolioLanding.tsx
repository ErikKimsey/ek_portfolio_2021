import React, { FC, useEffect, useState } from "react";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import styled from "styled-components";
import IMG from "./IMG_1.png";
import axios from "axios";

const BREAKPOINTS = {
	lg: 1024,
	md: 768,
	sm: 480,
};

type Props = {};

interface StyledProps {
	bkgrd?: string;
}

const PortfolioLanding: FC<Props> = (props) => {
	let [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		// setTimeout(() => setIsLoading(false), 500);
	}, []);

	return (
		<>
			{isLoading === false ? (
				<StyledContainer bkgrd={IMG} style={{}}>
					<h1>Erik Kimsey</h1>
					<h1>UI Dev</h1>
				</StyledContainer>
			) : (
				<LoadingScreen />
			)}
		</>
	);
};

const StyledContainer = styled.div<StyledProps>`
	width: 100%;
	height: 100vh;
	background-image: url(${() => (IMG !== undefined ? IMG : "")});
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	color: #fbf;
	display: flex;
	align-items: center;
	flex-flow: column wrap;
	padding: 100px;
	margin: 0;

	h1 {
		font-size: 8em;
		font-weight: 900;
		font-family: "Desib";
		padding: 0;
		margin: 0;
		line-height: 0.8;
	}

	/* .subContainer {
		padding-left: 10px;
		width: 100%;
		height: 100%;
	}

	.header {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-content: center;
	} */

	@media (max-width: ${BREAKPOINTS.lg}px) {
		/* background: #f0f; */
	}
	@media (max-width: ${BREAKPOINTS.md}px) {
		/* .subContainer {
            padding-left: 10px;
			width: 100%;
			height: 100vh;
		} */
		h1 {
			font-size: 6em;
			font-weight: 900;
			font-family: "Desib";
			padding: 0;
			margin: 0;
			line-height: 0.8;
		}
	}
	@media (max-width: ${BREAKPOINTS.sm}) {
		/* background: #f0f; */
	}
`;

export default PortfolioLanding;

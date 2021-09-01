import React, { FC, useEffect, useState } from "react";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import RadialMenu from "./RadialMenu";
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
				<StyledContainer style={{}}>
					<div
						className="dot"
						onClick={() => {
							console.log("PRESSED");
						}}
					></div>
					{/* <button
						className="dot"
						onClick={() => {
							console.log("PRESSED");
						}}
					></button> */}
					<RadialMenu />
				</StyledContainer>
			) : (
				<LoadingScreen />
			)}
		</>
	);
};

const StyledContainer = styled.div<StyledProps>`
	margin: auto;
	max-width: 1200px;
	width: 100%;
	height: 100vh;
	color: #fff;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-flow: column wrap;
	/* padding: 100px; */

	.dot {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 144px;
		width: 144px;
		border-radius: 100px;
		background-color: #fff;
		outline: none;
		box-shadow: none;
		border-width: 0;
		animation: breathing 2.5s infinite ease-in-out;
		transition: all 1s ease-in-out 1.25s;
		&::after {
			content: "";
			position: absolute;
			width: 72px;
			height: 72px;
			border-radius: 100px;
			background-color: #000;
			transition: all 1s ease-in-out;
		}
		&:hover {
			transform: scale(1.3);
			animation: none;
			&::after {
				content: "";
				position: absolute;
				transform: scale(0.5);
				border-radius: 100px;
				background-color: #000;
			}
		}
		&:focus {
			outline: none;
		}

		&:click {
			background-color: #f0f;
		}
	}

	h1 {
		font-size: 4em;
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

	@keyframes breathing {
		0% {
			transform: scale(1);
		}
		50% {
			transform: scale(1.2);
		}
		100% {
			transform: scale(1);
		}
	}
`;

export default PortfolioLanding;

import React, { FC, useEffect, useState } from "react";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import styled from "styled-components";
import ContentDisplay from "./ContentComponents/ContentDisplay";
import PortfolioMenu from "./PortfolioMenu";
import Banner from "./Banner";
import MiddleSpace from "./MiddleSpace";
import Icons from "./Icons";

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
		<StyledContainer>
			<Banner />
			<PortfolioMenu />
			<div className="contentContainer">
				<ContentDisplay />
			</div>
			<Icons />
		</StyledContainer>
	);
};

const StyledContainer = styled.div<StyledProps>`
	margin: auto;
	padding: 10px;
	max-width: 1600px;
	width: 100%;
	height: 80vh;
	color: #fff;
	display: flex;
	flex-flow: row wrap;
	justify-content: flex-start;
	align-items: space-between;

	h1 {
		font-size: 4em;
		font-weight: 900;
		font-family: "Desib";
		padding: 0;
		margin: 0;
		line-height: 0.8;
	}

	.contentContainer {
		width: 80%;
		/* height: 100%; */
		display: flex;
		flex-flow: column wrap;
	}

	@media (max-width: ${BREAKPOINTS.lg}px) {
		/* background: #f0f; */
	}

	@media (max-width: ${BREAKPOINTS.md}px) {
		/* .subContainer {
            padding-left: 10px;
			width: 100%;
			height: 100vh;
		} */
		flex-flow: column;
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

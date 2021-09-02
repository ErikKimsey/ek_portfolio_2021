import React, { FC, useEffect, useState } from "react";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import styled from "styled-components";

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
					<h1>PORTFOLIO</h1>
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

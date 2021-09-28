import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import ContentDisplay from "./ContentComponents/ContentDisplay";
import PortfolioMenu from "./PortfolioMenu";
import Banner from "./Banner";
import Icons from "./Icons";
import ArrowNavComponent from "./ArrowNavComponent/ArrowNavComponent";
import { motion } from "framer-motion";

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
	useEffect(() => {
		// setTimeout(() => setIsLoading(false), 500);
	}, []);

	return (
		<StyledContainer>
			<Banner />
			<PortfolioMenu />
			{/* <ArrowNavComponent /> */}
			<div className="container">{/* <ContentDisplay /> */}</div>
			<Icons />
		</StyledContainer>
	);
};

const StyledContainer = styled.div<StyledProps>`
	position: relative;
	margin: auto;
	padding: 10px;
	width: 100%;
	color: #fff;
	display: flex;
	flex-flow: column wrap;
	justify-content: flex-start;
	align-items: space-between;

	h1 {
		font-weight: 900;
		font-family: "Desib";
		padding: 0;
		margin: 0;
		line-height: 0.8;
	}

	.container {
		width: 80%;
		display: flex;
		flex-flow: column wrap;
		justify-content: flex-start;
		align-items: center;
		align-self: center;
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

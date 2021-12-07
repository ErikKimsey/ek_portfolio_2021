/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC, useState, useEffect } from "react";
import styled from "styled-components";
import { Document, Page } from "react-pdf";
import { motion } from "framer-motion";

const resume =
	"src/PortfolioSite/ContentComponents/Resume/erikkimsey_resume.pdf";

type Props = {};

type StyledProps = {
	containerHeight?: number;
	containerWidth?: number;
	isVisible?: boolean;
};

const Resume: FC<Props> = (props) => {
	const [winHeight, setWinHeight] = useState(0);
	const [winWidth, setWinWidth] = useState(0);
	const [hasLoaded, setHasLoaded] = useState(false);

	const variants = {
		visible: { opacity: 1, scale: 1 },
		hidden: { opacity: 0, scale: 0.99 },
	};

	const handleResize = () => {
		setWinWidth(window.innerWidth);
		setWinHeight(window.innerHeight);
	};

	useEffect(() => {
		setWinHeight(window.innerHeight);
		setWinWidth(window.innerWidth);
		setHasLoaded(true);
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<StyledContainer
			containerHeight={winHeight}
			containerWidth={winWidth}
			as={motion.div}
			isVisible={hasLoaded}
			initial="hidden"
			variants={variants}
			animate={hasLoaded ? "visible" : "hidden"}
			transition={{ duration: 0.5 }}
			// ref={refContainer}
			id="workContainer"
		>
			<div className="headerContainer">
				<div className="leftLine"></div>
				<h1>education.</h1>
			</div>
			{/* <iframe
				src={resume}
				title=" Erik Kimsey - Resume"
				className="iFrame"
			/> */}
		</StyledContainer>
	);
};

const StyledContainer = styled.div<StyledProps>`
	width: ${(props) => props.containerWidth * 0.7}px;
	height: ${(props) => props.containerHeight * 0.8}px;
	/* font-family: "Desib"; */
	color: #fff;
	padding: 15px;
	.iFrame {
		width: 100%;
		height: 100%;
	}

	.headerContainer {
		display: flex;
		flex-direction: row;
		width: auto;
		border-radius: 0 10px 0 0;
	}
	.leftLine {
		width: 1px;
		border: solid 20px #f0f;
	}
	h1 {
		padding: 5px;
	}
`;

export default Resume;

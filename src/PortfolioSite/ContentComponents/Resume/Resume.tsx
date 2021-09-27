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
};

const Resume: FC<Props> = (props) => {
	const {} = props;
	const [winHeight, setWinHeight] = useState(0);
	const [winWidth, setWinWidth] = useState(0);
	const [hasLoaded, setHasLoaded] = useState(false);

	const variants = {
		visible: { opacity: 1, scale: 1 },
		hidden: { opacity: 0, scale: 0.99 },
	};

	useEffect(() => {
		setWinHeight(window.innerHeight);
		setWinWidth(window.innerWidth);
		setHasLoaded(true);
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
			<h1 className="header">resume.</h1>
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
	font-family: "Desib";
	font-weight: 200;
	color: #fff;
	.iFrame {
		width: 100%;
		height: 100%;
	}
	h1 {
		font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
			sans-serif;
		font-family: "Desib";
		color: #fff;
	}
	p {
		color: #fff;
		font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
			sans-serif;
		text-transform: uppercase;
	}
`;

export default Resume;

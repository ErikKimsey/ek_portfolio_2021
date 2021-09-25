import React, { FC, useState, useEffect } from "react";
import styled from "styled-components";
import { Document, Page } from "react-pdf";

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

	function DocumentLoadSuccess() {}

	useEffect(() => {
		setWinHeight(window.innerHeight);
		setWinWidth(window.innerWidth);
		// console.log("RESUME");
	}, []);

	return (
		<StyledContainer containerHeight={winHeight} containerWidth={winWidth}>
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
	background-color: #fab;
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

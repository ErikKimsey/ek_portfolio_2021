import React, { FC } from "react";
import styled from "styled-components";
import { Document, Page } from "react-pdf";
// const resume = require("./erikkimsey_resume.pdf");
// import resume from "./erikkimsey_resume.pdf";

const resume =
	"src/PortfolioSite/ContentComponents/Resume/erikkimsey_resume.pdf";

type Props = {};

type StyledProps = {};

const Resume: FC<Props> = (props) => {
	const {} = props;

	function DocumentLoadSuccess() {}

	return (
		<StyledContainer>
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
	height: 80vh;
	font-family: "Desib";
	font-weight: 200;
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

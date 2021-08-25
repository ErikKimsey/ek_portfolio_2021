import React, { FC } from "react";
import styled from "styled-components";
import IMG from "./IMG_1.png";

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
	return (
		<StyledContainer bkgrd={IMG} style={{}}>
			<div className="subContainer">
				<div className="header">
					<h1>Erik Kimsey</h1>
					<h1>UI Engineer</h1>
				</div>
			</div>
		</StyledContainer>
	);
};

const StyledContainer = styled.div<StyledProps>`
	background-image: url(${() => (IMG !== undefined ? IMG : "")});
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	color: #dba5fe;
	display: flex;
	justify-content: center;
	align-content: flex-start;
	flex-flow: column wrap;
	height: 100vh;

	h1 {
		font-size: 10em;
		font-weight: 900;
		font-family: "Desib";
		padding: 0;
		margin: 0;
	}

	.subContainer {
		padding-left: 100px;
		width: 70%;
		height: 100%;
		/* border-left: solid 2px #dba5fe;
		border-right: solid 2px #dba5fe; */
	}

	.header {
		width: 100%;
		display: flex;
		flex-direction: row;
		align-content: center;
	}

	@media (max-width: ${BREAKPOINTS.lg}px) {
		background: #f0f;
	}
	@media (max-width: ${BREAKPOINTS.md}px) {
		background: #f0f;
	}
	@media (max-width: ${BREAKPOINTS.sm}) {
		background: #f0f;
	}
`;

export default PortfolioLanding;

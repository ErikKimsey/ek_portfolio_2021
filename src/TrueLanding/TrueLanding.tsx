import { FC } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { BreakPoint } from "../styles/breakpoints";
import { motion } from "framer-motion";
import { YELLOW } from "../styles/colors";

type Props = {};

type StyledProps = {};

const TrueLanding: FC<Props> = (props) => {
	return (
		<StyledContainer>
			<div className="landingBannerContainer">
				<h1 className="bannerHeader">erik kimsey</h1>
				<h1 className="bannerHeader">frontend developer</h1>
			</div>
			<div className="crossRoadsContainer">
				<motion.div
					className="screenHalf"
					animate={{ y: [-300, 0] }}
					transition={{ ease: "easeOut", duration: 0.5 }}
				>
					<NavLink to="/portfolio/">
						<h1 className="halfLabel">Portfolio Site</h1>
					</NavLink>
				</motion.div>
				<div className="line"></div>
				<motion.div
					className="screenHalf"
					animate={{ y: [-300, 0] }}
					transition={{ ease: "easeInOut", duration: 1 }}
				>
					<NavLink to="/playground">
						<h1 className="halfLabel">Digital Playground</h1>
					</NavLink>
				</motion.div>
			</div>
		</StyledContainer>
	);
};

const StyledContainer = styled.div<StyledProps>`
	height: 80vh;
	max-width: 1400px;
	width: 100%;
	font-family: "Angel";
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;

	.landingBannerContainer {
		width: 100%;
		padding: 10px;
		border-bottom: solid 0.5px #2e2e2eb5;
		padding: 20px 0;
		h1 {
			line-height: 0.9;
		}
	}

	.crossRoadsContainer {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
	}

	.screenHalf {
		width: 48vw;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		margin: 0 30px;
	}
	.line {
		background-color: #2e2e2eb5;
		width: 5px;
		margin: 10vh 0;
		height: 100%;
	}

	a {
		text-decoration: none;
		color: #fff;
	}
	.halfLabel {
		transform: scale(1);
		transition: all 0.5s ease-out;
		&:hover {
			color: #000;
			transform: scale(1.1);
			text-shadow: 0px 0px 3px #88ff00;
		}
	}

	@media ${BreakPoint.lg} {
		.line {
			margin: 20vh 0;
		}
	}

	@media ${BreakPoint.md} {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		h1 {
			font-size: 1.5em;
		}
		.screenHalf {
			height: auto;
			padding: 20px 0;
		}
		.line {
			margin: 0;
			width: 80vw;
			height: 2px;
		}
	}

	@media ${BreakPoint.sm} {
		.screenHalf {
			width: 100%;
		}
		h1 {
			font-size: 1.3em;
		}
		.line {
			margin: 0;
		}
	}
`;

export default TrueLanding;

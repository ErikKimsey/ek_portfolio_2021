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
			<motion.div
				className="landingBannerContainer"
				animate={{ y: [-300, 0] }}
				transition={{ ease: "easeOut", duration: 0.5 }}
			>
				<h1 className="bannerHeader">erik kimsey</h1>
				<h1 className="bannerHeader">frontend developer</h1>
			</motion.div>
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
	height: 100vh;
	width: 100vw;
	font-family: "Angel";
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;

	.landingBannerContainer {
		width: auto;
		position: absolute;
		padding: 0;
		top: 100px;
		left: 100px;
		/* margin: 20px; */
		h1 {
			color: #252525;
			font-size: 1.6em;
			line-height: 0.8;
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
			text-shadow: 0px 0px 1px #fff;
		}
	}

	@media (max-width: 568px) {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		.landingBannerContainer {
			width: auto;
			position: absolute;
			padding: 0;
			top: 0px;
			margin: 20px;
			h1 {
				color: #252525;
				font-size: 1.6em;
			}
		}

		.crossRoadsContainer {
			display: flex;
			flex-direction: column;
			align-items: center;
		}
		/* h1 {
			font-size: 1.5em;
		} */
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

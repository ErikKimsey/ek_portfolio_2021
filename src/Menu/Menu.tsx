import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import CAPSULES from "../assets/images/Icons/capsules.svg";
import SATELLITE from "../assets/images/satellite.svg";
import { BreakPoint } from "../styles/breakpoints";
import { YELLOW } from "../styles/colors";

type Props = {};

type StyledProps = {};

const ACTIVE_STYLES = {
	border: "solid 1px #555",
	backgroundColor: "#555",
	borderRadius: "10px",
};

const Menu: FC<Props> = (props) => {
	const {} = props;

	return (
		<StyledContainer>
			<motion.div
				className="screenHalf"
				animate={{ y: [-300, 0] }}
				transition={{ ease: "easeOut", duration: 0.5 }}
			>
				<NavLink
					to="/portfolio/"
					style={{ padding: "10px" }}
					activeStyle={ACTIVE_STYLES}
				>
					<img src={CAPSULES} />
				</NavLink>
			</motion.div>
			<div className="line"></div>
			<motion.div
				className="screenHalf"
				animate={{ y: [-300, 0] }}
				transition={{ ease: "easeInOut", duration: 1 }}
			>
				<NavLink
					to="/playground"
					style={{ padding: "10px" }}
					activeStyle={ACTIVE_STYLES}
				>
					<img src={SATELLITE} />
				</NavLink>
			</motion.div>
		</StyledContainer>
	);
};

const StyledContainer = styled.div<StyledProps>`
	position: fixed;
	bottom: 60px;
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	height: 50px;
	left: 0;

	img {
		width: 50px;
		height: 50px;
	}

	.screenHalf {
		margin: 10px;
		display: flex;
		flex-flow: row wrap;
		justify-content: center;
		align-items: center;
		background-color: #000;
	}

	.line {
		width: 20px;
		height: 2px;
		background-color: #555;
	}
`;
export default Menu;

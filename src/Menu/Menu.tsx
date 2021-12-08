import { FC } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import CAPSULES from "../assets/images/Icons/capsules.svg";
import SATELLITE from "../assets/images/satellite.svg";
import ICECREAM from "../assets/images/Icons/ice-cream-solid.svg";

type Props = {};

type StyledProps = {};

const ACTIVE_STYLES = {
	borderBottom: "solid 2px #555",
	backgroundColor: "rgba(0,0,0,0)",
	borderRadius: "0px",
};

const Menu: FC<Props> = (props) => {
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
					<img src={ICECREAM} alt="capsule icon" />
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
					<img src={SATELLITE} alt="satellite icon" />
				</NavLink>
			</motion.div>
		</StyledContainer>
	);
};

const StyledContainer = styled.div<StyledProps>`
	position: fixed;
	align-self: center;
	bottom: 30px;
	width: 200px;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	height: 50px;
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
	}

	.line {
		width: 20px;
		height: 1px;
	}

	@media (max-width: 568px) {
		bottom: 20px;
		img {
			height: 30px;
			width: 30px;
		}
	}
`;
export default Menu;

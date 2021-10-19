import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import CAPSULES from "../assets/images/Icons/capsules.svg";
import SATELLITE from "../assets/images/satellite.svg";
import { BreakPoint } from "../styles/breakpoints";

type Props = {};

type StyledProps = {};

const Menu: FC<Props> = (props) => {
	const {} = props;

	return (
		<StyledContainer>
			<motion.div
				className="screenHalf"
				animate={{ y: [-300, 0] }}
				transition={{ ease: "easeOut", duration: 0.5 }}
			>
				<NavLink to="/portfolio/">
					<img src={CAPSULES} />
				</NavLink>
			</motion.div>
			<div className="line"></div>
			<motion.div
				className="screenHalf"
				animate={{ y: [-300, 0] }}
				transition={{ ease: "easeInOut", duration: 1 }}
			>
				<NavLink to="/playground">
					<img src={SATELLITE} />
				</NavLink>
			</motion.div>
		</StyledContainer>
	);
};

const StyledContainer = styled.div<StyledProps>`

		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;

        img {
            width:50px;
        }
        
		.landingBannerContainer {
            width: auto;
			position: absolute;
			h1 {
                color: #252525;
				font-size: 1.6em;
			}
		}
        
		.screenHalf {
            height: auto;
			padding: 10px;
			margin: 10px;
		}
		img {
            padding: 0;
			margin: 0;
		}
		.line {
            width:20px;
            height:2px;
            background-color:#555;
		}
	}

`;
export default Menu;

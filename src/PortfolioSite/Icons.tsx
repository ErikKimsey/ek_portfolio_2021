import React, { FC, useState, useEffect } from "react";
import styled from "styled-components";
import github from "../assets/images/Icons/github.svg";
import behance from "../assets/images/Icons/behance.svg";
import soundcloud from "../assets/images/Icons/soundcloud.svg";
import astronaut from "../assets/images/Icons/astronaut.svg";
import linkedin from "../assets/images/Icons/linkedin.svg";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

type Props = {};

type StyledProps = {};

const Icons: FC<Props> = (props) => {
	const {} = props;

	/**
        - Github,
        - Linkedin,
        - Soundcloud,
        - Behance,
     */
	return (
		<StyledContainer>
			<motion.a
				href="https://www.beatport.com"
				target="_blank"
				animate={{ opacity: [0, 0.7] }}
				whileHover={{ rotate: "-15deg" }}
			>
				<motion.img
					src={github}
					animate={{ y: [-400, 0] }}
					transition={{ ease: "easeInOut", duration: 1 }}
				/>
			</motion.a>
			<motion.a
				href="https://www.beatport.com"
				target="_blank"
				animate={{ opacity: [0, 0.7] }}
				whileHover={{ rotate: "-15deg" }}
			>
				<motion.img
					src={soundcloud}
					animate={{ y: [-350, 0] }}
					transition={{ ease: "easeInOut", duration: 1.2 }}
				/>
			</motion.a>
			<motion.a
				href="https://www.beatport.com"
				target="_blank"
				animate={{ opacity: [0, 0.7] }}
				whileHover={{ rotate: "-15deg" }}
			>
				<motion.img
					src={behance}
					animate={{ y: [-300, 0] }}
					transition={{ ease: "easeInOut", duration: 1.4 }}
				/>
			</motion.a>
			<motion.a
				href="https://www.beatport.com"
				target="_blank"
				animate={{ opacity: [0, 0.7] }}
				whileHover={{ rotate: "-15deg" }}
			>
				<motion.img
					src={linkedin}
					animate={{ y: [-250, 0] }}
					transition={{ ease: "easeInOut", duration: 1.6 }}
				/>
			</motion.a>
		</StyledContainer>
	);
};

const StyledContainer = styled.div<StyledProps>`
	position: fixed;
	width: 70px;
	display: flex;
	flex-flow: column wrap;
	justify-content: flex-end;
	bottom: 100px;
	right: 50px;
	.menuItem {
	}

	a {
		/* margin: 5px;
		height: 50px;
		width: 50px;
		fill: #fff; */
	}

	img {
		width: 45px;
		margin: 10px;
	}

	@media (max-width: 768px) {
		position: fixed;
		display: flex;
		flex-flow: row wrap;
		/* justify-content: space-around; */
		/* align-items: space-around; */
		width: 70%;
		bottom: 40px;
		right: 20px;

		img {
			width: 44px;
			fill: #fff;
		}
	}
	@media (max-width: 568px) {
		position: fixed;
		display: flex;
		flex-flow: row wrap;
		/* justify-content: space-around; */
		/* align-items: space-around; */
		width: 70%;
		bottom: 40px;
		right: 20px;

		img {
			width: 33px;
			fill: #fff;
			margin: 10px;
		}
	}
	@media (max-width: 568px) {
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: 35px;
		bottom: 50px;
		left: 10px;
		img {
			width: 25px;
			margin: 10px;
		}
	}
`;

export default Icons;

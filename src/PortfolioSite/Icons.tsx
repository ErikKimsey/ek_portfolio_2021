import React, { FC } from "react";
import styled from "styled-components";
import github from "../assets/images/Icons/github.svg";
import behance from "../assets/images/Icons/behance.svg";
import soundcloud from "../assets/images/Icons/soundcloud.svg";
import linkedin from "../assets/images/Icons/linkedin.svg";
import satellite from "../assets/images/satellite.svg";
import { motion } from "framer-motion";

type Props = {};

type StyledProps = {};

const Icons: FC<Props> = (props) => {
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
			<motion.a
				href="https://www.beatport.com"
				target="_blank"
				animate={{ opacity: [0, 0.7] }}
				whileHover={{ rotate: "-15deg" }}
			>
				<motion.img
					src={satellite}
					animate={{ y: [-250, 0] }}
					transition={{ ease: "easeInOut", duration: 1.6 }}
				/>
			</motion.a>
		</StyledContainer>
	);
};

const StyledContainer = styled.div<StyledProps>`
	position: fixed;
	/* width: 100px; */
	display: flex;
	flex-flow: column wrap;
	justify-content: flex-end;
	bottom: 100px;

	align-items: center;
	.menuItem {
	}

	button {
		width: 45px;
		background-color: rgba(0, 0, 0, 0);
	}

	img {
		width: 45px;
		margin: 10px;
	}

	@media (max-width: 768px) {
		left: 10px;
		width: auto;

		img {
			width: 44px;
			fill: #fff;
		}
	}
	@media (max-width: 568px) {
		/* position: fixed;
		display: flex;
		flex-flow: row wrap;
		width: 70%;
		bottom: 40px;
		right: 20px; */
		bottom: 10px;

		img {
			width: 33px;
			fill: #fff;
			/* margin: 10px; */
		}
	}
`;

export default Icons;

import React, { FC, useState, useEffect } from "react";
import styled from "styled-components";
import github from "../assets/images/Icons/github.svg";
import behance from "../assets/images/Icons/behance.svg";
import soundcloud from "../assets/images/Icons/soundcloud.svg";
import linkedin from "../assets/images/Icons/linkedin.svg";
import blackhole from "../assets/images/Icons/blackhole.svg";
import { motion } from "framer-motion";

type Props = {};

type StyledProps = {
	isActive?: boolean;
};

const Icons: FC<Props> = (props) => {
	let [menuActive, setMenuActive] = useState<boolean>(false);

	const handleMenuExpand = () => {
		setMenuActive(!menuActive);
	};

	return (
		<StyledContainer isActive={menuActive}>
			<div className="menuContainer">
				<motion.a
					href="https://www.beatport.com"
					target="_blank"
					animate={{ opacity: [0, 0.7] }}
					whileHover={{ rotate: "15deg" }}
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
					whileHover={{ rotate: "15deg" }}
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
					whileHover={{ rotate: "15deg" }}
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
					whileHover={{ rotate: "15deg" }}
				>
					<motion.img
						src={linkedin}
						animate={{ y: [-250, 0] }}
						transition={{ ease: "easeInOut", duration: 1.6 }}
					/>
				</motion.a>
			</div>
			<div className="menuButton blackHole" onClick={handleMenuExpand}>
				<motion.img
					src={blackhole}
					animate={{ y: [-250, 0] }}
					transition={{ ease: "easeInOut", duration: 1.6 }}
					whileHover={{ scale: 1.3, duration: 2 }}
				/>
			</div>
		</StyledContainer>
	);
};

const StyledContainer = styled.div<StyledProps>`
	position: fixed;
	width: 100px;
	display: flex;
	flex-flow: column wrap;
	justify-content: flex-end;
	bottom: 100px;

	align-items: center;

	.menuContainer {
		width: 100%;
		display: ${(props) => (props.isActive === true ? "flex" : "none")};
		flex-flow: column wrap;
		justify-content: flex-end;
		margin: 10px;
	}

	.menuItem {
	}

	button {
		width: 45px;
		background-color: rgba(0, 0, 0, 0);
	}

	.blackHole {
		animation: blackhole 4s infinite ease-in-out;
	}

	img {
		width: 50px;
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
		}
	}

	@keyframes blackhole {
		0% {
			transform: scale(1);
		}
		50% {
			transform: scale(1.2);
		}
		100% {
			transform: scale(1);
		}
	}
`;

export default Icons;

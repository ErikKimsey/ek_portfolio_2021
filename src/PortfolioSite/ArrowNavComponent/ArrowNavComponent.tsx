import React, { FC, useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import UpArrow from "../../assets/images/Icons/arrow_up.svg";
import DownArrow from "../../assets/images/Icons/arrow_down.svg";

type Props = {};

type StyledProps = {
	xPosition?: number;
	yPosition?: number;
};

const ArrowNavComponent: FC<Props> = (props) => {
	const {} = props;
	let [yPos, setYPos] = useState(null);
	let [xPos, setXPos] = useState(null);

	useEffect(() => {}, []);

	return (
		<StyledContainer>
			<motion.img
				src={UpArrow}
				alt="navigation arrow up"
				className="upArrow"
				drag="y"
				dragConstraints={{ top: -10, bottom: 10 }}
			/>
			<motion.img
				src={DownArrow}
				alt="navigation arrow down"
				className="downArrow"
				drag="y"
				dragConstraints={{ top: -10, bottom: 10 }}
			/>
		</StyledContainer>
	);
};

const StyledContainer = styled.div<StyledProps>`
	position: fixed;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	top: ${(props) =>
		props.yPosition !== undefined
			? props.yPosition
			: window.innerHeight - 444}px;
	left: ${(props) =>
		props.xPosition !== undefined
			? props.xPosition
			: window.innerWidth / 2 - 74}px;
	width: 144px;
	height: 300px;
	border: solid 1px #ff00dd;
	border-radius: 100px;
	padding: 20px;
	z-index: 1001;

	img {
		width: 100px;
	}

	.upArrow {
		top: ${(props) =>
			props.yPosition !== undefined
				? props.yPosition
				: window.innerHeight - 444}px;
		left: ${(props) =>
			props.xPosition !== undefined
				? props.xPosition
				: window.innerWidth / 2 - 74}px;
	}
	.downArrow {
		top: ${(props) =>
			props.yPosition !== undefined
				? props.yPosition
				: window.innerHeight - 444}px;
		left: ${(props) =>
			props.xPosition !== undefined
				? props.xPosition
				: window.innerWidth / 2 - 74}px;
	}
`;

export default ArrowNavComponent;

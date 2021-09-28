import React, { FC, useState, useEffect, useLayoutEffect } from "react";
import styled from "styled-components";
import { motion, useDragControls } from "framer-motion";

import UpArrow from "../../assets/images/Icons/arrow_up.svg";
import DownArrow from "../../assets/images/Icons/arrow_down.svg";

type Props = {};

type StyledProps = {
	xPosition?: number;
	yPosition?: number;
	visible?: boolean;
};

const DRAG_DIRECTIONS = {
	up: "UP",
	down: "DOWN",
};

const ArrowNavComponent: FC<Props> = (props) => {
	const {} = props;
	const dragControls = useDragControls();
	let [yPos, setYPos] = useState(null);
	let [xPos, setXPos] = useState(null);
	let [isVisible, setIsVisible] = useState(true);
	let [screenW, setScreenW] = useState<number>(window.innerWidth);

	const Navigate = (dir: string) => {
		console.log("NAVIGATING ON DRAG: " + dir);
		/**
		 * - useHistory:
		 * ---- NAV BACK:
		 * ---- NAV FORWARD:
		 */
	};

	function handleResize() {
		setScreenW(window.innerWidth);
	}

	useLayoutEffect(() => {
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	});

	return (
		<StyledContainer visible={isVisible}>
			<motion.img
				src={UpArrow}
				alt="navigation arrow up"
				className="upArrow"
				drag="y"
				dragConstraints={{ top: 4, bottom: -4 }}
				onDragStart={() => Navigate(DRAG_DIRECTIONS.up)}
			/>
			<motion.img
				src={DownArrow}
				alt="navigation arrow down"
				className="downArrow"
				drag="y"
				dragConstraints={{ top: -4, bottom: 4 }}
				onDragStart={() => Navigate(DRAG_DIRECTIONS.down)}
			/>
		</StyledContainer>
	);
};

const StyledContainer = styled.div<StyledProps>`
	position: fixed;
	display: ${(props) => (props.visible ? "flex" : "none")};
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	justify-self: center;
	bottom: 200px;
	background-color: #222;
	/* top: ${(props) =>
		props.yPosition !== undefined
			? props.yPosition
			: window.innerHeight - 444}px; */
	left: ${(props) =>
		props.xPosition !== undefined
			? props.xPosition
			: window.innerWidth / 2 - 30}px;
	width: 60px;
	height: 126px;
	border: solid 1px #555;
	border-radius: 100px;
	padding: 0px;
	z-index: 1001;

	img {
		width: 50px;
	}

	@media (max-width: 769px) {
		display: ${(props) => (props.visible ? "flex" : "none")};
		/* flex-direction: column;
		justify-content: space-around; */
		align-items: center;
		justify-self: center;
		bottom: 100px;
	}
`;

export default ArrowNavComponent;

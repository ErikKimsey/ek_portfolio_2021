import React, { FC, useState, useEffect, useLayoutEffect } from "react";
import styled from "styled-components";
import { motion, DragControls, useDragControls } from "framer-motion";

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
				dragConstraints={{ top: -10, bottom: 10 }}
				onDragStart={() => Navigate(DRAG_DIRECTIONS.up)}
			/>
			<motion.img
				src={DownArrow}
				alt="navigation arrow down"
				className="downArrow"
				drag="y"
				dragConstraints={{ top: -10, bottom: 10 }}
				onDragStart={() => Navigate(DRAG_DIRECTIONS.down)}
			/>
		</StyledContainer>
	);
};

const StyledContainer = styled.div<StyledProps>`
	position: fixed;
	display: ${(props) => (props.visible ? "flex" : "none")};
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	justify-self: center;
	bottom: 100px;

	/* top: ${(props) =>
		props.yPosition !== undefined
			? props.yPosition
			: window.innerHeight - 444}px; */
	/* left: ${(props) =>
		props.xPosition !== undefined
			? props.xPosition
			: window.innerWidth / 2 - 74}px; */
	left: ${(props) =>
		props.xPosition !== undefined
			? props.xPosition
			: window.innerWidth / 2 - 74}px;
	width: 100px;
	height: 222px;
	border: solid 1px #3b373b;
	border-radius: 100px;
	padding: 20px;
	z-index: 1001;

	img {
		width: 77px;
	}

	.upArrow {
		/* top: ${(props) =>
			props.yPosition !== undefined
				? props.yPosition
				: window.innerHeight - 444}px;
		left: ${(props) =>
			props.xPosition !== undefined
				? props.xPosition
				: window.innerWidth / 2 - 74}px; */
	}
	.downArrow {
		/* top: ${(props) =>
			props.yPosition !== undefined
				? props.yPosition
				: window.innerHeight - 444}px;
		left: ${(props) =>
			props.xPosition !== undefined
				? props.xPosition
				: window.innerWidth / 2 - 74}px; */
	}

	@media (max-width: 769px) {
		width: 100px;
		height: 150px;
		display: ${(props) => (props.visible ? "flex" : "none")};
		/* flex-direction: column;
		justify-content: space-around; */
		align-items: center;
		justify-self: center;
		bottom: -100px;
	}
`;

export default ArrowNavComponent;

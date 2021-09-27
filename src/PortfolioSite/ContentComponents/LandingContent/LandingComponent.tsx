import { motion } from "framer-motion";
import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";

type Props = {};

type StyledProps = {
	containerHeight?: number;
	containerWidth?: number;
	isVisible?: boolean;
};

const LandingComponent: FC<Props> = (props) => {
	const {} = props;
	const [winHeight, setWinHeight] = useState(0);
	const [winWidth, setWinWidth] = useState(0);
	const [hasLoaded, setHasLoaded] = useState(false);

	const variants = {
		visible: { opacity: 1, scale: 1 },
		hidden: { opacity: 0, scale: 0.99 },
	};

	const handleResize = () => {
		setWinWidth(window.innerWidth);
		setWinHeight(window.innerHeight);
	};

	useEffect(() => {
		setWinHeight(window.innerHeight);
		setWinWidth(window.innerWidth);
		setHasLoaded(true);
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<StyledContainer
			as={motion.div}
			isVisible={hasLoaded}
			containerHeight={winHeight}
			containerWidth={winWidth}
			initial="hidden"
			variants={variants}
			animate={hasLoaded ? "visible" : "hidden"}
			transition={{ duration: 0.5 }}
		>
			<h1>WHA_WHAAAT!!</h1>
		</StyledContainer>
	);
};

const StyledContainer = styled.div<StyledProps>`
	width: ${(props) => props.containerWidth * 0.7}px;
	height: ${(props) => props.containerHeight * 0.8}px;
	font-weight: 200;
	display: flex;
	flex-flow: column;
	align-items: center;
	/* justify-content: center; */
	padding: 15px;
	h1 {
		font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
			sans-serif;
		font-family: "Desib";
		color: #fff;
	}
	p {
		color: #fff;
		font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
			sans-serif;
		text-transform: uppercase;
	}
`;

export default LandingComponent;

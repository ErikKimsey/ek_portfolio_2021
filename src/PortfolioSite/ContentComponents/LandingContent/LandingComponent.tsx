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
	const [h1HasLoaded, setH1HasLoaded] = useState(false);

	const variants = {
		visible: { opacity: 1, boxShadow: "1px 1px 10px rgba(0, 0, 0, 0)" },
		hidden: { opacity: 0, boxShadow: "10px 10px 20px rgb(255, 255, 255)" },
	};
	const h1Variants = {
		visible: {
			opacity: 1,
			color: "#fff",
			textShadow: "0px 0px 0px rgba(255, 255, 255,1)",
		},
		hidden: {
			opacity: 0,
			color: "#fff",
			textShadow: "1px 1px 20px rgb(255, 255, 255)",
		},
	};

	useEffect(() => {
		setWinHeight(window.innerHeight);
		setWinWidth(window.innerWidth);
		// console.log("RESUME");
		window.setTimeout(() => {
			setHasLoaded(true);
		}, 0);
		window.setTimeout(() => {
			setH1HasLoaded(true);
		}, 0.6);
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
			transition={{ duration: 1 }}
		>
			<motion.h1
				variants={h1Variants}
				animate={h1HasLoaded ? "visible" : "hidden"}
				transition={{ duration: 3 }}
			>
				WHA_WHAAAT!!
			</motion.h1>
		</StyledContainer>
	);
};

const StyledContainer = styled(motion.div).attrs(() => ({
	initial: "hidden",
}))<StyledProps>`
	width: ${(props) => props.containerWidth * 0.7}px;
	height: ${(props) => props.containerHeight * 0.8}px;
	border: solid 2px #222;
	background-color: #f0f;
	h1 {
		color: #f0f;
	}
`;

export default LandingComponent;

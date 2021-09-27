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
		visible: { opacity: 1, scale: 1 },
		hidden: { opacity: 0, scale: 0.99 },
	};
	const h1Variants = {
		visible: {
			opacity: 1,
		},
		hidden: {
			opacity: 0,
		},
	};

	useEffect(() => {
		setWinHeight(window.innerHeight);
		setWinWidth(window.innerWidth);
		// console.log("RESUME");
		window.setTimeout(() => {
			setHasLoaded(true);
		}, 0.5);
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
			<motion.h1>WHA_WHAAAT!!</motion.h1>
		</StyledContainer>
	);
};

const StyledContainer = styled(motion.div).attrs(() => ({
	initial: "hidden",
}))<StyledProps>`
	width: ${(props) => props.containerWidth * 0.7}px;
	height: ${(props) => props.containerHeight * 0.8}px;
	border: solid 2px #222;
	h1 {
		color: #fff;
	}
`;

export default LandingComponent;

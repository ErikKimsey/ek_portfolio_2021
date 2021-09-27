import { motion } from "framer-motion";
import React, { FC, useState, useEffect, useCallback } from "react";
import styled from "styled-components";

type Props = {};

type StyledProps = {
	containerHeight?: number;
	containerWidth?: number;
};

const Work: FC<Props> = (props) => {
	const {} = props;
	const [height, setHeight] = useState(0);
	const [width, setWidth] = useState(0);
	const [winHeight, setWinHeight] = useState(0);
	const [winWidth, setWinWidth] = useState(0);
	const [hasLoaded, setHasLoaded] = useState(false);
	const [h1HasLoaded, setH1HasLoaded] = useState(false);

	const variants = {
		visible: { opacity: 1, scale: 1 },
		hidden: { opacity: 0, scale: 0.99 },
	};

	const refContainer = useCallback((node) => {
		if (node !== null) {
			// console.log(node.getBoundingClientRect());
		}
	}, []);

	useEffect(() => {
		setWinHeight(window.innerHeight);
		setWinWidth(window.innerWidth);
		setHasLoaded(true);
	}, []);

	const setDimens = () => {
		console.log("height: " + height);
		console.log("width: " + width);
	};

	return (
		<StyledContainer
			containerHeight={winHeight}
			containerWidth={winWidth}
			as={motion.div}
			isVisible={hasLoaded}
			initial="hidden"
			variants={variants}
			animate={hasLoaded ? "visible" : "hidden"}
			transition={{ duration: 0.5 }}
			ref={refContainer}
			id="workContainer"
		>
			<h1>work. </h1>
			<p>
				Leverage agile frameworks to provide a robust synopsis for high
				level overviews. Iterative approaches to corporate strategy
				foster collaborative thinking to further the overall value
				proposition. Organically grow the holistic world view of
				disruptive innovation via workplace diversity and empowerment.
			</p>
		</StyledContainer>
	);
};

const StyledContainer = styled.div<StyledProps>`
	width: ${(props) => props.containerWidth * 0.7}px;
	height: ${(props) => props.containerHeight * 0.8}px;
	font-weight: 200;
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

export default Work;

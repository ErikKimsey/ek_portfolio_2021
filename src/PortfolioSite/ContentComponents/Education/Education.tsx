import { motion } from "framer-motion";
import React, { FC, useState, useEffect } from "react";
import styled from "styled-components";

type Props = {};

type StyledProps = {
	containerHeight?: number;
	containerWidth?: number;
};

const Education: FC<Props> = (props) => {
	const {} = props;
	const [winHeight, setWinHeight] = useState(0);
	const [winWidth, setWinWidth] = useState(0);
	const [hasLoaded, setHasLoaded] = useState(false);

	const variants = {
		visible: { opacity: 1, scale: 1 },
		hidden: {
			opacity: 0,
			scale: 0.99,
		},
	};

	useEffect(() => {
		setWinHeight(window.innerHeight);
		setWinWidth(window.innerWidth);
		setHasLoaded(true);
	}, []);

	return (
		<StyledContainer
			as={motion.div}
			isVisible={hasLoaded}
			initial="hidden"
			variants={variants}
			animate={hasLoaded ? "visible" : "hidden"}
			transition={{ duration: 0.5 }}
			// ref={refContainer}
			id="workContainer"
			containerHeight={winHeight}
			containerWidth={winWidth}
		>
			<h1>education.</h1>
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

export default Education;

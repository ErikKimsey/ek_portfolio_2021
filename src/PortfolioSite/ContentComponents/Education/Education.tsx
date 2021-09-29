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
			initial="hidden"
			variants={variants}
			animate={hasLoaded ? "visible" : "hidden"}
			transition={{ duration: 0.5 }}
			id="workContainer"
			containerHeight={winHeight}
			containerWidth={winWidth}
		>
			<div className="headerContainer">
				<motion.div
					className="leftLine"
					animate={{ x: [200, 0] }}
					transition={{ ease: "easeOut", duration: 0.7 }}
				></motion.div>
				<motion.h1
					animate={{ x: [-200, 0] }}
					transition={{ ease: "easeOut", duration: 0.5 }}
				>
					education.
				</motion.h1>
			</div>
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
	padding: 15px;
	display: flex;
	flex-direction: column;

	.headerContainer {
		display: flex;
		flex-direction: row;
		width: auto;
		border-radius: 0 10px 0 0;
	}
	.leftLine {
		width: 1px;
		border: solid 20px #f0f;
	}
	h1 {
		padding: 5px;
	}
`;

export default Education;

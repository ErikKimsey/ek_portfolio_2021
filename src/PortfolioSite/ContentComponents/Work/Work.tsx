import { motion, AnimatePresence } from "framer-motion";
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
			containerHeight={winHeight}
			containerWidth={winWidth}
			as={motion.div}
			isVisible={hasLoaded}
			initial="hidden"
			variants={variants}
			animate={hasLoaded ? "visible" : "hidden"}
			transition={{ duration: 0.5 }}
			id="workContainer"
		>
			<div className="headerContainer">
				<AnimatePresence>
					<motion.div
						key="leftLine"
						className="leftLine"
						animate={{ x: [200, 0], opacity: [0, 1] }}
						exit={{ opacity: [1, 0] }}
						transition={{ ease: "easeOut", duration: 0.7 }}
					></motion.div>
				</AnimatePresence>
				<motion.h1
					key="h1"
					animate={{ x: [-200, 0] }}
					exit={{ x: [0, -200] }}
					transition={{ ease: "easeOut", duration: 0.5 }}
				>
					work.
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

export default Work;

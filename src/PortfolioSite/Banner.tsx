import React, { FC, useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { setTimeout } from "timers";

type Props = {};

type StyledProps = {
	isVisible?: boolean;
};

const Banner: FC<Props> = (props) => {
	const [hasLoaded, setHasLoaded] = useState(false);
	const [shouldMinimize, setShouldMinimize] = useState(false);

	const variants = {
		visible: { opacity: 0.7, scale: 1 },
		hidden: {
			opacity: 0,
			scale: 5,
		},
		// name h1
		nameFontScaledUp: { scale: [1.5, 1], x: [-100, 0] },
		nameFontScaledDown: { scale: 1, x: "auto", y: "auto" },
		// title h1
		titleFontScaledUp: { scale: [1.5, 1], x: [-100, 50] },
		titleFontScaledDown: { scale: 1, x: "auto", y: "auto" },
	};

	const h1Variants = {};

	const minimizeH1s = () => {
		setTimeout(() => {
			setShouldMinimize(true);
		}, 2000);
	};

	useEffect(() => {
		setHasLoaded(true);
		minimizeH1s();
	}, []);

	return (
		<StyledContainer
			as={motion.div}
			isVisible={hasLoaded}
			initial="hidden"
			variants={variants}
			animate={hasLoaded ? "visible" : "hidden"}
			transition={{ duration: 1 }}
		>
			<motion.h1
				initial="fontScaledUp"
				variants={variants}
				animate={
					shouldMinimize ? "nameFontScaledDown" : "nameFontScaledUp"
				}
				transition={{ duration: 1 }}
				className="headerName"
			>
				ERIK KIMSEY
			</motion.h1>
			<motion.h1
				initial="fontScaledUp"
				variants={variants}
				animate={
					shouldMinimize ? "titleFontScaledDown" : "titleFontScaledUp"
				}
				transition={{ duration: 1.5 }}
				className="headerTitle"
			>
				FRONTEND ENGINEER
			</motion.h1>
		</StyledContainer>
	);
};

const StyledContainer = styled.div<StyledProps>`
	box-sizing: content-box;
	position: relative;
	top: 0;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	margin-right: 50px;
	font-family: "Angel";
	padding: 20px;
	margin-bottom: 20px;

	h1 {
		margin: 0;
		font-size: 4em;
		color: #333;
		line-height: 1;
	}

	.headerTitle {
		color: rgba(255, 0, 255, 0.8);
	}

	@media (max-width: 768px) {
		margin-top: 0px;
		position: relative;
		left: 10px;
		top: 0px;
		height: auto;
		.leftSpace {
			padding: 10px;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: flex-start;
			z-index: -100000;
		}
		h1 {
			font-size: 3em;
			padding: 0;
			margin: 0;
			line-height: 1;
		}
	}

	@media (max-width: 568px) {
		margin-top: 0px;
		position: relative;
		/* left: 10px; */
		top: 0px;
		height: auto;
		padding: 0;
		margin: 0;
		.leftSpace {
			padding: 0px;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: flex-start;
			display: none;
		}
		h1 {
			/* font-size: 1.2em; */
			padding: 0;
			margin: 0;
			line-height: 1;
		}
	}
`;

export default Banner;

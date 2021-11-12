import { FC, useState, useEffect } from "react";
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
		nameFontScaledUp: { scale: [1.5, 1], x: [-100, 0] },
		nameFontScaledDown: { scale: 1, x: "auto", y: "auto" },
		titleFontScaledUp: { scale: [1.5, 1], x: [-100, 0] },
		titleFontScaledDown: { scale: 1, x: "auto", y: "auto" },
	};

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
				Creative Technologist
			</motion.h1>
		</StyledContainer>
	);
};

const StyledContainer = styled.div<StyledProps>`
	box-sizing: content-box;
	position: relative;
	width: 98%;
	top: 20px;
	display: flex;
	flex-direction: column;
	/* align-items: center; */
	/* margin-right: 50px; */
	font-family: "Angel";
	padding: 0px;
	padding-left: 40px;
	/* margin-bottom: 20px; */

	h1 {
		position: relative;
		margin: 0;
		font-size: 11vw;
		line-height: 1;
	}

	.headerName {
		color: rgba(255, 0, 255, 0.6);
		&::after {
			content: "ERIK KIMSEY";
			position: absolute;
			color: rgba(0, 150, 155, 0.6);
			left: 3px;
			top: 3px;
		}
	}

	.headerTitle {
		color: rgba(255, 0, 255, 0.6);
		color: rgba(70, 70, 70, 0.6);
		font-size: 8vw;
		&::after {
			content: "Creative Technologist";
			position: absolute;
			color: rgba(70, 70, 70, 0.6);
			left: 3px;
			top: 3px;
		}
	}

	@media (max-width: 768px) {
		margin-top: 20px;
		position: relative;
		left: 10px;
		top: 20px;
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
			/* font-size: 3em; */
			padding: 0;
			margin: 0;
			line-height: 1;
		}
		.headerTitle {
			font-size: 8vw;
			/* color: rgba(255, 0, 255, 0.8); */
		}
	}

	@media (max-width: 568px) {
		margin-top: 0px;
		position: relative;
		top: 0px;
		height: auto;
		padding: 0;
		margin: 0;
		margin-top: 20px;
		.leftSpace {
			padding: 0px;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: flex-start;
			display: none;
		}
		h1 {
			padding: 0;
			margin: 0;
			line-height: 1;
			font-size: 15vw;
			overflow: wrap;
			white-space: pre-wrap;
			hyphens: manual;
		}
		.headerTitle {
			font-size: 5vh;
			font-size: 12vw;
			overflow: wrap;
			white-space: pre-wrap;
			hyphens: auto;
		}
	}
`;

export default Banner;

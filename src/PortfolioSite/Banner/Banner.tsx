import { FC, useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { setTimeout } from "timers";
import "./banner.scss";

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
			<div className="h1Container">
				<motion.h1
					initial="fontScaledUp"
					variants={variants}
					animate={
						shouldMinimize
							? "nameFontScaledDown"
							: "nameFontScaledUp"
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
						shouldMinimize
							? "titleFontScaledDown"
							: "titleFontScaledUp"
					}
					transition={{ duration: 1.5 }}
					className="headerTitle"
				>
					creative developer
				</motion.h1>
			</div>
		</StyledContainer>
	);
};

const StyledContainer = styled.div<StyledProps>`
	box-sizing: content-box;
	position: relative;
	width: 100%;
	height: 80vh;
	top: 20px;
	display: flex;
	flex-direction: column;
	/* font-family: "Angel"; */
	padding: 0px;
	padding-left: 40px;

	.h1Container {
		width: 90%;
		position: relative;
		display: flex;
		flex-flow: column;
		justify-content: center;
		align-items: flex-start;
		padding: 10px;
		border-radius: 10px;
	}

	h1 {
		width: 100%;
		position: relative;
		margin: 0;
		font-size: 60px;
		line-height: 1;
		&::after {
			color: rgba(0, 150, 155, 0.6);
		}
	}

	.headerName {
		position: relative;
		color: rgba(255, 0, 255, 0.6);
		&::after {
			content: "ERIK KIMSEY";
			position: absolute;
			left: 2px;
			top: 2px;
		}
	}

	.headerTitle {
		position: relative;
		color: rgba(255, 0, 255, 0.6);
		&::after {
			content: "creative developer";
			position: absolute;
			left: 2px;
			top: 2px;
		}
	}

	@media (max-width: 768px) {
		width: 100%;
		margin-top: 20px;
		position: relative;
		left: 5px;
		top: 20px;
		height: auto;
		h1 {
			padding: 0;
			margin: 0;
			line-height: 1;
		}
		.headerTitle {
		}
	}

	@media (max-width: 568px) {
		position: relative;
		top: 0px;
		height: auto;
		padding: 0;
		margin: 0;
		margin-top: 20px;
		width: 100%;

		.h1Container {
			padding: 0;
		}
		h1 {
			font-family: "Angel", Helvetica, Arial, Sans-Serif;
			padding: 0;
			margin: 0;
			line-height: 1;
			font-size: 15vw;
			overflow: wrap;
			white-space: pre-wrap;
			hyphens: manual;
			&::after {
				color: rgba(0, 0, 0, 0);
			}
		}
		.headerTitle {
			/* font-size: 5vh; */
			/* font-size: 12vw; */
			overflow: wrap;
			white-space: pre-wrap;
			hyphens: auto;
		}
	}
`;

export default Banner;

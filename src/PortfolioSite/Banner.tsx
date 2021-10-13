import React, { FC, useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { YELLOW } from "../styles/colors";

type Props = {};

type StyledProps = {};

const Banner: FC<Props> = (props) => {
	const {} = props;
	const [hasLoaded, setHasLoaded] = useState(false);

	const variants = {
		visible: { opacity: 0.7, scale: 1 },
		hidden: {
			opacity: 0,
			scale: 1,
		},
	};

	useEffect(() => {
		setHasLoaded(true);
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
			<h1>ERIK KIMSEY</h1>
			<h1>FRONTEND ENGINEER</h1>
		</StyledContainer>
	);
};

const StyledContainer = styled.div<StyledProps>`
	position: relative;
	top: 0;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	margin-right: 50px;
	font-family: "Angel";
	padding: 20px;

	h1 {
		margin: 0;
		font-size: 4em;
		color: #333;
		line-height: 1;
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
		left: 10px;
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
			font-size: 2em;
			padding: 0;
			margin: 0;
			line-height: 1;
		}
	}
`;

export default Banner;

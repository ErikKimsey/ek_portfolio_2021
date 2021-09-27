import React, { FC, useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

type Props = {};

type StyledProps = {};

const Banner: FC<Props> = (props) => {
	const {} = props;
	const [hasLoaded, setHasLoaded] = useState(false);

	const variants = {
		visible: { opacity: 1, scale: 1 },
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
			transition={{ duration: 5 }}
		>
			<div className="leftSpace"></div>
			<h2>ERIK KIMSEY</h2>
			<h2>CREATIVE TECHNOLOGIST</h2>
		</StyledContainer>
	);
};

const StyledContainer = styled.div<StyledProps>`
	position: fixed;
	width: 100%;
	display: flex;
	flex-flow: row wrap;
	justify-self: flex-end;
	align-items: flex-end;
	top: 0;
	margin-top: 0;
	padding: 10px;
	height: 133px;
	font-family: "Desib";
	border-radius: 100px;
	background: rgb(255, 0, 200);
	background: linear-gradient(
		0deg,
		rgba(0, 0, 0, 0.5) 0%,
		rgba(0, 0, 0, 1) 42%
	);
	z-index: 1000;
	.leftSpace {
		width: 100px;
	}
	h2 {
		padding: 0 10px;
		margin: 0;
	}

	@media (max-width: 700px) {
		padding: 0;
		margin: 0;
		width: 100%;
		flex-flow: column;
		justify-content: flex-end;
		align-items: flex-start;
		h2 {
			padding: 0 10px;
			margin: 0;
			padding-left: 100px;
		}
	}
`;

export default Banner;

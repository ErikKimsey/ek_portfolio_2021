import React, { FC, useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

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

	@media (max-width: 768px) {
		padding: 0;
		margin: 0;
		width: 100%;
		height: 100px;
		right: 0;
		flex-flow: column;
		justify-content: center;
		align-items: flex-end;
		h2 {
			padding-right: 20px;
			margin: 0;
		}
	}
`;

export default Banner;

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
			<div className="leftSpace">
				<div className="diagonalLine"></div>
			</div>
			<h1>ERIK KIMSEY</h1>
			{/* <h2>CREATIVE TECHNOLOGIST</h2> */}
		</StyledContainer>
	);
};

const StyledContainer = styled.div<StyledProps>`
	position: fixed;
	width: 100%;
	display: flex;
	flex-flow: row wrap;
	justify-self: flex-end;
	align-items: center;
	top: 0;
	left: 50px;
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
	h1 {
		padding: 30px;
		margin: 0;
		font-size: 4em;
	}
	.leftSpace {
		width: 50px;
		.diagonalLine {
			transform: rotate(45deg);
			border-top: solid 3px #fff;
		}
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

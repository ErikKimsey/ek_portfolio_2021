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
				<motion.div className="diagonalLine"></motion.div>
				<h1>ERIK KIMSEY</h1>
			</div>
			{/* <h2>CREATIVE TECHNOLOGIST</h2> */}
			<div className="rightSpace">
				<div className="rightLine"></div>
			</div>
		</StyledContainer>
	);
};

const StyledContainer = styled.div<StyledProps>`
	position: fixed;
	width: 90%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	top: 0;
	left: 50px;
	margin-top: 40px;
	padding: 10px;
	font-family: "Desib";
	z-index: 1000;

	.leftSpace {
		display: flex;
		flex-direction: row;
		width: 50%;
	}
	h1 {
		padding: 0 30px;
		margin: 0;
		font-size: 4em;
	}
	.diagonalLine {
		width: 50px;
		padding: 10px;
		transform: rotate(45deg);
		border-top: solid 3px #fff;
	}

	.rightSpace {
		width: auto;
		display: flex;
		align-self: flex-end;
		flex-flow: row;
		.rightLine {
			/* transform: rotate(-45deg); */
			/* right: 0; */
			padding: 0;
			margin: 0;
			width: 50px;
			border: solid 2px #fff;
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

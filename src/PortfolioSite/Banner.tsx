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
				<h1 className="erikKimseyH1">ERIK KIMSEY</h1>
				<h1
					className="feEngH1"
					style={{ marginTop: "10px", alignSelf: "flex-end" }}
				>
					FRONTEND ENGINEER
				</h1>
			</div>
			{/* <div className="rightSpace">
				<div className="rightLine"></div>
			</div> */}
		</StyledContainer>
	);
};

const StyledContainer = styled.div<StyledProps>`
	position: fixed;
	width: 90%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	top: 0;
	left: 100px;
	right: 0;
	margin-top: 40px;
	padding: 10px;
	font-family: "Angel";
	z-index: -1000;

	.leftSpace {
		/* display: flex; */
		/* flex-direction: row; */
	}

	h1 {
		padding: 0 30px;
		margin: 0;
		font-size: 12em;
		color: #3f3f3f61;
		font-family: "Angel";
	}

	.erikKimseyH1 {
		/* transform: rotate(-22deg);
		margin-left: -10px;
		&::after {
			position: absolute;
			left: 100px;
			top: 10px;
			content: "ERIK KIMSEY";
			color: #ff00ff30;
		}
		&::before {
			position: absolute;
			left: 95px;
			top: 15px;
			content: "ERIK KIMSEY";
			color: #006eff36;
		} */
	}

	.feEngH1 {
		/* transform: rotate(-22deg);
		&::after {
			position: absolute;
			left: 100px;
			top: 10px;
			content: "FRONTEND ENGINEER";
			color: #ff00ff30;
		}
		&::before {
			position: absolute;
			left: 95px;
			top: 15px;
			content: "FRONTEND ENGINEER";
			color: #006eff36;
		} */
	}
	.diagonalLine {
		width: 50px;
		padding: 10px;
		transform: rotate(45deg);
	}

	.rightSpace {
		width: auto;
		display: flex;
		align-self: flex-end;
		flex-flow: row;
		.rightLine {
			padding: 0;
			margin: 0;
			width: 50px;
		}
	}

	@media (max-width: 1025px) {
		text-align: end;
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		width: 80%;
		left: 100px;
		h1 {
			margin: 0;
			margin-top: 0;
			top: 100px;
			left: 0;
			font-size: 8em;
		}
	}

	@media (max-width: 768px) {
		width: 100%;
		padding: 0;
		margin: 0;
		margin-top: 40px;
		left: 0;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;

		.leftSpace {
			width: 100%;
			.diagonalLine {
				display: none;
			}
		}
		h1 {
			text-align: end;
			margin: 0;
			margin-top: 0;
			top: 100px;
			left: 0;
			font-size: 4em;
		}
	}
	@media (max-width: 768px) {
		h1 {
			font-size: 3em;
		}
	}
`;

export default Banner;

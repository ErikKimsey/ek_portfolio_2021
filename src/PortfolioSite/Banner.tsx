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
	top: 0;
	left: 100px;
	right: 0;
	margin-top: 40px;
	font-family: "Angel";
	z-index: -1000;

	.leftSpace {
		padding: 10px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		z-index: -100000;
		/* display: flex; */
		/* flex-direction: row; */
	}

	h1 {
		padding: 0 30px;
		margin: 0;
		font-size: 12em;
		color: #3f3f3f61;
		/* font-family: "Angel"; */
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

	@media (min-width: 300px) {
		h1 {
			font-size: 4em;
			padding: 0;
			margin: 0;
			line-height: 1;
		}
	}
`;

export default Banner;

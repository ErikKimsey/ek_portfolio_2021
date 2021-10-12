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
			<h1 className="erikKimseyH1">ERIK KIMSEY</h1>
			<h1 className="feEngH1">FRONTEND ENGINEER</h1>
		</StyledContainer>
	);
};

const StyledContainer = styled.div<StyledProps>`
	position: relative;
	width: 80%;
	top: 0;
    display:flex;
    flex-direction:column;
    align-items:flex-end;
	/* margin-top: 40px; */margin-right:50px;
	font-family: "Angel";


	h1 {
		/* padding: 0 30px; */
		margin: 0;
		font-size: 4em;
		color: #3f3f3f61;
        line-height:1;
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
	}

	@media (max-width: 568px) {
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
`;

export default Banner;

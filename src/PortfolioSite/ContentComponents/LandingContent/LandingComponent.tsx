import { motion } from "framer-motion";
import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { Education, Work } from "..";
import init from "../../3DContent/3d";
import Banner from "../../Banner";

type Props = {};

type StyledProps = {
	containerHeight?: number;
	containerWidth?: number;
	isVisible?: boolean;
};

const LandingComponent: FC<Props> = (props) => {
	const {} = props;
	const [winHeight, setWinHeight] = useState(0);
	const [winWidth, setWinWidth] = useState(0);
	const [hasLoaded, setHasLoaded] = useState(false);

	const variants = {
		visible: { opacity: 1, scale: 1 },
		hidden: { opacity: 0, scale: 0.99 },
	};

	const handleResize = () => {
		setWinWidth(window.innerWidth);
		setWinHeight(window.innerHeight);
	};

	useEffect(() => {
		setWinHeight(window.innerHeight);
		setWinWidth(window.innerWidth);
		setHasLoaded(true);
		console.log(init);
		// init(window.innerWidth * 0.7, window.innerHeight * 0.8);

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<>
			<StyledContainer
				as={motion.div}
				isVisible={hasLoaded}
				containerHeight={winHeight}
				containerWidth={winWidth}
				initial="hidden"
				variants={variants}
				animate={hasLoaded ? "visible" : "hidden"}
				transition={{ duration: 0.5 }}
				id="landingComponent"
			>
				{/* {hasLoaded && <h1>.... d-_-b ....</h1>} */}
				{hasLoaded && <Banner />}
				<Work />
				<Education />
				<div
					style={{
						paddingBottom: "100px",
						background: "#f0f",
						width: "1px",
					}}
				></div>
			</StyledContainer>
		</>
	);
};

const StyledContainer = styled.div<StyledProps>`
	width: ${(props) => props.containerWidth * 0.8}px;
	height: ${(props) => props.containerHeight * 0.8}px;
	display: flex;
	flex-flow: column;
	align-items: center;
	padding: 15px;
	align-self: center;
	/* z-index: -1000; */
	h1 {
		/* position: absolute;
		align-self: center;
		top: ${(props) => props.containerHeight * 0.4}px; */
		color: #555;
	}

	@media (max-width: 568px) {
		width: 100%;
		padding: 5px;
		/* justify-content: center; */
	}
`;

export default LandingComponent;

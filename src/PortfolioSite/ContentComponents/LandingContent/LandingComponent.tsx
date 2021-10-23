import { motion } from "framer-motion";
import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { Education, Work } from "..";
import Banner from "../../Banner";
import TopComponent from "../TopComponent/TopComponent";

type Props = {};

type StyledProps = {
	containerHeight?: number;
	containerWidth?: number;
	isVisible?: boolean;
};

const LandingComponent: FC<Props> = (props) => {
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

	const setDimensions = (w, h) => {
		if (w !== undefined && h !== undefined) {
			setWinWidth(window.innerWidth);
			setWinHeight(window.innerHeight);
			console.log(window.innerHeight);
		}
	};

	useEffect(() => {
		setDimensions(window.innerWidth, window.innerHeight);
		setHasLoaded(true);
		// init(window.innerWidth * 0.7, window.innerHeight * 0.8);
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<>
			{winHeight > 0 && (
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
					<Banner />
					{/* {hasLoaded && <h1>.... d-_-b ....</h1>} */}
					<TopComponent />
					<Work />
					<Education />
					<div
						style={{
							paddingBottom: "100px",
							background: "#000",
							width: "1px",
						}}
					></div>
				</StyledContainer>
			)}
		</>
	);
};

const StyledContainer = styled.div<StyledProps>`
	box-sizing: content-box;
	max-width: 1400px;
	width: ${(props) => props.containerWidth * 0.8}px;
	display: flex;
	flex-flow: column;
	align-items: center;
	padding: 15px;
	align-self: center;
	/* z-index: -1000; */
	overflow-y: scroll;
	h1 {
		/* position: absolute;
		align-self: center;
		top: ${(props) => props.containerHeight * 0.4}px; */
		color: #555;
	}

	@media (max-width: 568px) {
		width: 100%;
		padding: 5px 0 5px 0;
	}
`;

export default LandingComponent;

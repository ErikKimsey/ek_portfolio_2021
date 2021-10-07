import { motion, AnimatePresence } from "framer-motion";
import React, { FC, useState, useEffect } from "react";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import { WORK_DATA } from "./work_data";
import Education from "../Education/Education";
import Contact from "../Contact/Contact";

type Props = {};

type WorkComponentProps = {
	data?: {};
	index?: number;
};

type StyledProps = {
	containerHeight?: number;
	containerWidth?: number;
};

const WorkComponent: FC<WorkComponentProps> = (props) => {
	const { positionTitle, employer, URL } = props.props;

	return (
		<div className="workComponentContainer">
			<h3 className="workTitle">{positionTitle}</h3>
			<h4 className="employerName">{employer}</h4>
			{URL ? (
				<a
					href={URL}
					target="_blank"
					rel="noreferrer"
					className="employerURL"
				>
					{URL}
				</a>
			) : (
				<div></div>
			)}
		</div>
	);
};

const Work: FC<Props> = (props) => {
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
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<StyledContainer
			containerHeight={winHeight}
			containerWidth={winWidth}
			as={motion.div}
			isVisible={hasLoaded}
			initial="hidden"
			variants={variants}
			animate={hasLoaded ? "visible" : "hidden"}
			transition={{ duration: 0.5 }}
			id="workContainer"
		>
			<AnimatePresence exitBeforeEnter>
				<div className="headerContainer">
					<motion.div
						key="leftLine"
						className="leftLine"
						animate={{ x: [200, 0] }}
						exit={{ x: [0, 200] }}
						transition={{ ease: "easeOut", duration: 0.7 }}
					></motion.div>
					<motion.h1
						key="h1"
						animate={{ x: [-200, 0] }}
						exit={{ x: [0, -200] }}
						transition={{ ease: "easeOut", duration: 0.5 }}
					>
						work.
					</motion.h1>
				</div>
			</AnimatePresence>
			<p>
				Leverage agile frameworks to provide a robust synopsis for high
				level overviews. Iterative approaches to corporate strategy
				foster collaborative thinking to further the overall value
				proposition. Organically grow the holistic world view of
				disruptive innovation via workplace diversity and empowerment.
			</p>

			<div className="workContainer">
				{WORK_DATA.map((e, i) => {
					return <WorkComponent props={e} index={i} />;
				})}
			</div>
			<div style={{ height: "100px" }}></div>
			<Education />
			<div style={{ height: "100px" }}></div>
			<Contact />
		</StyledContainer>
	);
};

const StyledContainer = styled.div<StyledProps>`
	width: ${(props) => props.containerWidth * 0.7}px;
	height: ${(props) => props.containerHeight * 0.8}px;
	.rotatedContainer {
		/* transform: rotate(90deg); */
	}

	.headerContainer {
		position: sticky;
		top: 50px;
		display: flex;
		flex-direction: row;
		width: auto;
		border-radius: 0 10px 0 0;
		background-color: rgba(0, 0, 0, 0.3);
	}

	.leftLine {
		width: 1px;
		border: solid 20px #f0f;
	}
	h1 {
		padding: 5px;
		font-family: "Angel";
	}

	.workContainer {
		max-width: 500px;
		width: 100%;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		/* align-items: center; */
		gap: 10px;
	}

	.workComponentContainer {
		width: 100%;
		height: 100px;
		margin: 10px;
		padding-left: 10px;
		display: flex;
		flex-direction: column;
		/* border-left: solid 3px #333; */
		/* padding: 30px; */
		transition: all 0.5s;
		&:hover {
			transform: scale(1.05);
		}
	}

	.workTitle {
		padding: 0;
		padding-left: 10px;
		margin: 0;
		color: #f0f;
		font-family: "ComfortaaBold";
		border-left: solid 2px #ccc;
	}

	.employerName {
		margin: 0;
		margin: 10px;
		padding: 0;
		padding-left: 20px;
		padding: 0;
		font-family: "Comfortaa";
		color: #fff;
	}

	.employerURL {
		text-decoration: none;
		padding: 0;
		padding-left: 20px;
		margin: 0;
		color: #ddff81;
	}
	@media (max-width: 768px) {
		/* height: 100px; */
		display: flex;
		flex-direction: column;
	}
	@media (max-width: 568px) {
		.workTitle {
			font-size: 1em;
		}

		.employerName {
			margin: 0;
			margin-left: 10px;
			font-size: 0.8em;
		}
		.employerURL {
			font-size: 0.8em;
		}
		height: auto;
		display: flex;
		flex-direction: column;
		/* height: 100px; */
	}
`;

export default Work;

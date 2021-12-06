/* eslint-disable @typescript-eslint/no-unused-vars */
import { motion, AnimatePresence } from "framer-motion";
import React, { FC, useState, useEffect } from "react";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import { WORK_DATA } from "./work_data";
import UpChevron from "../../assets/images/Icons/chevron-up.svg";
import DownChevron from "../../assets/images/Icons/chevron-down.svg";

type Props = {};

type WorkComponentProps = {
	data?: WorkComponentPropsData;
	index?: number;
};

type WorkComponentPropsData = {
	positionTitle?: string;
	employer?: string;
	URL?: string;
	techStack?: string;
};

type StyledProps = {
	containerHeight?: number;
	containerWidth?: number;
	listActive?: boolean;
	numOfItems?: number;
	displayButton?: string;
	isVisible?: boolean;
};

const WorkComponent: FC<WorkComponentProps> = (props) => {
	const { positionTitle, employer, URL, techStack } = props.data;

	return (
		<div
			className="workComponentContainer"
			style={{ paddingTop: "5px", paddingBottom: "10px" }}
		>
			<h4 className="workTitle">{positionTitle}</h4>
			{/* <h4 className="employerName">{employer}</h4> */}
			{URL ? (
				<a
					href={URL}
					target="_blank"
					rel="noreferrer"
					className="employerURL"
				>
					<h5 className="employerName">{employer}</h5>
				</a>
			) : (
				<h5 className="employerName">{employer}</h5>
			)}
			<h5 className="techStack">{techStack}</h5>
		</div>
	);
};

const Work: FC<Props> = (props) => {
	const [winHeight, setWinHeight] = useState(0);
	const [winWidth, setWinWidth] = useState(0);
	const [hasLoaded, setHasLoaded] = useState(true);
	const [listActive, setListActive] = useState(true);
	const { inView, ref } = useInView({ threshold: 0.1 });
	const [numOfItems, setNumOfItems] = useState(WORK_DATA.length);

	const customStyles = {
		content: {
			height: "100%",
			width: "100%",
			top: "50%",
			left: "50%",
			right: "auto",
			bottom: "auto",
			marginRight: "-50%",
			transform: "translate(-50%, -50%)",
			overflow: "scroll",
			backgroundColor: "#000",
		},
	};

	const variants = {
		visible: { opacity: 1, scale: 1 },
		hidden: { opacity: 0, scale: 0.99 },
	};

	const handleResize = () => {
		setWinWidth(window.innerWidth);
		setWinHeight(window.innerHeight);
	};

	const handleListDisplay = () => {
		setListActive(!listActive);
	};

	const collapseList = () => {
		setListActive(false);
	};

	useEffect(() => {
		setWinHeight(window.innerHeight);
		setWinWidth(window.innerWidth);
		setHasLoaded(true);
		window.addEventListener("resize", handleResize);
		console.log(numOfItems);

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
			ref={ref}
			listActive={listActive}
			numOfItems={numOfItems}
		>
			<div className="headerAndButton">
				<div className="buttonDisplay" onClick={handleListDisplay}>
					{/* {listActive === true ? (
						<img
							src={UpChevron}
							className="chevron"
							alt="hide list"
						/>
					) : (
						<img
							src={DownChevron}
							className="chevron"
							alt="show list"
						/>
					)} */}
					{inView && (
						<div className="headerContainer">
							<motion.h1
								className="workH1"
								key="h1"
								animate={{ x: [-200, 0] }}
								transition={{ ease: "easeOut", duration: 0.5 }}
							>
								experience.
							</motion.h1>
						</div>
					)}
				</div>
			</div>
			<motion.div
				className="workContainer"
				onClick={collapseList}
				animate={{ height: ["0%", "100%"] }}
				exit={{ x: [0, 200] }}
				transition={{ ease: "easeOut", duration: 0.7 }}
			>
				{WORK_DATA &&
					WORK_DATA.map((e, i) => {
						return <WorkComponent data={e} index={i} key={i} />;
					})}
			</motion.div>
		</StyledContainer>
	);
};

const StyledContainer = styled.div<StyledProps>`
	box-sizing: content-box;
	min-height: 150px;
	display: flex;
	flex-direction: column;
	padding-top: 10px;
	align-self: flex-start;
	padding: 0 12vw;
	/* background-color: rgb(36, 36, 36); */
	/* background: linear-gradient(0deg, rgb(54, 54, 54) 0%, rgb(27, 27, 27) 100%); */

	.headerAndButton {
		display: flex;
		flex-flow: row wrap;
		justify-content: flex-start;
	}

	.headerContainer {
		box-sizing: content-box;
		width: auto;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		padding: 10px;
	}

	.leftLine {
		height: 10px;
		width: 10px;
		border-radius: 10px;
		align-self: center;
	}

	h1,
	h3,
	h4,
	h5,
	h6 {
		padding: 5px;
		font-family: "Angel";
	}

	h1 {
		padding: 3px;
		font-family: "Angel";
		color: #555;
		color: #fefff8;
		line-height: 0;
		&.workH1 {
		}
	}

	.buttonDisplay {
		width: 100%;
		align-self: flex-start;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		cursor: pointer;
		/* align-items: flex-end; */
	}
	img {
		&.chevron {
			height: 20px;
			padding-left: 10px;
		}
	}

	.workContainer {
		box-sizing: content-box;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		max-height: ${(props) =>
			props.listActive === true ? props.numOfItems * 200 + "px" : "0px"};
		height: 100%;
		overflow-y: hidden;
		transition: all 0.5s ease-in-out;
	}

	.workComponentContainer {
		box-sizing: content-box;
		background-color: rgba(0, 0, 0, 0);
		height: 100px;
		width: 300px;
		margin: 15px 0px;
		padding: 10px;
		border-radius: 10px;
		display: flex;
		flex-direction: column;
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

	.employerURL {
		text-decoration: none;
		padding: 0;
		font-family: "Comfortaa";
	}

	.employerName {
		margin: 0;
		padding-left: 10px;
		font-family: "Comfortaa";
		color: #fff;
	}

	.techStack {
		margin: 0;
		padding-left: 20px;
		font-family: "Comfortaa";
		color: #ddff81;
	}

	@media (max-width: 1400px) {
		padding: 0 50px;
	}

	@media (max-width: 768px) {
		padding: 0 50px;
	}

	@media (max-width: 568px) {
		box-sizing: content-box;
		width: 100%;
		display: flex;
		flex-direction: column;
		padding: 0;

		h1 {
			font-size: 1.6em;
		}

		.headerContainer {
			padding: 10px;
			width: 100%;
		}

		p {
			padding: 10px;
		}

		.workContainer {
			max-height: ${(props) =>
				props.listActive === true
					? props.numOfItems * 200 + "px"
					: "0px"};
			height: 100%;
		}

		.workComponentContainer {
			box-sizing: content-box;
			width: 100%;
			display: flex;
			flex-flow: column wrap;
			margin: 0;
			padding: 10px;
		}
	}
`;

export default Work;

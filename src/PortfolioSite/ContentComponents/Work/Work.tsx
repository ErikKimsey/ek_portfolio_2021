/* eslint-disable @typescript-eslint/no-unused-vars */
import { motion, AnimatePresence } from "framer-motion";
import React, { FC, useState, useEffect } from "react";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import { WORK_DATA } from "./work_data";
import UpChevron from "../../../assets/images/Icons/chevron-up.svg";
import DownChevron from "../../../assets/images/Icons/chevron-down.svg";
import WorkIcon from "../../../assets/images/Icons/work.png";

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
	const [hasLoaded, setHasLoaded] = useState(false);
	const [listActive, setListActive] = useState(false);
	const { inView, ref } = useInView({ threshold: 0.2 });
	const [numOfItems, setNumOfItems] = useState(WORK_DATA.length);
	const [modalIsOpen, setIsOpen] = useState(false);

	const customStyles = {
		content: {
			height: "99%",
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

	const closeModal = () => {
		setListActive(false);
		setIsOpen(false);
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
			ref={ref}
			listActive={listActive}
			numOfItems={numOfItems}
			displayButton={WorkIcon}
		>
			<div
				className="headerAndButton"
				style={{
					display: "flex",
					flexFlow: "row",
					justifyContent: "center",
				}}
			>
				<AnimatePresence exitBeforeEnter>
					{inView && (
						<div className="headerContainer">
							<motion.div
								key="leftLine"
								className="leftLine"
								animate={{ x: [200, 0] }}
								transition={{ ease: "easeOut", duration: 0.7 }}
							></motion.div>
							<motion.h1
								className="workH1"
								key="h1"
								animate={{ x: [-200, 0] }}
								transition={{ ease: "easeOut", duration: 0.5 }}
								style={{ fontSize: "3em" }}
							>
								work.
							</motion.h1>
						</div>
					)}
				</AnimatePresence>

				<div className="buttonDisplay" onClick={handleListDisplay}>
					{listActive === true ? (
						<img src={UpChevron} alt="hide list" />
					) : (
						<img src={DownChevron} alt="show list" />
					)}
				</div>
			</div>
			<motion.div
				className="workContainer"
				onClick={closeModal}
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
	width: ${(props) => props.containerWidth * 0.7}px;
	/* height: ${(props) => (props.listActive === true ? `100%` : `100vh`)}; */
	display: flex;
	flex-direction: column;
	padding: 10px;

	.headerContainer {
		box-sizing: content-box;
		width: auto;
		top: 50px;
		display: flex;
		flex-direction: row;
		background-color: rgba(0, 0, 0, 0.3);
	}

	.leftLine {
		height: 10px;
		width: 10px;
		background: #f0f;
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
		padding: 5px;
		font-family: "Angel";
		color: #555;
		line-height: 0;
	}

	.components {
		box-sizing: content-box;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		height: 100%;
	}

	.buttonDisplay {
		align-self: flex-start;
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		height: 100%;
		cursor: pointer;
		align-items: flex-end;

		img {
			width: 60px;
			height: 60px;
		}
	}

	.workContainer {
		box-sizing: content-box;
		/* width: 100%; */
		max-height: ${(props) =>
			props.listActive === true ? props.numOfItems * 200 + "px" : "0px"};
		display: flex;
		flex-direction: column;
		flex-direction: row;
		/* flex-wrap: nowrap; */
		flex-wrap: wrap;
		/* padding-top: 30px; */
		overflow-y: scroll;
		background-color: #000;
		height: 95vh;
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
		/* padding-left: 30px; */
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

	@media (max-width: 768px) {
		/* display: flex;
		flex-direction: column;
		.workComponentContainer {
            height: 60px;
		} */
	}

	@media (max-width: 568px) {
		box-sizing: content-box;
		width: 100%;
		display: flex;
		flex-direction: column;
		/* align-items: center; */
		padding: 10px;

		.headerContainer {
			padding: 10px;
		}

		p {
			padding: 10px;
		}

		.workContainer {
			box-sizing: content-box;
			/* width: 100%; */
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

		/* .workTitle {
			font-size: 1em;
		}

		.employerName {
			margin: 0;
			margin-left: 10px;
		}
		.employerURL {
		}
		height: auto;
		display: flex;
		flex-direction: column;
	} */
	}
`;

export default Work;

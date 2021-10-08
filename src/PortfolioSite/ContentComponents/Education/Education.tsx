import { motion } from "framer-motion";
import React, { FC, useState, useEffect } from "react";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import EDUCATION_DATA from "./education_data";

type Props = {};

type StyledProps = {
	containerHeight?: number;
	containerWidth?: number;
	listActive?: boolean;
	numOfItems?: number;
};

type EducationComponentProps = {
	school?: string;
	areaOfStudy?: string;
	date?: string;
	index?: number;
};

const EducationComponent: FC<EducationComponentProps> = (props) => {
	const { school, areaOfStudy, date } = props.data;

	return (
		<div className="educationComponentContainer">
			<h4 className="areaOfStudy">{areaOfStudy}</h4>
			<h5 className="schoolName">{school}</h5>
			{date ? <div className="dateAttended">{date}</div> : <div></div>}
		</div>
	);
};

const Education: FC<Props> = (props) => {
	const {} = props;
	const [winHeight, setWinHeight] = useState(0);
	const [winWidth, setWinWidth] = useState(0);
	const [hasLoaded, setHasLoaded] = useState(false);
	const { inView, entry, ref } = useInView({ threshold: 0.1 });
	const [listActive, setListActive] = useState(false);
	const [numOfItems, setNumOfItems] = useState(EDUCATION_DATA.length);

	const variants = {
		visible: { opacity: 1, scale: 1 },
		hidden: {
			opacity: 0,
			scale: 0.99,
		},
	};

	const handleResize = () => {
		setWinWidth(window.innerWidth);
		setWinHeight(window.innerHeight);
	};

	const handleListDisplay = () => {
		setListActive(!listActive);
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
			as={motion.div}
			isVisible={hasLoaded}
			initial="hidden"
			variants={variants}
			animate={hasLoaded ? "visible" : "hidden"}
			transition={{ duration: 0.5 }}
			id="workContainer"
			containerHeight={winHeight}
			containerWidth={winWidth}
			listActive={listActive}
			numOfItems={numOfItems}
			ref={ref}
		>
			{inView && (
				<div className="headerContainer">
					<motion.div
						className="leftLine"
						animate={{ x: [200, 0] }}
						transition={{ ease: "easeOut", duration: 0.7 }}
					></motion.div>
					<motion.h1
						animate={{ x: [-200, 0] }}
						transition={{ ease: "easeOut", duration: 0.5 }}
					>
						{`education.`}
					</motion.h1>
				</div>
			)}
			<p>
				Leverage agile frameworks to provide a robust synopsis for high
				level overviews. Iterative approaches to corporate strategy
				foster collaborative thinking to further the overall value
				proposition. Organically grow the holistic world view of
				disruptive innovation via workplace diversity and empowerment.
			</p>
			<div className="buttonDisplay" onClick={handleListDisplay}>
				Expand
			</div>
			<div className="educationContainer">
				{EDUCATION_DATA.map((e, i) => {
					return <EducationComponent data={e} index={i} />;
				})}
				<div className="buttonDisplay" onClick={handleListDisplay}>
					Expand
				</div>
			</div>
		</StyledContainer>
	);
};

const StyledContainer = styled.div<StyledProps>`
	width: ${(props) => props.containerWidth * 0.7}px;
	height: ${(props) => props.containerHeight * 0.8}px;
	padding: 15px;
	display: flex;
	flex-direction: column;
	justify-content: center;

	.headerContainer {
		width: auto;
		top: 50px;
		display: flex;
		flex-direction: row;
		background-color: rgba(0, 0, 0, 0.3);
	}
	.leftLine {
		width: 1px;
		border: solid 20px #f0f;
		border-radius: 10px;
	}
	h1,
	h3,
	h4,
	h5,
	h6 {
		padding: 5px;
	}

	.buttonDisplay {
		width: 200px;
		height: 100px;
		background-color: #ddff81;
	}

	.educationContainer {
		max-width: 500px;
		width: 100%;
		max-height: ${(props) =>
			props.listActive === true ? props.numOfItems * 200 + "px" : "0px"};
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 10px;
		padding-top: 30px;
		overflow-y: hidden;
		transition: all 0.3s ease-in-out;
	}

	.educationComponentContainer {
		width: 100%;
		height: 100px;
		margin: 10px;
		margin-left: 10px;
		padding-left: 100px;
	}

	.areaOfStudy {
		font-family: "ComfortaaBold";
		padding: 0;
		margin: 0;
		color: #f0f;
		padding-left: 20px;
		border-left: solid 2px #ccc;
	}
	.schoolName {
		padding: 0;
		margin: 10px;
		padding-left: 20px;
		color: #ddff81;
		font-family: "Comfortaa";
	}

	.dateAttended {
	}
`;

export default Education;

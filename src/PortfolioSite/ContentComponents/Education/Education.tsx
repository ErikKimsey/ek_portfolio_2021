import { motion } from "framer-motion";
import { FC, useState, useEffect } from "react";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import EDUCATION_DATA from "./education_data";
import UpChevron from "../../../assets/images/Icons/chevron-up.svg";
import DownChevron from "../../../assets/images/Icons/chevron-down.svg";

type Props = {};

type StyledProps = {
	containerHeight?: number;
	containerWidth?: number;
	listActive?: boolean;
	numOfItems?: number;
	isVisible?: boolean;
};

type Data = {
	school?: string;
	areaOfStudy?: string;
	date?: string;
	index?: number;
};
type EducationComponentProps = {
	data?: Data;
};

const EducationComponent: FC<EducationComponentProps> = (props) => {
	const { school, areaOfStudy, date, index } = props.data;

	return (
		<div className="educationComponentContainer" key={index}>
			<h4 className="areaOfStudy">{areaOfStudy}</h4>
			<h5 className="schoolName">{school}</h5>
			{date ? <div className="dateAttended">{date}</div> : <div></div>}
		</div>
	);
};

const Education: FC<Props> = (props) => {
	const [winHeight, setWinHeight] = useState(0);
	const [winWidth, setWinWidth] = useState(0);
	const [hasLoaded, setHasLoaded] = useState(false);
	const { inView, ref } = useInView({ threshold: 0.1 });
	const [listActive, setListActive] = useState(false);

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
		console.log(window.innerHeight);

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
			ref={ref}
		>
			<div className="headerAndButton">
				{inView && (
					<div className="headerContainer">
						<motion.div
							className="leftLine"
							animate={{ x: [-200, 0] }}
							transition={{ ease: "easeOut", duration: 0.7 }}
						></motion.div>
						<motion.h1
							animate={{ x: [200, 0] }}
							transition={{ ease: "easeOut", duration: 0.5 }}
							style={{ fontSize: "2em" }}
						>
							education.
						</motion.h1>
					</div>
				)}
				<div className="buttonDisplay" onClick={handleListDisplay}>
					{listActive === true ? (
						<img src={UpChevron} alt="hide list" />
					) : (
						<img src={DownChevron} alt="show list" />
					)}
				</div>
			</div>
			<div className="educationContainer">
				{EDUCATION_DATA.map((e, i) => {
					return <EducationComponent data={e} key={i} />;
				})}
			</div>
		</StyledContainer>
	);
};

const StyledContainer = styled.div<StyledProps>`
	box-sizing: content-box;
	height: 100vh;
	width: ${(props) => props.containerWidth * 0.7}px;
	display: flex;
	flex-direction: column;
	padding: 10px;

	.headerAndButton {
		display: flex;
		flex-flow: row wrap;
		justify-content: flex-start;
		padding-left: 10px;
	}

	.headerContainer {
		width: auto;
		display: flex;
		flex-direction: row;
		background-color: rgba(0, 0, 0, 0.3);
		/* padding: 10px; */
		margin: 0;
		/* height: auto; */
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
	}

	h1 {
		padding: 5px;
		font-family: "Angel";
		color: #555;
		line-height: 0;
	}

	.buttonDisplay {
		align-self: flex-start;
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		cursor: pointer;
		align-items: flex-end;
		padding: 15px;

		img {
			width: 40px;
			/* height: 60px;pxx; */
		}
	}

	.educationContainer {
		box-sizing: content-box;
		padding: 10px;
		width: 100%;
		max-height: ${(props) =>
			props.listActive === true ? props.numOfItems * 200 + "px" : "0px"};
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		padding-top: 10px;
		overflow-y: hidden;
		transition: all 0.5s ease-in-out;
	}

	.educationComponentContainer {
		background-color: rgba(0, 0, 0, 0);
		height: 100px;
		width: 300px;
		box-sizing: content-box;
		margin: 15px 0px;
		display: flex;
		flex-direction: column;
		padding-left: 30px;
		transition: all 0.5s;
		&:hover {
			transform: scale(1.05);
		}
	}

	.areaOfStudy {
		padding: 0;
		padding-left: 10px;
		margin: 0;
		color: #f0f;
		font-family: "ComfortaaBold";
		border-left: solid 2px #ccc;
	}
	.schoolName {
		margin: 0;
		padding-left: 10px;
		font-family: "Comfortaa";
		color: #fff;
	}

	.dateAttended {
	}

	@media (max-width: 568px) {
		box-sizing: content-box;
		width: 100%;
		display: flex;
		flex-direction: column;
		padding: 10px;
		padding-bottom: 0;

		.headerAndButton {
		}

		.headerContainer {
			padding: 10px;
		}
		p {
			padding: 10px;
			padding-top: 0;
		}
	}
`;

export default Education;

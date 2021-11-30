import { motion } from "framer-motion";
import { FC, useState, useEffect } from "react";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import EDUCATION_DATA from "./education_data";
import UpChevron from "../../assets/images/Icons/chevron-up.svg";
import DownChevron from "../../assets/images/Icons/chevron-down.svg";

type Props = {};

type StyledProps = {
	containerHeight?: number;
	containerWidth?: number;
	listActive?: boolean;
	numOfItems?: number;
	isVisible?: boolean;
	skillsVisible?: boolean;
};

type Data = {
	school?: string;
	areaOfStudy?: string;
	date?: string;
	index?: number;
	skills?: string[];
	toggleSkills?: () => void;
	skillsVisible?: boolean;
};

type EducationComponentProps = {
	data?: Data;
};

const EducationComponent: FC<EducationComponentProps> = (props) => {
	const {
		school,
		areaOfStudy,
		date,
		index,
		skills,
		toggleSkills,
		skillsVisible,
	} = props.data;

	return (
		<div className="educationComponentContainer" key={index}>
			<h4 className="areaOfStudy">{areaOfStudy}</h4>
			<h5 className="schoolName">{school}</h5>
			{date ? <div className="dateAttended">{date}</div> : <div></div>}
			<div
				className="skillsContainer"
				onClick={() => {
					toggleSkills();
				}}
			>
				{skills &&
					skills.map((e) => {
						return <div className="skill">{e}</div>;
					})}
			</div>
		</div>
	);
};

const Education: FC<Props> = (props) => {
	const [winHeight, setWinHeight] = useState(0);
	const [winWidth, setWinWidth] = useState(0);
	const [hasLoaded, setHasLoaded] = useState(true);
	const { inView, ref } = useInView({ threshold: 0.1 });
	const [listActive, setListActive] = useState(true);
	const [skillsVisible, setSkillsVisible] = useState(false);

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

	const toggleSkills = () => {
		setSkillsVisible(!skillsVisible);
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
			ref={ref}
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
								animate={{ x: [200, 0] }}
								transition={{ ease: "easeOut", duration: 0.5 }}
							>
								education.
							</motion.h1>
						</div>
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
	min-height: 150px;
	display: flex;
	flex-direction: column;
	color: #fefff8;
	padding: 0 12vw;
	/* background-color: rgb(54, 54, 54); */

	.headerAndButton {
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
	}

	.headerContainer {
		/*  */
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
		color: #fefff8;
		line-height: 0;
	}

	.buttonDisplay {
		width: 100%;
		display: flex;
		flex-direction: row;
		cursor: pointer;
		align-items: flex-end;
		padding-right: 15px;
		color: #fefff8;

		img {
			&.chevron {
				height: 20px;
				padding-left: 10px;
			}
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
		overflow-y: scroll;
		transition: all 0.5s ease-in-out;
	}

	.educationComponentContainer {
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

	.skillsContainer {
		display: none;
		height: ${(props) => (props.skillsVisible ? "auto" : "50px")};
		position: relative;
		border: solid 1px #333;
		background-color: #333;
		padding: 10px;
		z-index: 1000;
	}

	@media (max-width: 1400px) {
		padding: 0 50px;
	}

	@media (max-width: 568px) {
		box-sizing: content-box;
		width: 100%;
		display: flex;
		flex-direction: column;
		margin: 0;
		padding: 0;
		h1 {
			font-size: 1.6em;
		}

		.buttonDisplay {
		}

		.headerAndButton {
		}

		.headerContainer {
			justify-content: flex-start;
			padding: 10px;
		}
		p {
			padding: 10px;
			padding-top: 0;
		}

		.educationComponentContainer {
			padding: 0;
		}
	}
`;

export default Education;

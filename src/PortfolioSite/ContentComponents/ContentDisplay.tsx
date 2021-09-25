import React, { FC, useState, useEffect } from "react";
import { Route, Switch, useLocation, useHistory } from "react-router-dom";
import styled from "styled-components";
import { Work, Resume, Education, LandingComponent } from "./index";

type Props = {};

type StyledProps = {};

const ContentBreakElement = () => {
	return <ContentBreak></ContentBreak>;
};

const PATHS = [
	"/portfolio",
	"/portfolio/work",
	"/portfolio/resume",
	"/portfolio/education",
];

const ContentDisplay: FC<Props> = (props) => {
	const {} = props;
	const location = useLocation();
	const history = useHistory();
	let [content, setContent] = useState([]);
	let [pathsIndex, setPathsIndex] = useState(0);
	let [lastScrollPos, setLastScrollPos] = useState("");

	useEffect(() => {
		setLastScrollPos(PATHS[pathsIndex]);
		if (
			Work !== undefined &&
			Resume !== undefined &&
			Education !== undefined
		) {
			const _cont = [Work, Resume, Education];
			setContent(_cont);
		}

		window.addEventListener("wheel", handleScroll);

		// return window.removeEventListener("wheel", handleScroll);
	}, []);

	const handleScroll = (e) => {
		console.log(e.deltaY);
		console.log();
		if (e.deltaY <= -10) {
			console.log("SCROLLING UP");
			if (pathsIndex > 0) {
				setPathsIndex((pathsIndex -= 1));
				setLastScrollPos(PATHS[pathsIndex]);
				history.push(lastScrollPos);
			}
		}
		if (e.deltaY >= 10) {
			console.log("SCROLLING DOWN");
			if (pathsIndex > 0) {
				setPathsIndex((pathsIndex += 1));
				setLastScrollPos(PATHS[pathsIndex]);
				history.push(lastScrollPos);
			}
		}
		// if(e)
	};
	/**
     * TODO: * make Work.tsx component height/width 
                logic global/util for all content components.
     */

	return (
		<StyledContainer>
			{content.length > 0 && (
				<div className="contentContainer">
					{/* <Switch> */}
					{/* <LandingComponent /> */}
					{/* <ContentBreakElement /> */}
					<Route exact path="/portfolio">
						<LandingComponent />
					</Route>
					<Route path="/portfolio/work">
						<Work />
					</Route>
					<Route path="/portfolio/resume">
						<Resume />
					</Route>
					<Route path="/portfolio/education">
						<Education />
					</Route>
					{/* <LandingComponent />
					<ContentBreakElement />
					<Work />
					<ContentBreakElement />
					<Resume />
					<ContentBreakElement />
					<Education /> */}
					{/* </Switch> */}
				</div>
			)}
		</StyledContainer>
	);
};

const StyledContainer = styled.div<StyledProps>`
	position: relative;
	top: 14vh;
	height: 100%;
	display: flex;
	flex-flow: column wrap;
	justify-content: flex-start;
	align-items: flex-start;

	.contentContainer {
		/* width: 80%; */
		/* padding-left: 200px; */
	}

	@media (max-width: 700px) {
		top: 100px;
		height: 100vh;
		width: 100%;
		.contentContainer {
			padding-left: 50px;
		}
	}
`;

const ContentBreak = styled.div`
	height: 300px;
	width: 100%;
	border-top: solid 1px #333;
`;

export default ContentDisplay;

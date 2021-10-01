import { AnimatePresence, motion } from "framer-motion";
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
	let [pathsIndex, setPathsIndex] = useState();
	let [lastScrollPos, setLastScrollPos] = useState(PATHS[0]);
	let dY = 0;

	useEffect(() => {
		setPathsIndex(0);
		setLastScrollPos(PATHS[pathsIndex]);

		if (
			Work !== undefined &&
			Resume !== undefined &&
			Education !== undefined
		) {
			const _cont = [Work, Resume, Education];
			setContent(_cont);
		}
	}, []);

	return (
		<StyledContainer>
			{content.length > 0 && (
				<motion.div className="contentContainer">
					<Switch>
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
					</Switch>
				</motion.div>
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
		/* height: 100%; */
		/* width: 80%; */
		/* padding-left: 200px; */
	}

	@media (max-width: 700px) {
		top: 100px;
		height: 100%;
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

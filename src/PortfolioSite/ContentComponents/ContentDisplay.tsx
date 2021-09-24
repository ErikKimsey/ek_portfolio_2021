import React, { FC, useState, useEffect } from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";
import { Work, Resume, Education, LandingComponent } from "./index";

type Props = {};

type StyledProps = {};

const ContentBreakElement = () => {
	return <ContentBreak></ContentBreak>;
};

const ContentDisplay: FC<Props> = (props) => {
	const {} = props;

	const [content, setContent] = useState([]);

	useEffect(() => {
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
				<div className="contentContainer">
					<LandingComponent />
					<ContentBreakElement />
					{/* <Route path="/portfolio/work/"> */}
					<Work />
					{/* </Route> */}
					<ContentBreakElement />
					{/* <Route path="/portfolio/resume/"> */}
					<Resume />
					{/* </Route> */}
					<ContentBreakElement />
					<Education />
				</div>
			)}
		</StyledContainer>
	);
};

const StyledContainer = styled.div<StyledProps>`
	position: relative;
	top: 14vh;
	/* height: 100%; */
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

import React, { FC } from "react";
import styled from "styled-components";
import ProjectElement from "../Projects/ProjectElement";
import ProjectElementSlide from "../Projects/ProjectElementSlide";
import Banner from "../Banner/Banner";
import DropDown from "../DropDown/DropDown";
import { BreakPoint } from "../styles/breakpoints";
import { PROJECTS } from "../_data/Projects";
import ProjectElementMenuItem from "../Projects/ProjectElementMenuItem";

interface LandingProps {
	index?: number;
	data?: {
		name: string | undefined;
		description: string | undefined;
		image: string | undefined;
	};
}

type StyledProps = {};

const ForLOOOP = () => {
	return PROJECTS.map((e: any, i: number) => {
		return <ProjectElementMenuItem index={i} data={e} />;
		// return <ProjectElementSlide index={i} data={e} />;
		// return <ProjectElement index={i} data={e} />;
	});
};

const PlaygroundLanding: FC<LandingProps> = (props) => {
	const { data } = props;
	console.log(data);

	const onDragEnd = () => {};
	const onDragUpdate = () => {};
	const onDrag = () => {};

	return (
		<StyledContainer>
			<Banner />
			<div className="slidesContainer">{ForLOOOP()}</div>
		</StyledContainer>
	);
};

const StyledContainer = styled.div<StyledProps>`
	/* width: 100vw; */
	padding: 0;
	display: flex;
	flex-flow: column wrap;
	justify-content: center;
	align-items: center;
	/* align-content: space-between;
	align-items: space-between; */
	.slidesContainer {
		display: flex;
		flex-flow: row wrap;
		align-items: center;
		justify-content: space-between;
		width: 70%;
		/* height: 60vh;
		/* background-color: #333; */
	}
	@media (${BreakPoint.md}) {
	}
`;

export default PlaygroundLanding;

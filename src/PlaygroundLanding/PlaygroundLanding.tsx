import React, { FC } from "react";
import styled from "styled-components";
import ProjectElement from "../Projects/ProjectElement";
import ProjectElementSlide from "../Projects/ProjectElementSlide";
import Banner from "../Banner/Banner";
import DropDown from "../DropDown/DropDown";
import { BreakPoint } from "../styles/breakpoints";
import { PROJECTS } from "../_data/Projects";

interface LandingProps {
	index?: number;
	data?: {
		name: string | undefined;
		description: string | undefined;
		image: string | undefined;
	};
}

type StyledProps = {};

function ForLOOOP() {
	return PROJECTS.map((e, i) => {
		return <ProjectElementSlide index={i} data={e} />;
		// return <ProjectElement index={i} data={e} />;
	});
}

const PlaygroundLanding: FC<LandingProps> = (props) => {
	const { data } = props;
	console.log(data);

	return (
		<StyledContainer>
			<DropDown />
			<Banner />
			<div className="slidesContainer">{ForLOOOP()}</div>
		</StyledContainer>
	);
};

const StyledContainer = styled.div<StyledProps>`
	width: 100%;
	padding: 0;
	display: flex;
	flex-flow: column wrap;
	justify-content: center;
	align-items: center;
	.slidesContainer {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		height: 60vh;
		width: 100vw;
		/* background-color: #333; */
	}
	@media (${BreakPoint.md}) {
	}
`;

export default PlaygroundLanding;

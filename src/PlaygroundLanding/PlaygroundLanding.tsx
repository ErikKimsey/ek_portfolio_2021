import React, { FC } from "react";
import styled from "styled-components";
import ProjectElement from "../Projects/ProjectElement";
import Banner from "../Banner/Banner";
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

const ForLOOOP = () => {
	return PROJECTS.map((e: any, i: number) => {
		return <ProjectElement index={i} data={e} />;
	});
};

const PlaygroundLanding: FC<LandingProps> = (props) => {
	return (
		<StyledContainer>
			<Banner />
			<div className="slidesContainer">{ForLOOOP()}</div>
		</StyledContainer>
	);
};

const StyledContainer = styled.div<StyledProps>`
	padding: 0;
	display: flex;
	flex-flow: column wrap;
	justify-content: center;
	align-items: center;
	.slidesContainer {
		width: 100%;
		display: flex;
		flex-flow: column wrap;
		align-items: center;
		justify-content: space-between;
	}
	@media (${BreakPoint.md}) {
	}
`;

export default PlaygroundLanding;

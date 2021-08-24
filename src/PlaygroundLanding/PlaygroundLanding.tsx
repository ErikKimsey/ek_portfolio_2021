import React, { FC, useState, useEffect } from "react";
import styled from "styled-components";
import ProjectElement from "../Projects/ProjectElement";
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
		return <ProjectElement index={i} data={e} />;
	});
}

const PlaygroundLanding: FC<LandingProps> = (props) => {
	const { index, data } = props;
	console.log(data);

	return (
		<StyledContainer>
			<DropDown />
			<Banner />
			{ForLOOOP()}
		</StyledContainer>
	);
};

const StyledContainer = styled.div<StyledProps>`
	padding: 0;
`;

export default PlaygroundLanding;

import React, { FC, useState, useEffect } from "react";
import styled from "styled-components";
import ProjectElement from "../Projects/ProjectElement";

interface LandingProps {
	index?: number;
	data?: {
		name: string | undefined;
		description: string | undefined;
		image: string | undefined;
	};
}

type StyledProps = {};

const Landing: FC<LandingProps> = (props) => {
	const { index, data } = props;
	console.log(data);

	return <ProjectElement data={data} index={index}></ProjectElement>;
};

const StyledContainer = styled.div<StyledProps>``;

export default Landing;

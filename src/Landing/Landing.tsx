import React, { FC, useState, useEffect } from "react";
import styled from "styled-components";
import PageTemplate from "./PageTemplate";

interface Data {
	name: string | undefined;
	description: string | undefined;
	image: string | undefined;
}

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

	return <PageTemplate data={data} index={index}></PageTemplate>;
};

const StyledContainer = styled.div<StyledProps>``;

export default Landing;

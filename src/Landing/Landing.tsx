import React, { FC, useState, useEffect } from "react";
import styled from "styled-components";
import PageTemplate from "./PageTemplate";

interface LandingProps {
	index?: number;
}

type StyledProps = {};

const Landing: FC<LandingProps> = (props) => {
	const { index } = props;
	return (
		<PageTemplate
			header="Landing"
			rightContent=""
			leftContent="#f0f"
			index={index}
		></PageTemplate>
	);
};

const StyledContainer = styled.div<StyledProps>``;

export default Landing;

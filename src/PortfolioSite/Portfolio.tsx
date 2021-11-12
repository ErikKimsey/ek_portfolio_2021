import React, { FC, useState, useEffect } from "react";
import styled from "styled-components";
import PortfolioLanding from "./PortfolioLanding";
import { Experience, Education } from "./index";
import ExperienceEducationContainer from "./ExperienceEducationContainer/ExperienceEducationContainer";

type Props = {};

type StyledProps = {};

const Portfolio: FC<Props> = (props) => {
	const {} = props;

	return (
		<StyledContainer>
			<PortfolioLanding />
			<ExperienceEducationContainer />
			{/* <Experience />
			<Education /> */}
		</StyledContainer>
	);
};

const StyledContainer = styled.div<StyledProps>``;

export default Portfolio;

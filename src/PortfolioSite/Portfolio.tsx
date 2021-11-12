import React, { FC, useState, useEffect } from "react";
import styled from "styled-components";
import PortfolioLanding from "./PortfolioLanding";
import { Experience, Education } from "./index";

type Props = {};

type StyledProps = {};

const Portfolio: FC<Props> = (props) => {
	const {} = props;

	return (
		<StyledContainer>
			<PortfolioLanding />
			<Experience />
			{/* <Education /> */}
		</StyledContainer>
	);
};

const StyledContainer = styled.div<StyledProps>``;

export default Portfolio;

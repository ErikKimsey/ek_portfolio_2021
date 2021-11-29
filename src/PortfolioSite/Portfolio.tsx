import React, { FC } from "react";
import styled from "styled-components";
import PortfolioLanding from "./PortfolioLanding";
import ExperienceEducationContainer from "./ExperienceEducationContainer/ExperienceEducationContainer";
import Contact from "./Contact/Contact";

type Props = {};

type StyledProps = {};

const Portfolio: FC<Props> = (props) => {
	const {} = props;

	return (
		<StyledContainer>
			<PortfolioLanding />
			<ExperienceEducationContainer />
			<Contact />
			<div className="nullFooter"></div>
		</StyledContainer>
	);
};

const StyledContainer = styled.div<StyledProps>`
	.nullFooter {
		width: 100%;
		height: 100px;
	}
`;

export default Portfolio;

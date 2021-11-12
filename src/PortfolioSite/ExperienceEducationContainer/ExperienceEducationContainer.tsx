import React, { FC, useState, useEffect } from "react";
import styled from "styled-components";
import { Education, Experience } from "../index";

type Props = {};

type StyledProps = {};

const ExperienceEducationContainer: FC<Props> = (props) => {
	const {} = props;

	return (
		<StyledContainer>
			<Experience />
			<Education />
		</StyledContainer>
	);
};

const StyledContainer = styled.div<StyledProps>`
	min-height: 100vh;
	width: 100%;
	display: flex;
	flex-flow: column wrap;
	justify-content: flex-start;
	background-color: #333;
	align-items: center;

	@media (max-width: 568px) {
	}
`;

export default ExperienceEducationContainer;

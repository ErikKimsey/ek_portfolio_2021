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
	box-sizing: border-box;
	min-height: 100vh;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	/* background-color: #242424; */
	align-items: center;
	/* padding: 0 20px; */

	@media (max-width: 568px) {
		padding: 0;
	}
`;

export default ExperienceEducationContainer;

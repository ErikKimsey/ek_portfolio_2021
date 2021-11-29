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
	align-items: center;
	background: linear-gradient(0deg, rgb(49, 49, 49) 0%, rgb(27, 27, 27) 100%);

	@media (max-width: 568px) {
		padding: 0;
	}
`;

export default ExperienceEducationContainer;

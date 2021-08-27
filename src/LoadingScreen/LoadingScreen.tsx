import React, { FC, useState, useEffect } from "react";
import styled from "styled-components";

type Props = {};

type StyledProps = {};

const LoadingScreen: FC<Props> = (props) => {
	const {} = props;

	return (
		<StyledContainer>
			<h1>LOADING</h1>
		</StyledContainer>
	);
};

const StyledContainer = styled.div<StyledProps>`
	height: 100vh;
	width: 100vw;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #f0f;
`;

export default LoadingScreen;

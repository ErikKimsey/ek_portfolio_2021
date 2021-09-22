import React, { FC, useState, useEffect } from "react";
import styled from "styled-components";

type Props = {};

type StyledProps = {};

const Work: FC<Props> = (props) => {
	const {} = props;

	return (
		<StyledContainer>
			<h1>WORK ALL DAY</h1>
		</StyledContainer>
	);
};

const StyledContainer = styled.div<StyledProps>`
	width: 100%;
	height: 100%;
	font-family: "Desib";
	font-weight: 200;
	h1 {
		color: #fff;
		font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
			sans-serif;
		text-transform: uppercase;
	}
`;

export default Work;

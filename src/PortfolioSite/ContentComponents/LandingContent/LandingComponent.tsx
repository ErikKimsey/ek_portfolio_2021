import React, { FC, useState, useEffect } from "react";
import styled from "styled-components";

type Props = {};

type StyledProps = {};

const LandingComponent: FC<Props> = (props) => {
	const {} = props;

	return <StyledContainer></StyledContainer>;
};

const StyledContainer = styled.div<StyledProps>`
	height: 80vh;
	width: 100%;
	border: solid 2px #222;
`;

export default LandingComponent;

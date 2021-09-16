import React, { FC, useState, useEffect } from "react";
import styled from "styled-components";

type Props = {};

type StyledProps = {};

const MiddleSpace: FC<Props> = (props) => {
	const {} = props;

	return <StyledContainer></StyledContainer>;
};

const StyledContainer = styled.div<StyledProps>`
	width: 20%;
	height: 100%;
	border: solid 1px #222;
`;

export default MiddleSpace;

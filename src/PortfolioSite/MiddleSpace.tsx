import React, { FC, useState, useEffect } from "react";
import { Route } from "react-router";
import styled from "styled-components";

type Props = {};

type StyledProps = {};

const MiddleSpace: FC<Props> = (props) => {
	const {} = props;

	return <StyledContainer></StyledContainer>;
};

const StyledContainer = styled.div<StyledProps>`
	position: static;
	margin-top: 100px;
	width: 300px;
	height: 80%;
	border: solid 1px #222;
	background-color: #fff;
`;

export default MiddleSpace;

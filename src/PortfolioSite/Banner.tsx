import React, { FC, useState, useEffect } from "react";
import styled from "styled-components";

type Props = {};

type StyledProps = {};

const Banner: FC<Props> = (props) => {
	const {} = props;

	return (
		<StyledContainer>
			<div className="leftSpace"></div>
			<h2>ERIK KIMSEY</h2>
			<h2>CREATIVE TECHNOLOGIST</h2>
		</StyledContainer>
	);
};

const StyledContainer = styled.div<StyledProps>`
	position: fixed;
	width: 100%;
	display: flex;
	flex-flow: row wrap;
	justify-self: flex-end;
	align-items: flex-end;
	top: 0;
	margin-top: 0;
	padding: 10px;
	height: 133px;
	font-family: "Desib";
	border-radius: 100px;
	background: rgb(255, 0, 200);
	background: linear-gradient(
		0deg,
		rgba(0, 0, 0, 0.5) 0%,
		rgba(0, 0, 0, 1) 42%
	);
	z-index: 1000;
	.leftSpace {
		width: 100px;
	}
	h2 {
		padding: 0 10px;
		margin: 0;
	}
`;

export default Banner;

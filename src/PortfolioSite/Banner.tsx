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
	display: flex;
	flex-flow: row wrap;
	justify-self: flex-end;
	width: 100%;
	margin-top: 2%;
	height: 100px;
	font-family: "Desib";
	.leftSpace {
		width: 100px;
	}
	h2 {
		padding: 0 10px;
		margin: 0;
	}
`;

export default Banner;

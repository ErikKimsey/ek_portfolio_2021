import React, { FC, useState, useEffect } from "react";
import styled from "styled-components";
import { OUTER_LINES_COLOR } from "../styles/colors";

type Props = {};

type StyledProps = {};

const Grid: FC<Props> = (props) => {
	const {} = props;

	return (
		<StyledContainer>
			{/* <div className="gridElem"></div>
			<div className="gridElem"></div>
			<div className="gridElem"></div>
			<div className="gridElem"></div>
			<div className="gridElem"></div>
			<div className="gridElem"></div>
			<div className="gridElem"></div>
			<div className="gridElem"></div>
			<div className="gridElem"></div>
			<div className="gridElem"></div>
			<div className="gridElem"></div> */}
		</StyledContainer>
	);
};

const StyledContainer = styled.div<StyledProps>`
	position: absolute;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	height: 100vh;
	width: 100vw;
	z-index: 1009;

	.gridElem {
		border: solid 1px ${OUTER_LINES_COLOR};
		width: 49vw;
		height: 49vh;
	}

	@media (max-width: 990px) {
		padding: 0px;
		margin: 0px;

		flex-direction: column;
		align-items: center;
		.gridElem {
			width: 100vw;
		}
	}
`;

export default Grid;

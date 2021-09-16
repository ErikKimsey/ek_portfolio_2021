import React, { FC, useState, useEffect } from "react";
import { NavLink, Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";

type Props = {};

type StyledProps = {};

const PortfolioMenu: FC<Props> = (props) => {
	const {} = props;

	return (
		<StyledContainer>
			<div className="menuItem">SUMPIN 1</div>
			<div className="menuItem">2 SUMPIN</div>
			<div className="menuItem">SUMPINS UMPIN 3</div>
			<div className="menuItem">4 SUMPIN</div>
			<div className="menuItem">SUMPIN 5</div>
		</StyledContainer>
	);
};

const StyledContainer = styled.div<StyledProps>`
	width: 80px;
	height: 100%;
	display: flex;
	flex-flow: row wrap;
	align-content: space-evenly;
	justify-content: space-between;
	.menuItem {
		transform: rotateZ(-90deg);
		background-color: #222;
		padding: 2px;
	}
`;

export default PortfolioMenu;

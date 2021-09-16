import React, { FC, useState, useEffect } from "react";
import { NavLink, Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";

type Props = {};

type StyledProps = {};

const PortfolioMenu: FC<Props> = (props) => {
	const {} = props;

	return (
		<StyledContainer>
			<div className="menuItem">
				<NavLink to="/resume" className="navLink">
					Resume
				</NavLink>
			</div>
			<div className="menuItem">
				<NavLink to="/work" className="navLink">
					SUMPIN 1
				</NavLink>
			</div>
			<div className="menuItem">SUMPINS UMPIN 3</div>
			<div className="menuItem">4 SUMPIN</div>
			<div className="menuItem">SUMPIN 5</div>
		</StyledContainer>
	);
};

const StyledContainer = styled.div<StyledProps>`
	position: fixed;
	left: 20px;
	width: 80px;
	height: 80%;
	display: flex;
	flex-flow: row wrap;
	align-content: space-evenly;
	justify-content: space-between;
	align-self: flex-start;
	justify-self: flex-start;
	.menuItem {
		transform: rotateZ(-90deg);
		padding: 2px;
	}
	.navLink {
		text-decoration: none;
		/* padding: 5px; */
		margin: 0;
		text-align: center;
		color: #fff;
	}
`;

export default PortfolioMenu;

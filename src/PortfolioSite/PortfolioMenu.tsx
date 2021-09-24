import React, { FC, useState, useEffect } from "react";
import { NavLink, Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";

type Props = {};

type StyledProps = {};

const PortfolioMenu: FC<Props> = (props) => {
	const {} = props;
	const work = document.getElementById("workContainer");
	console.log(work);

	const handleClick = (elem: string) => {
		console.log("handling click");
	};

	return (
		<StyledContainer>
			<div className="menuItem">
				<NavLink to="/portfolio/" className="navLink">
					Resume
				</NavLink>
			</div>
			<div className="menuItem">
				<NavLink to="/portfolio/work/" className="navLink">
					Work
				</NavLink>
			</div>
			<div className="menuItem">
				<NavLink to="/portfolio/education/" className="navLink">
					Edu.
				</NavLink>
			</div>
		</StyledContainer>
	);
};

const StyledContainer = styled.div<StyledProps>`
	position: fixed;
	left: 20px;
	width: 100px;
	height: 100%;
	display: flex;
	flex-flow: column wrap;
	align-content: space-around;
	justify-content: space-around;
	align-self: flex-start;
	justify-self: flex-start;
	.menuItem {
		transform: rotateZ(-90deg);
		padding: 2px;
	}
	.navLink {
		text-decoration: none;
		margin: 0;
		text-align: center;
		color: #fff;
	}

	@media (max-width: 700px) {
		left: 10px;
		width: 50px;
		height: 100vh;
	}
`;

export default PortfolioMenu;

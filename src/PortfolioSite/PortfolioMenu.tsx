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
			<div className="menuItem">
				<NavLink to="/portfolio/education/" className="navLink">
					My best friend.
				</NavLink>
			</div>
			<div className="menuItem">
				<NavLink to="/portfolio/education/" className="navLink">
					First Contact
				</NavLink>
			</div>
		</StyledContainer>
	);
};

const StyledContainer = styled.div<StyledProps>`
	position: fixed;
	left: 20px;
	width: 0px;
	height: 70%;
	display: flex;
	flex-flow: row wrap;
	align-content: space-around;
	justify-content: flex-start;
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

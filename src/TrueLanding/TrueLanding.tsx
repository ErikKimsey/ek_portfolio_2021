import React, { FC, useState, useEffect } from "react";
import { Switch, Route, Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import Landing from "../Landing/Landing";

type Props = {};

type StyledProps = {};

const TrueLanding: FC<Props> = (props) => {
	const {} = props;

	return (
		<StyledContainer>
			<div className="screenHalf">
				<NavLink to="portfolio" target="_blank">
					<h1 className="halfLabel">Portfolio Site</h1>
				</NavLink>
			</div>
			<div className="screenHalf">
				<NavLink to="/playground">
					<h1 className="halfLabel">Digital Playground</h1>
				</NavLink>
			</div>
		</StyledContainer>
	);
};

const StyledContainer = styled.div<StyledProps>`
	height: 100vh;
	width: 100%;
	display: flex;
	flex-direction: row;
	font-family: "Wipeout";
	.screenHalf {
		width: 50%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		border: solid 1px #333;
	}

	a {
		text-decoration: none;
		color: #fff;
	}
	.halfLabel {
		&:hover {
			font-size: 210%;
		}
	}
`;

export default TrueLanding;

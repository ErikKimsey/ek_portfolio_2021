import React, { FC, useState, useEffect } from "react";
import { NavLink, Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import Resume from "./Resume/Resume";

type Props = {};

type StyledProps = {};

const ContentDisplay: FC<Props> = (props) => {
	const {} = props;

	return (
		<StyledContainer>
			<Switch>
				<Route path="/resume">
					<Resume />
				</Route>
				<Route path="/work">
					<Resume />
				</Route>
			</Switch>
		</StyledContainer>
	);
};

const StyledContainer = styled.div<StyledProps>`
	width: 100%;
	height: 100%;
	/* padding: 20px; */
	/* border: solid 1px #fff; */
`;

export default ContentDisplay;

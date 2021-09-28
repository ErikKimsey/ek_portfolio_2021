import React, { FC, useState, useEffect } from "react";
import styled from "styled-components";
import CAPSULES from "../assets/images/capsules.svg";
import SATELLITE from "../assets/images/satellite.svg";

type Props = {};

type StyledProps = {};

const Menu: FC<Props> = (props) => {
	const {} = props;

	return (
		<StyledContainer>
			<a href="http://erikkimsey" target="_blank" className="link">
				<div
					className="menuItem skillSet"
					style={{ backgroundImage: `url(${CAPSULES})` }}
				></div>
			</a>
			<a href="http://erikkimsey" target="_blank" className="link">
				<div
					className="menuItem workHistory"
					style={{ backgroundImage: `url(${SATELLITE})` }}
				></div>
			</a>
		</StyledContainer>
	);
};

const StyledContainer = styled.div<StyledProps>`
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-items: flex-end;
	background-color: rgba(0, 0, 0, 0);
	margin-right: 100px;
	padding: 10px;
	width: 12%;

	a.link {
		text-decoration: none;
		color: #fff;
		display: flex;
		justify-content: center;
		height: 50px;
		width: 50px;
	}

	.menuItem {
		position: relative;
		width: 100%;
		height: 100%;
		background-repeat: no-repeat;
		background-size: contain;
		@media (max-width: 900px) {
			/* width: 50%; */
		}
	}

	.iconImg {
		fill: #fff;
	}
`;

export default Menu;

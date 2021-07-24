import { url } from "inspector";
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
				{/* <h3 className="label skillsetLabel">skill set</h3> */}
				<div
					className="menuItem skillSet"
					style={{ backgroundImage: `url(${CAPSULES})` }}
				>
					{/* <img src={CAPSULES} className="iconImg" /> */}
				</div>
			</a>
			<a href="http://erikkimsey" target="_blank" className="link">
				{/* <h3 className="label workHistoryLabel">work hist.</h3> */}
				<div
					className="menuItem workHistory"
					style={{ backgroundImage: `url(${SATELLITE})` }}
				>
					{/* <img src={SATELLITE} className="iconImg" /> */}
				</div>
			</a>
		</StyledContainer>
	);
};

const StyledContainer = styled.div<StyledProps>`
	position: fixed;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	right: 66px;
	top: 50px;
	width: 200px;
	transform: rotate(-13deg);
	background-color: rgba(0, 0, 0, 0);

	a.link {
		text-decoration: none;
		color: #fff;
		display: flex;
		justify-content: center;
		height: 100px;
		width: 100px;
	}

	.menuItem {
		position: relative;
		width: 100%;
		height: 100%;
		background-repeat: no-repeat;
		background-size: contain;
		@media (max-width: 900px) {
			width: 50%;
		}
	}

	.skillSet {
		transform: rotate(5deg);
		transform: scale(1.2);
		&:hover {
			transform: scale(1.3);
		}
	}

	.workHistory {
		transform: rotate(-13deg);
		&:hover {
			transform: scale(1.1);
		}
	}

	.label {
		width: 100px;
		line-height: 1.5;
		font-family: "Wipeout";
		text-decoration: none;
		font-size: 1.2em;
	}

	.skillsetLabel {
	}

	.workHistoryLabel {
	}

	.iconImg {
		fill: #fff;
	}
`;

export default Menu;

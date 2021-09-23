import React, { FC, useState, useEffect } from "react";
import styled from "styled-components";
import github from "../assets/images/Icons/github.svg";
import behance from "../assets/images/Icons/behance.svg";
import soundcloud from "../assets/images/Icons/soundcloud.svg";
import astronaut from "../assets/images/Icons/astronaut.svg";
import linkedin from "../assets/images/Icons/linkedin.svg";
import { NavLink } from "react-router-dom";

type Props = {};

type StyledProps = {};

const Icons: FC<Props> = (props) => {
	const {} = props;

	/**
        - Github,
        - Linkedin,
        - Soundcloud,
        - Behance,
     */
	return (
		<StyledContainer>
			<div className="iconsContainer">
				<a href="https://www.beatport.com" target="_blank">
					<img src={github} />
				</a>
				<NavLink to="/playground">
					<img src={astronaut} />
				</NavLink>
				<a href="https://www.beatport.com" target="_blank">
					<img src={soundcloud} />
				</a>
				<a href="https://www.beatport.com" target="_blank">
					<img src={behance} />
				</a>
				<a href="https://www.beatport.com" target="_blank">
					<img src={linkedin} />
				</a>
			</div>
		</StyledContainer>
	);
};

const StyledContainer = styled.div<StyledProps>`
	position: fixed;
	width: 70px;
	display: flex;
	flex-flow: column wrap;
	justify-content: flex-end;
	bottom: 100px;
	right: 50px;
	.iconsContainer {
		margin-right: 100px;
	}
	img {
		margin: 5px;
		height: 50px;
		width: 50px;
		fill: #fff;
	}

	@media (max-width: 700px) {
		position: fixed;
		flex-flow: row;
		width: 100%;
		bottom: 40px;
		.iconsContainer {
			margin-right: 100px;
		}
		img {
			margin: 5px;
			height: 50px;
			width: 50px;
			fill: #fff;
		}
	}
`;

export default Icons;

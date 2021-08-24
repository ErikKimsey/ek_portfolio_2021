import React, { FC, useState, useEffect } from "react";
import styled from "styled-components";

type Props = {};

type StyledProps = {};

const DropDown: FC<Props> = (props) => {
	const {} = props;

	return (
		<StyledContainer>
			{/* <div className="menuIndicator"></div> */}
			<div className="spinParent">
				<div className="spinObj"></div>
				<div className="spinObj"></div>
				<div className="spinObj"></div>
			</div>
		</StyledContainer>
	);
};

const StyledContainer = styled.div<StyledProps>`
	position: fixed;
	left: 20px;
	top: 100px;
	z-index: 1001;

	.menuIndicator {
		position: absolute;
		display: flex;
		top: 50%;
		left: 20px;
		width: 410px;
		height: 33px;
		border: solid 1px #333;
		transform: rotateZ(-90deg);
	}
	.spinParent {
		width: 100px;
		height: 700px;
		opacity: 0.3;
		transition-property: height, width, background, transform, padding,
			opacity, left;
		transition-duration: 0.7s;
		&:hover {
			width: 212px;
			opacity: 1;
		}
		.spinObj {
			margin: 15px 5px;
			color: #fff;
			text-align: center;
			position: relative;
			width: 77px;
			height: 77px;
			background-color: rgba(0, 0, 0, 0);
			z-index: 1001;
			/* margin: 5px; */
			transition-property: transform, width, height, border-color,
				box-shadow;
			transition-duration: 1s;
			border: solid 2px rgba(255, 0, 255, 0.4);
			border-radius: 5px;
			box-shadow: 0px 0px 4px rgba(0, 110, 255, 0.8);
			&:hover {
				transform: ${() => `rotateY(25deg)`};
				width: 220px;
				border: solid 2px rgba(0, 153, 255, 0.4);
				box-shadow: 0px 0px 10px rgba(255, 0, 255, 0.4);
			}
		}
	}
`;

export default DropDown;

import React, { FC, useState, useEffect } from "react";
import styled from "styled-components";

type Props = {};

type StyledProps = {};

const DropDown: FC<Props> = (props) => {
	const {} = props;

	return (
		<StyledContainer>
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
	left: 200px;
	top: 200px;
	z-index: 1001;
	.spinParent {
		transition-property: height, width, background, transform, padding;
		transition-duration: 1s;
	}

	.spinObj {
		color: #fff;
		text-align: center;
		position: relative;
		width: 77px;
		height: 77px;
		background-color: rgba(0, 0, 0, 0);
		z-index: 1001;
		border: solid 5px rgb(255, 255, 255);
		border-radius: 5px;
		margin: 5px;
		transition-property: transform, width, height, border-color;
		transition-duration: 1s;
		&:hover {
			transform: ${() => `rotateY(25deg)`};
			width: 220px;
			border-color: #ff00ff;
		}
	}
`;

export default DropDown;

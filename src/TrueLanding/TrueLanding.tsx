import React, { FC, useState, useEffect } from "react";
import styled from "styled-components";

type Props = {};

type StyledProps = {};

const TrueLanding: FC<Props> = (props) => {
	const {} = props;

	return (
		<StyledContainer>
			<div className="screenHalf">
				<a href="">
					<h1 className="halfLabel">Portfolio Site</h1>
				</a>
			</div>
			<div className="screenHalf">
				<a href="">
					<h1 className="halfLabel">Digital Playground</h1>
				</a>
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

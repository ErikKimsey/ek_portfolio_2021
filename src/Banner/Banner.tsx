import React, { FC, useState, useEffect } from "react";
import styled from "styled-components";
import { OUTER_LINES_COLOR } from "../styles/colors";
import { PADDINGS } from "../styles/paddingAndMargins";
import Menu from "../Menu/Menu";
import "./Banner.scss";

type Props = {};

type StyledProps = {};

const Banner: FC<Props> = (props) => {
	const {} = props;

	return (
		<StyledContainer
			style={
				{
					// backgroundImage: `linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 1)), url(https://i.imgur.com/QISJdLz.png)`,
					// backgroundSize: "cover",
					// backgroundPosition: "center",
				}
			}
		>
			<div
				className="h1s"
				style={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "flex-start",
				}}
			>
				<h1 className="wipeout" data-text="Erik Kimsey's">
					Erik Kimsey's{" "}
				</h1>
				<h1 className="wipeout" data-text="Digital Playground">
					Digital Playground
				</h1>
			</div>
			<p
				className="h3slogan"
				style={{
					paddingLeft: "0px",
					paddingTop: "10px",
					margin: "0px",
					fontFamily: "Desib",
					color: "#d3007b",
					fontSize: "1.5em",
					alignSelf: "center",
					letterSpacing: "0.1em",
				}}
			>
				the digital art and the play-things, of a restless, creative
				soul.
			</p>
			{/* <Menu /> */}
		</StyledContainer>
	);
};

const StyledContainer = styled.div<StyledProps>`
	padding: 0 0 0 0px;
	margin: 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: #000;
	color: rgba(255, 255, 255, 0.5);
	.wipeout {
		color: rgba(255, 255, 255, 1);
		font-family: "Wipeout";
		font-size: 4em;
		padding: 0px 20px;
		margin: 0px;
		margin-top: 60px;
	}

	@media (max-width: 990px) {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		margin: 1px;
		padding: 10px 20px;
		padding-bottom: 1px;
		.wipeout {
			font-family: "Wipeout";
			font-size: 2em;
			margin: 2px;
		}
	}
`;

export default Banner;

import React, { FC, useState, useEffect } from "react";
import styled from "styled-components";
import { OUTER_LINES_COLOR } from "../styles/colors";
import { PADDINGS } from "../styles/paddingAndMargins";
import Menu from "../Menu/Menu";

type Props = {};

type StyledProps = {};

const Banner: FC<Props> = (props) => {
	const {} = props;

	return (
		<StyledContainer
			style={{
				backgroundImage: `url(https://i.imgur.com/QISJdLz.png)`,
				backgroundSize: "cover",
			}}
		>
			<h1 className="wipeout">Erik Kimsey </h1>
			<h1 className="wipeout"> Digital Playground</h1>
			{/* <Menu /> */}
		</StyledContainer>
	);
};

const StyledContainer = styled.div<StyledProps>`
	border-bottom: solid 1px ${OUTER_LINES_COLOR};
	padding: 10px 0 0 40px;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: flex-end;
	.wipeout {
		font-family: "Desib";
		font-size: 2em;
	}
	@media (max-width: 990px) {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		margin: 1px;
		padding: 10px 10px 10px 20px;
		.wipeout {
			font-family: "Desib";
			font-size: 1.5em;
			margin: 0;
		}
	}
`;

export default Banner;

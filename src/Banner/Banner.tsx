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
				backgroundImage: `linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.4)), url(https://i.imgur.com/QISJdLz.png)`,
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
		>
			<h1 className="wipeout">Erik Kimsey's </h1>
			<h1 className="wipeout">Digital Playground</h1>
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
		font-family: "Wipeout";
		font-size: 2em;
		padding: 0px 30px;
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

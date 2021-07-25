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
		<StyledContainer>
			<h1 className="wipeout">Erik Kimsey ... Digital Playground</h1>
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
	}
`;

export default Banner;

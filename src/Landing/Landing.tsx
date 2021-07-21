import React, { FC, useState, useEffect } from "react";
import styled from "styled-components";
import * as COLORS from "../styles/colors";
import { MARGINS, PADDINGS } from "../styles/paddingAndMargins";

type Props = {};

const Landing: FC<Props> = (props) => {
	const {} = props;

	return (
		<StyledContainer>
			<h1>LANDING</h1>
		</StyledContainer>
	);
};

const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	border: solid 1px ${COLORS.LINES_COLOR};
	margin: ${MARGINS.pageContainer};
	padding: ${PADDINGS.pageContainer};
`;

export default Landing;

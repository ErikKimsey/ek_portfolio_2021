import React, { FC, useState, useEffect } from "react";
import styled from "styled-components";
import { OUTER_LINES_COLOR } from "../styles/colors";
import { PADDINGS } from "../styles/paddingAndMargins";

type Props = {};

type StyledProps = {};

const Banner: FC<Props> = (props) => {
	const {} = props;

	return (
		<StyledContainer>
			<h1>BANNER</h1>
		</StyledContainer>
	);
};

const StyledContainer = styled.div<StyledProps>`
	border-bottom: solid 1px ${OUTER_LINES_COLOR};
	padding: ${PADDINGS.childContainer};
`;

export default Banner;

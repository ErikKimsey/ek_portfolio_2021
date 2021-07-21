import React, { FC, useState, useEffect } from "react";
import styled from "styled-components";
import * as COLORS from "../styles/colors";
import { MARGINS, PADDINGS } from "../styles/paddingAndMargins";

type Props = {};

const PageTemplate: FC<Props> = (props) => {
	const {} = props;

	return (
		<StyledContainer>
			<h1>PAGE TEMPLATE</h1>
			<div className="pageHalf leftContainer"></div>
			<div className="pageHalf rightContainer"></div>
		</StyledContainer>
	);
};

const StyledContainer = styled.div`
	display: flex;
	flex-direction: row;
	/* border: solid 1px ${COLORS.OUTER_LINES_COLOR}; */
	margin: ${MARGINS.pageContainer};
	padding: ${PADDINGS.pageContainer};
	.pageHalf {
		width: 600px;
		height: 700px;
	}
	.leftContainer {
		border-right: solid 1px ${COLORS.INNER_LINES_COLOR};
	}
`;

export default PageTemplate;

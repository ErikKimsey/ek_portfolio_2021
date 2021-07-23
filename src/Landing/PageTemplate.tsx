import React, { FC, useState, useEffect } from "react";
import styled from "styled-components";
import * as COLORS from "../styles/colors";
import { MARGINS, PADDINGS } from "../styles/paddingAndMargins";
import pic from "../assets/images/pic3.png";

interface PageProps {
	header?: string;
	rightContent?: string;
	leftContent?: string;
	img?: string;
	index?: number;
}

interface PageHalfProps {
	index?: number;
}

interface StyleProps {
	width?: number;
	height?: number;
}

const PageHalf: FC<PageHalfProps> = (props) => {
	let { index } = props;

	if (index && index % 2) {
		return (
			<div className="halvesContainer">
				<div className="pageHalf leftContainer">
					<img className="image" alt="img" src={pic} />
				</div>
				<div className="pageHalf rightContainer">
					<h3>RIGHT</h3>
				</div>
			</div>
		);
	} else {
		return (
			<div className="halvesContainer">
				<div className="pageHalf rightContainer">
					<h3>RIGHT</h3>
				</div>
				<div className="pageHalf leftContainer">
					<img className="image" alt="img" src={pic} />
				</div>
			</div>
		);
	}
};

const PageTemplate: FC<PageProps> = (props) => {
	const { header, img, index } = props;

	return (
		<StyledContainer>
			<PageHalf index={index} />
			{/* <div className="halvesContainer">
				<div className="pageHalf leftContainer">
					<img className="image" alt="img" src={pic} />
				</div>
				<div className="pageHalf rightContainer">
					<h3>RIGHT</h3>
				</div>
			</div> */}
		</StyledContainer>
	);
};

const StyledContainer = styled.div<StyleProps>`
	display: flex;
	flex-direction: column;
	@media (max-width: 800px) {
		padding: 0px;
		margin: 0px;
		flex-direction: column;
		align-content: center;
		justify-content: center;
	}

	h1 {
	}

	.image {
		width: 100%;
		padding: 0;
	}

	.halvesContainer {
		display: flex;
		flex-direction: row;
		border-bottom: solid 1px ${COLORS.OUTER_LINES_COLOR};
		@media (max-width: 990px) {
			padding: 0px;
			margin: 0px;
			flex-direction: column;
			align-items: center;
		}
	}

	.leftContainer {
		border-right: solid 1px ${COLORS.OUTER_LINES_COLOR};
	}

	.pageHalf {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		width: 100%;
		@media (max-width: 990px) {
			width: 100%;
			padding: 0px;
			height: 100vh;
		}
	}
`;

export default PageTemplate;

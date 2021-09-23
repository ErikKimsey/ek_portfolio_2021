import React, { FC, useState, useEffect } from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";
import { Work, Resume, Education } from "./index";

type Props = {};

type StyledProps = {};

const ContentBreakElement = () => {
	return <ContentBreak></ContentBreak>;
};

const ContentDisplay: FC<Props> = (props) => {
	const {} = props;

	const [content, setContent] = useState([]);

	useEffect(() => {
		if (
			Work !== undefined &&
			Resume !== undefined &&
			Education !== undefined
		) {
			const _cont = [Work, Resume, Education];
			setContent(_cont);
		}
		console.log(content);
	}, []);

	return (
		<StyledContainer>
			{content.length > 0 && (
				<div className="contentContainer">
					<Work />
					<ContentBreakElement />
					<Resume />
					<ContentBreakElement />
					<Education />
				</div>
			)}
		</StyledContainer>
	);
};

const StyledContainer = styled.div<StyledProps>`
	position: relative;
	top: 300px;
	width: 100%;

	.contentContainer {
		width: 100%;
		padding-left: 200px;
	}
`;

const ContentBreak = styled.div`
	height: 300px;
	width: 100%;
	border-top: solid 1px #333;
`;

export default ContentDisplay;

import React, { FC, useState, useEffect } from "react";
import styled from "styled-components";

interface Data {
	name: string | undefined;
	description: string | undefined;
	image: string | undefined;
	link?: string | undefined;
}

interface PageProps {
	data: Data | undefined;
	index?: number;
}

type StyledProps = {};

const ProjectElementMenuItem: FC<PageProps> = (props) => {
	const {} = props;

	return (
		<StyledContainer>
			<div className="smarts">YOYOYOY</div>
		</StyledContainer>
	);
};

const StyledContainer = styled.div<StyledProps>`
	width: 200px;
	height: 200px;
	border: solid 1px #fff;
`;

export default ProjectElementMenuItem;

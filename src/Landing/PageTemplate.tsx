import React, { FC, useState, useEffect } from "react";
import styled from "styled-components";
import * as COLORS from "../styles/colors";
import { PADDINGS } from "../styles/paddingAndMargins";
import LinkArrow from "../assets/images/link_arrow.png";

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

interface StyleProps {
	width?: number;
	height?: number;
}

const PageTemplate: FC<PageProps> = (props) => {
	const { index, data } = props;
	let [projName, setProjName] = useState<string | undefined>();
	let [projDesc, setProjDesc] = useState<string | undefined>();
	let [projImg, setProjImg] = useState<string | undefined>();
	let [projLink, setProjLink] = useState<string | undefined>();

	useEffect(() => {
		if (data && data.name) setProjName(data.name);
		if (data && data.description) setProjDesc(data.description);
		if (data && data.image) setProjImg(data.image);
		if (data && data.link) setProjLink(data.link);
	}, []);

	if (index && index % 2) {
		return (
			<StyledContainer
				style={{
					backgroundImage: `linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.1)), url(${projImg})`,
				}}
			>
				<div className="halvesContainer">
					<div className="projectText projectTextRight">
						<h3>{projName}</h3>
						<p>{projDesc}</p>
						<a
							href={projLink}
							target="_blank"
							className="projectLink"
							rel="noreferrer"
						>
							<img
								alt="project link"
								src={LinkArrow}
								className="linkImage"
							/>
						</a>
					</div>
				</div>
			</StyledContainer>
		);
	} else {
		return (
			<StyledContainer>
				<div
					className="halvesContainer"
					style={{
						backgroundImage: `linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.1)), url(${projImg})`,
					}}
				>
					<div className="projectText projectTextLeft">
						<h3>{projName}</h3>
						<p>{projDesc}</p>
						<a
							href={projLink}
							target="_blank"
							className="projectLink"
							rel="noreferrer"
						>
							<img
								alt="project link"
								src={LinkArrow}
								className="linkImage"
							/>
						</a>
					</div>
				</div>
			</StyledContainer>
		);
	}
};

const StyledContainer = styled.div<StyleProps>`
	display: flex;
	flex-direction: column;
	@media (max-width: 990px) {
		padding: 0px;
		margin: 0px;
		flex-direction: column;
		align-content: center;
		justify-content: center;
	}

	h1 {
	}

	.halvesContainer {
		position: relative;
		display: flex;
		flex-direction: row;
		height: 500px;
		background-repeat: none;
		border-bottom: solid 1px ${COLORS.OUTER_LINES_COLOR};
		@media (max-width: 990px) {
			padding: 0px;
			margin: 0px;
			flex-direction: column;
			align-items: center;
		}
	}

	.projectText {
		position: absolute;
		display: flex;
		flex-direction: column;
		top: 50px;
		width: 30vw;
		background-color: rgba(0, 0, 0, 0.4);
		padding: ${PADDINGS.childContainer};
		@media (max-width: 990px) {
			width: 80%;
			right: 0px;
		}
	}

	.projectTextRight {
		right: 50px;
	}

	.projectTextLeft {
		left: 50px;
	}

	.image {
		height: 500px;
		width: 100%;
		padding: 0;
	}

	a.projectLink {
		align-self: flex-end;
		width: 100px;
		height: 100px;
	}
	.linkImage {
		width: 100px;
		height: 100px;
	}
`;

export default PageTemplate;
import React, { FC, useState, useEffect, Suspense } from "react";
import styled from "styled-components";
import { BreakPoint } from "../styles/breakpoints";
import { PADDINGS } from "../styles/paddingAndMargins";
import LinkArrow from "../assets/images/link_arrow.png";
import "../Banner/Banner.scss";

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

const ProjectElement: FC<PageProps> = (props) => {
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
	}, [data]);

	if (index && index % 2) {
		return (
			<StyledContainer
				style={{
					backgroundImage: `linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.4)), url(${projImg})`,
					backgroundSize: "cover",
				}}
			>
				<Suspense fallback={<div>Loading...</div>}>
					<div className="halvesContainer">
						<div className="projectText projectTextRight">
							<h3 data-text={`${projName}`}>{projName}</h3>
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
				</Suspense>
			</StyledContainer>
		);
	} else {
		return (
			<StyledContainer>
				<Suspense fallback={<div>Loading...</div>}>
					<div
						className="halvesContainer"
						style={{
							backgroundImage: `linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.4)), url(${projImg})`,
							backgroundSize: "cover",
							backgroundPosition: "center",
						}}
					>
						<div className="projectText projectTextLeft">
							<h3 data-text={`${projName}`}>{projName}</h3>
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
				</Suspense>
			</StyledContainer>
		);
	}
};

const StyledContainer = styled.div<StyleProps>`
	display: flex;
	flex-direction: column;
	margin: 0;
	padding-left: 50px;

	h1 {
		color: #fff;
	}

	h3 {
		font-family: "Wipeout";
		font-size: 3em;
		color: #fff;
		padding: 0;
		margin: 0;
	}
	.halvesContainer {
		margin: 0px;
		padding-left: 50px;
		position: relative;
		display: flex;
		flex-direction: row;
		height: 500px;
		background-repeat: no-repeat;
	}

	.projectText {
		position: absolute;
		display: flex;
		flex-direction: column;
		top: 50px;
		width: 40vw;
		background-color: rgba(0, 0, 0, 0.8);
		padding: ${PADDINGS.childContainer};
		padding-bottom: 30px;
		border-radius: 3px;
	}

	.projectTextRight {
		right: 50px;
	}

	.projectTextLeft {
		top: auto;
		left: 50px;
		bottom: 20px;
	}

	.image {
		height: 500px;
		width: 100%;
		padding: 0;
		margin: 0;
	}

	a.projectLink {
		align-self: flex-end;
		width: 100px;
		height: 100px;

		.linkImage {
			width: 100%;
			height: 100%;
			transform: scale(1);
			transition: transform 500ms;
			&:hover {
				transform: scale(1.1);
			}
		}
	}

	/** BREAKPOINT: XL */
	@media ${BreakPoint.xl} {
		padding: 0px;
		margin: 0px;
		flex-direction: column;
		align-content: center;
		justify-content: center;
		.projectText {
			width: 50vw;
			padding-left: 50px;
		}
	}

	/** BREAKPOINT: LG */
	@media ${BreakPoint.lg} {
		.halvesContainer {
			background-size: cover;
			padding: 0px;
			margin: 0px;
			flex-direction: column;
			align-items: center;
			border-width: 0px;
		}
		.projectText {
			width: 70vw;
			right: 0px;
		}

		.linkImage {
			width: 70%;
			height: 70%;
		}
	}

	/** BREAKPOINT: MD */
	@media ${BreakPoint.md} {
		.halvesContainer {
			margin: 0px;
			padding-left: 50px;
			position: relative;
			display: flex;
			flex-direction: row;
			height: 500px;
			background-repeat: no-repeat;
		}
		.projectText {
			position: absolute;
			display: flex;
			flex-direction: column;
			top: 50px;
			background-color: rgba(0, 0, 0, 0.8);
			padding: ${PADDINGS.childContainer};
			padding-bottom: 30px;
			padding-left: 40px;
			border-radius: 3px;
		}

		.projectTextRight {
			right: 0;
		}

		.projectTextLeft {
			top: auto;
			left: 0;
			bottom: 20px;
		}
	}

	/** BREAKPOINT: SM */
	@media ${BreakPoint.sm} {
		.halvesContainer {
			width: 100vw;
			padding-left: 50px;
		}
		.projectText {
			width: 90vw;
			padding-left: 50px;
		}
	}
`;

export default ProjectElement;

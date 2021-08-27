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

const ProjectElementSlide: FC<PageProps> = (props) => {
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

	return (
		<StyledContainer style={{}}>
			<Suspense fallback={<div>Loading...</div>}>
				{/* <div className="halvesContainer"> */}
				<a
					href={projLink}
					target="_blank"
					className="projectLink"
					rel="noreferrer"
				>
					<div className="projectText projectTextRight">
						<h3 data-text={`${projName}`}>{projName}</h3>
						<p>{projDesc}</p>
						<img
							alt="project link"
							src={LinkArrow}
							className="linkImage"
						/>
					</div>
					{/* </div> */}
				</a>
			</Suspense>
		</StyledContainer>
	);
};

const StyledContainer = styled.div<StyleProps>`
	display: flex;
	flex-direction: column;
	margin: 10px;
	opacity: 0.2;
	background-color: rgba(0, 0, 0, 1);
	border: solid 0px #000;
	transform: rotate3d(0.1, 0.8, -0, 60deg);
	transition: all 500ms;
	&:hover {
		transform: scale(1.1) rotate3d(0, 0, 0, 0deg);
		opacity: 1;
		border: solid 1px #fff;
		background-color: rgba(55, 55, 55, 1);
	}

	a.projectLink {
		align-self: flex-end;
		width: 100px;
		height: 100px;
		text-decoration: none;
		color: #fff;
		img {
			width: 177px;
		}
	}

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
	.projectText {
		position: absolute;
		display: flex;
		flex-direction: column;
		top: 50px;
		width: 40vw;
		background-color: rgba(70, 70, 70, 1);
		padding: ${PADDINGS.childContainer};
		padding-bottom: 30px;
		border-radius: 3px;
	}

	/* .image {
		height: 500px;
		width: 50%;
		padding: 0;
		margin: 0;
	} */

	a.projectLink {
		/* align-self: flex-end;
		width: 100px;
		height: 100px; */

		/* .linkImage {
			width: 100%;
			height: 100%;
			transform: scale(1);
			transition: transform 500ms;
			&:hover {
				transform: scale(1.1);
			}
		} */
	}
`;

export default ProjectElementSlide;

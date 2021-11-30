import React, { FC, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import githubIcon from "../../assets/images/Icons/github.svg";
import soundcloudIcon from "../../assets/images/Icons/soundcloud.svg";
import resumeIcon from "../../assets/images/Icons/resume_pdf.svg";
import planeIcon from "../../assets/images/Icons/paper-plane.svg";
import blackholeIcon from "../../assets/images/Icons/blackhole_i.svg";
import behanceIcon from "../../assets/images/Icons/behance.svg";

type Props = {};

type StyledProps = {
	containerHeight?: number;
	containerWidth?: number;
};

const Contact: FC<Props> = (props) => {
	const {} = props;
	const [winHeight, setWinHeight] = useState(0);
	const [winWidth, setWinWidth] = useState(0);
	const [hasLoaded, setHasLoaded] = useState(false);
	const { inView, entry, ref } = useInView({ threshold: 0.2 });

	const handleResize = () => {
		setWinWidth(window.innerWidth);
		setWinHeight(window.innerHeight);
	};

	useEffect(() => {
		setWinHeight(window.innerHeight);
		setWinWidth(window.innerWidth);
		setHasLoaded(true);
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<StyledContainer ref={ref}>
			{inView && (
				<motion.h1
					animate={{ x: [-200, 0] }}
					transition={{ ease: "easeOut", duration: 0.5 }}
				>
					{`etc.`}
				</motion.h1>
			)}
			<div className="contentContainer">
				{/* 
                Icons w/ links:
                -- email addr,
                 */}
				<a
					href="https://www.github.com/erikkimsey"
					target="_blank"
					rel="noreferrer"
				>
					<img
						className="linkIcon"
						alt="link icon"
						src={githubIcon}
					/>
				</a>
				<NavLink to="/playground">
					<img
						className="linkIcon"
						alt="Playground"
						src={blackholeIcon}
					/>
				</NavLink>
				<a
					href="https://soundcloud.com/roquet-paque"
					target="_blank"
					rel="noreferrer"
				>
					<img
						className="linkIcon"
						alt="link icon"
						src={soundcloudIcon}
					/>
				</a>
				<a href="https://www.linkedin.com/in/erikkimsey">
					<img
						className="linkIcon"
						alt="link icon"
						src={resumeIcon}
					/>
				</a>
				<a
					href="emailto: kimseyerik@gmail.com"
					target="_blank"
					rel="noreferrer"
				>
					<img className="linkIcon" alt="link icon" src={planeIcon} />
				</a>
				<a
					href="https://www.behance.net/kimseyerik"
					target="_blank"
					rel="noreferrer"
				>
					<img
						className="linkIcon"
						alt="link icon"
						src={behanceIcon}
					/>
				</a>
			</div>
		</StyledContainer>
	);
};

const StyledContainer = styled.div<StyledProps>`
	display: flex;
	flex-direction: column;
	padding: 0 12vw;
	.leftLine {
		width: 1px;
		border: solid 20px #f0f;
	}
	.contentContainer {
		display: flex;
		flex-flow: row wrap;
		justify-content: flex-start;
		width: 100%;
	}
	.linkIcon {
		width: 30px;
		margin: 20px;
	}

	@media (max-width: 568px) {
		.contentContainer {
			display: flex;
			flex-flow: row wrap;
			justify-content: space-around;
			width: 100%;
		}
		.linkIcon {
			width: 30px;
			margin: 0 5px;
			padding: 0;
		}
	}
`;

export default Contact;

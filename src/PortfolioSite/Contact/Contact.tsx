import React, { FC, useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import githubIcon from "../../assets/images/Icons/github.svg";
import dnaIcon from "../../assets/images/Icons/dna.svg";
import soundcloudIcon from "../../assets/images/Icons/soundcloud.svg";
import resumeIcon from "../../assets/images/Icons/resume_pdf.svg";
import planeIcon from "../../assets/images/Icons/paper-plane.svg";

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
			{/* {inView && (
				<motion.div
					className="leftLine"
					animate={{ x: [200, 0] }}
					transition={{ ease: "easeOut", duration: 0.7 }}
				></motion.div>
			)} */}
			{inView && (
				<motion.h1
					animate={{ x: [-200, 0] }}
					transition={{ ease: "easeOut", duration: 0.5 }}
				>
					{`contact / links.`}
				</motion.h1>
			)}
			<div className="contentContainer">
				{/* 
                Icons w/ links:
                -- email addr,
                -- github url,
                -- playground,
                -- soundcloud,
                -- behance,

                 */}
				<img className="linkIcon" src={githubIcon} />
				<img className="linkIcon" src={dnaIcon} />
				<img className="linkIcon" src={soundcloudIcon} />
				<img className="linkIcon" src={resumeIcon} />
				<img className="linkIcon" src={planeIcon} />
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
	}
	.linkIcon {
		width: 30px;
		margin: 10px;
	}
`;

export default Contact;

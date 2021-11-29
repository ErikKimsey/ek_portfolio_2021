import React, { FC, useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import githubIcon from "../../assets/images/Icons/github.svg";
import dnaIcon from "../../assets/images/Icons/dna.svg";
import soundcloudIcon from "../../assets/images/Icons/soundcloud.svg";
import resumeIcon from "../../assets/images/Icons/resume_pdf.svg";
import planeIcon from "../../assets/images/Icons/paper-plane.svg";
import bookDeadIcon from "../../assets/images/Icons/book-dead.svg";
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
                -- github url, github.com/erikkimsey
                -- playground,
                -- soundcloud, https://soundcloud.com/roquet-paque
                -- behance, https://www.behance.net/kimseyerik
                 */}
				<img className="linkIcon" alt="link icon" src={githubIcon} />
				<img className="linkIcon" alt="link icon" src={dnaIcon} />
				<img
					className="linkIcon"
					alt="link icon"
					src={soundcloudIcon}
				/>
				<img className="linkIcon" alt="link icon" src={resumeIcon} />
				<img className="linkIcon" alt="link icon" src={planeIcon} />
				<img className="linkIcon" alt="link icon" src={bookDeadIcon} />
				<img className="linkIcon" alt="link icon" src={blackholeIcon} />
				<img className="linkIcon" alt="link icon" src={behanceIcon} />
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

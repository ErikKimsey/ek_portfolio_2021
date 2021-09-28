import React, { FC, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import styled from "styled-components";
import astronaut from "../assets/images/Icons/astronaut.svg";
import book from "../assets/images/Icons/book-dead-solid.svg";
import DNA from "../assets/images/Icons/dna.svg";
import brain from "../assets/images/Icons/brain.svg";

type Props = {};

type StyledProps = {};

const PortfolioMenu: FC<Props> = (props) => {
	const {} = props;

	const [hasLoaded, setHasLoaded] = useState(false);

	const variants = {
		visible: { opacity: 1, scale: 1 },
		hidden: {
			opacity: 0,
			scale: 0.99,
		},
	};

	useEffect(() => {
		setHasLoaded(true);
	}, []);

	const handleClick = (elem: string) => {
		console.log("handling click");
	};

	return (
		<StyledContainer
			as={motion.div}
			isVisible={hasLoaded}
			initial="hidden"
			variants={variants}
			animate={hasLoaded ? "visible" : "hidden"}
		>
			<motion.div
				className="menuItem"
				whileHover={{ rotate: "15deg", duration: 0.1 }}
				animate={{ y: [-300, 0] }}
				transition={{ ease: "easeInOut", duration: 0.3 }}
			>
				<NavLink to="/portfolio" className="navLink">
					<motion.img
						src={astronaut}
						alt="home or me"
						whileHover={{ rotate: "15deg", duration: 0.1 }}
					/>
				</NavLink>
			</motion.div>
			{/* <motion.div className="menuItem">
				<NavLink to="/portfolio/resume" className="navLink">
                Resume
				</NavLink>
			</motion.div> */}
			<motion.div
				className="menuItem"
				animate={{ y: [-300, 0] }}
				transition={{ ease: "easeInOut", duration: 0.5 }}
				whileHover={{ rotate: "15deg", duration: 0.1 }}
			>
				<NavLink to="/portfolio/work" className="navLink">
					<motion.img
						src={DNA}
						alt="my work"
						whileHover={{ rotate: "15deg", duration: 0.1 }}
					/>
				</NavLink>
			</motion.div>
			<motion.div
				className="menuItem"
				animate={{ y: [-300, 0] }}
				transition={{ ease: "easeInOut", duration: 0.7 }}
			>
				<NavLink to="/portfolio/education" className="navLink">
					<motion.img
						src={brain}
						alt="my digital playground"
						whileHover={{ rotate: "15deg", duration: 0.1 }}
					/>
				</NavLink>
			</motion.div>
		</StyledContainer>
	);
};

const StyledContainer = styled.div<StyledProps>`
	position: fixed;
	left: 20px;
	top: 200px;
	width: 100px;
	height: 30%;
	display: flex;
	flex-flow: column wrap;
	align-content: space-around;
	justify-content: space-around;
	align-self: flex-start;
	justify-self: flex-start;
	font-weight: 100;
	font-size: 1.3em;
	/* font-weight: 200; */
	.menuItem {
		/* transform: rotateZ(-90deg); */
		margin: 14px 10px;
		width: 50px;
	}
	img {
		fill: #fff;
	}
	a.navLink {
		text-decoration: none;
		margin: 0;
		text-align: center;
		color: #fff;
		text-transform: uppercase;
	}

	@media (max-width: 768px) {
		left: 10px;
		width: 50px;
		height: 50%;
		top: 100px;
	}
`;

export default PortfolioMenu;

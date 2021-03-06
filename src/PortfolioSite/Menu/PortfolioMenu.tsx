import React, { FC, useState, useEffect } from "react";
import Icons from "../Icons";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import styled from "styled-components";
import astronaut from "../assets/images/Icons/astronaut.svg";
import DNA from "../assets/images/Icons/dna.svg";
import brain from "../assets/images/Icons/brain.svg";

type Props = {};

type StyledProps = {
	displayMenu?: boolean;
	isVisible?: boolean;
};

const PortfolioMenu: FC<Props> = (props) => {
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
				animate={{ y: [-300, 0] }}
				transition={{ ease: "easeInOut", duration: 0.3 }}
			>
				<NavLink
					exact
					to="/portfolio"
					className="navLink"
					activeClassName="activeNavLink"
				>
					<motion.img
						src={astronaut}
						alt="home or me"
						whileHover={{ rotate: "15deg" }}
					/>
				</NavLink>
			</motion.div>
			<motion.div
				className="menuItem"
				animate={{ y: [-300, 0] }}
				transition={{ ease: "easeInOut", duration: 0.5 }}
			>
				<NavLink
					to="/portfolio/work"
					className="navLink"
					activeClassName="activeNavLink"
				>
					<motion.img
						src={DNA}
						alt="my work"
						whileHover={{ rotate: "15deg" }}
					/>
				</NavLink>
			</motion.div>
			<motion.div
				className="menuItem"
				animate={{ y: [-300, 0] }}
				transition={{ ease: "easeInOut", duration: 0.7 }}
			>
				<NavLink
					to="/portfolio/education"
					className="navLink"
					activeClassName="activeNavLink"
				>
					<motion.img
						src={brain}
						alt="my digital playground"
						whileHover={{ rotate: "15deg" }}
					/>
				</NavLink>
			</motion.div>
			<Icons />
		</StyledContainer>
	);
};

const StyledContainer = styled.div<StyledProps>`
	box-sizing: content-box;
	position: fixed;
	left: 20px;
	top: 200px;
	width: 100px;
	display: flex;
	flex-flow: column wrap;
	align-content: space-around;
	justify-content: space-around;
	align-self: flex-start;
	justify-self: flex-start;
	font-weight: 100;
	font-size: 1.3em;
	z-index: 1001;

	.menuItem {
	}

	img {
		width: 50px;
		margin: 10px;
	}

	a {
		text-decoration: none;
	}

	.navLink {
	}

	.activeNavLink {
		height: 60px;
		border-right: solid 10px #f0f;
	}

	@media (max-width: 768px) {
		padding: 0;
		padding-right: 10px;
		left: 0px;
		top: 100px;
		display: flex;
		flex-flow: column wrap;
		justify-content: flex-start;
		align-items: center;

		.menuItem {
			padding: 10px;
			width: 35px;
		}

		img {
			width: 35px;
		}
	}

	@media (max-width: 568px) {
		position: relative;
		width: 90%;
		height: auto;
		top: 0px;
		padding: 0;
		margin-right: 20px;
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
	}
`;

export default PortfolioMenu;

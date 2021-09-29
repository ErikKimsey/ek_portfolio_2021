import React, { FC, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import styled from "styled-components";
import astronaut from "../assets/images/Icons/astronaut.svg";
import book from "../assets/images/Icons/book-dead-solid.svg";
import DNA from "../assets/images/Icons/dna.svg";
import brain from "../assets/images/Icons/brain.svg";

type Props = {};

type StyledProps = {
	displayMenu?: boolean;
};

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
				animate={{ y: [-300, 0] }}
				transition={{ ease: "easeInOut", duration: 0.3 }}
			>
				<NavLink
					exact
					to="/portfolio"
					// className="navLink"
					activeClassName="activeNavLink"
				>
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
			>
				<NavLink
					to="/portfolio/work"
					className="navLink"
					activeClassName="activeNavLink"
				>
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
				<NavLink
					to="/portfolio/education"
					className="navLink"
					activeClassName="activeNavLink"
				>
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
	display: flex;
	flex-flow: column wrap;
	align-content: space-around;
	justify-content: space-around;
	align-self: flex-start;
	justify-self: flex-start;
	font-weight: 100;
	font-size: 1.3em;

	.menuItem {
		/* margin: 20px;
		margin-left: 50px; */
	}
	img {
		width: 50px;
		margin: 10px;
	}

	a {
		text-decoration: none;
	}

	/* .navLink {
		height: 60px;
		width: 60px;
		margin: 10px;
		text-align: center;
		color: #fff;
		text-transform: uppercase;
	} */
	.activeNavLink {
		height: 60px;
		border-right: solid 10px #f0f;
	}

	@media (max-width: 768px) {
		left: 10px;
		width: 50px;
		top: 100px;
		display: flex;
		flex-flow: column wrap;
		justify-content: flex-start;

		.menuItem {
			margin: 10px;
			width: 35px;
		}
	}
`;

export default PortfolioMenu;

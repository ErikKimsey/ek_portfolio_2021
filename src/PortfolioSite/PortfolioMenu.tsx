import React, { FC, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import styled from "styled-components";

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
			transition={{ duration: 7 }}
		>
			<div className="menuItem">
				<NavLink to="/portfolio" className="navLink">
					Home
				</NavLink>
			</div>
			<div className="menuItem">
				<NavLink to="/portfolio/resume" className="navLink">
					Resume
				</NavLink>
			</div>
			<div className="menuItem">
				<NavLink to="/portfolio/work" className="navLink">
					Work
				</NavLink>
			</div>
			<div className="menuItem">
				<NavLink to="/portfolio/education" className="navLink">
					Edu.
				</NavLink>
			</div>
		</StyledContainer>
	);
};

const StyledContainer = styled.div<StyledProps>`
	position: fixed;
	left: 20px;
	top: 200px;
	width: 100px;
	height: 50%;
	display: flex;
	flex-flow: column wrap;
	align-content: space-around;
	justify-content: space-around;
	align-self: flex-start;
	justify-self: flex-start;
	.menuItem {
		transform: rotateZ(-90deg);
		padding: 2px;
	}
	a.navLink {
		text-decoration: none;
		margin: 0;
		text-align: center;
		color: #fff;
		text-transform: uppercase;
		transition: 0.5s;
		&:hover {
			color: #ccc;
			font-weight: 400;
		}
	}

	@media (max-width: 700px) {
		left: 10px;
		width: 50px;
		height: 100vh;
	}
`;

export default PortfolioMenu;

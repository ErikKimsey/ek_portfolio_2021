import React, { FC, useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";
import ContentDisplay from "./ContentComponents/ContentDisplay";
import PortfolioMenu from "./PortfolioMenu";
import Banner from "./Banner";
import { Education, Work } from "./ContentComponents";
import UpArrow from "../assets/images/Icons/arrow_up.svg";
import DownArrow from "../assets/images/Icons/arrow_down.svg";
// import ArrowNavComponent from "./ArrowNavComponent/ArrowNavComponent";

const BREAKPOINTS = {
	lg: 1024,
	md: 768,
	sm: 480,
};

type Props = {};

interface StyledProps {
	bkgrd?: string;
}

const PortfolioLanding: FC<Props> = (props) => {
	const [inView, setInView] = React.useState(false);

	const [isPrev, setIsPrev] = useState(false);
	const [isNext, setIsNext] = useState(true);

	useEffect(() => {
		window.addEventListener("wheel", (e) => {
			console.log(e);
		});
		return () => {
			window.removeEventListener("wheel", (e) => {
				console.log(e);
			});
		};
	}, []);

	return (
		<StyledContainer>
			<PortfolioMenu />
			<Banner />
			<div className="scrollPrev">
				{isPrev && <img src={UpArrow} alt="Scroll to Prev" />}
			</div>
			<Switch>
				<Route exact path="/portfolio/" component={Work} />
				<Route exact path="/portfolio/work" component={Work} />
				<Route
					exact
					path="/portfolio/education"
					component={Education}
				/>
				{/* <Route
                        exact
                        path="/portfolio/education"
                        component={Education}
                    /> */}
			</Switch>
			{/* <ArrowNavComponent /> */}
			{/* <Education /> */}
			{/* <div className="container">{<ContentDisplay />}</div> */}
			<div className="scrollNext">
				{isNext && <img src={DownArrow} alt="Scroll to next" />}
			</div>
		</StyledContainer>
	);
};

const StyledContainer = styled.div<StyledProps>`
	width: 100%;
	display: flex;
	flex-direction: column;
	margin: auto;
	align-self: center;

	.scrollNext {
		position: absolute;
		display: flex;
		flex-direction: row;
		justify-content: center;
		bottom: 100px;
		img {
			width: 50px;
			opacity: 0.5;
			transition: all 300ms ease-in-out;
			&:hover {
				transform: scale(1.2);
			}
		}
	}

	.scrollPrev {
		position: absolute;
		display: flex;
		flex-direction: row;
		justify-content: center;
		top: 100px;
		img {
			width: 50px;
			opacity: 0.5;
			transition: all 300ms ease-in-out;
			&:hover {
				transform: scale(1.2);
			}
		}
	}

	@media (max-width: 568px) {
		width: 96vw;
		height: 96vh;
		/* width: 100%; */
	}
`;

export default PortfolioLanding;

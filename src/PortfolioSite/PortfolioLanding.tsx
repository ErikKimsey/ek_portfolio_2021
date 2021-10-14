import React, { FC, useEffect, useState, button } from "react";
import { Switch, Route, NavLink, useHistory } from "react-router-dom";
import styled from "styled-components";
import ContentDisplay from "./ContentComponents/ContentDisplay";
import PortfolioMenu from "./PortfolioMenu";
import Banner from "./Banner";
import { Education, Work } from "./ContentComponents";
import UpArrow from "../assets/images/Icons/arrow_up.svg";
import DownArrow from "../assets/images/Icons/arrow_down.svg";
import { YELLOW } from "../styles/colors";
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
	const history = useHistory();

	const [isPrev, setIsPrev] = useState(true);
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
				{isPrev && (
					<button>
						<img src={UpArrow} alt="Scroll to Prev" />
					</button>
				)}
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
			<div className="scrollNext" onClick={() => history.goForward()}>
				{isNext && (
					<button>
						<img src={DownArrow} alt="Scroll to next" />
					</button>
				)}
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

	.scrollPrev {
		position: fixed;
		display: flex;
		flex-direction: row;
		top: 100px;
		right: 50%;
		button {
			background: rgba(0, 0, 0, 0);
			box-sizing: content-box;
			border-color: #000 #000 #f0f #000;
			padding: 10px;
			img {
				width: 50px;
				opacity: 0.5;
				transform: rotate(-30deg);
				transition: all 300ms ease-in-out;
			}
			&:hover {
				transform: scale(1.2);
			}
		}
	}

	.scrollNext {
		position: fixed;
		display: flex;
		flex-direction: row;
		bottom: 100px;
		right: 50%;
		button {
			background: rgba(0, 0, 0, 0);
			box-sizing: content-box;
			border-color: #000 #000 #f0f #000;
			padding: 10px;
			img {
				width: 50px;
				opacity: 0.5;
				transform: rotate(-30deg);
				transition: all 300ms ease-in-out;
				&:hover {
					transform: scale(1.2);
				}
			}
			&::active {
				background: #f0f;
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

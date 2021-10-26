import React, { FC } from "react";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";
import Menu from "../Menu/Menu";
import Banner from "./Banner";
import { Education, LandingComponent, Work } from "./ContentComponents";
// import ArrowNavComponent from "./ArrowNavComponent/ArrowNavComponent";

type Props = {};

interface StyledProps {
	bkgrd?: string;
}

const PortfolioLanding: FC<Props> = (props) => {
	return (
		<StyledContainer>
			<Banner />
			<Switch>
				<Route exact path="/portfolio/" component={LandingComponent} />
				<Route exact path="/portfolio/work" component={Work} />
				<Route
					exact
					path="/portfolio/education"
					component={Education}
				/>
			</Switch>
			{/* <Menu /> */}
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
		/* width: 96vw; */
		/* height: 96vh; */
		/* width: 100%; */
	}
`;

export default PortfolioLanding;

import React, { FC } from "react";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";
import ContentDisplay from "./ContentComponents/ContentDisplay";
import PortfolioMenu from "./PortfolioMenu";
import Banner from "./Banner";
import { Education, LandingComponent, Work } from "./ContentComponents";
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
	return (
		<StyledContainer>
			{/* <PortfolioMenu /> */}
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
			{/* <ArrowNavComponent /> */}
			{/* <Education /> */}
			{/* <div className="container">{<ContentDisplay />}</div> */}
		</StyledContainer>
	);
};

const StyledContainer = styled.div<StyledProps>`
	width: 96vw;
	height: 96vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin: 0;
	padding: 0;
	align-self: center;

	@media (max-width: 568px) {
		width: 96vw;
		height: 96vh;
		/* width: 100%; */
	}
`;

export default PortfolioLanding;

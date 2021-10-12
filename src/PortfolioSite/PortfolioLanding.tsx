import React, { FC } from "react";
import styled from "styled-components";
import ContentDisplay from "./ContentComponents/ContentDisplay";
import PortfolioMenu from "./PortfolioMenu";
import Banner from "./Banner";
import { Education, Work } from "./ContentComponents";
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
			<PortfolioMenu />
			<Banner />
			{/* <ArrowNavComponent /> */}
			<Work />
			<Education />
			{/* <div className="container">{<ContentDisplay />}</div> */}
		</StyledContainer>
	);
};

const StyledContainer = styled.div<StyledProps>`
	max-width: 1400px;
	width: 100%;
	/* margin: 0; */
	display: flex;
	flex-direction: column;
	/* padding-left: 100px; */
	/* margin-top: 0px; */
	/* margin: 20px 100px; */
	margin: auto;
	align-self: center;

	@media (max-width: 568px) {
		width: 100%;
		padding: 0;
		margin: 0;
	}
`;

export default PortfolioLanding;

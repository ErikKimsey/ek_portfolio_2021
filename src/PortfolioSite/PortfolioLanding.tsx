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
			<Banner />
			{/* <PortfolioMenu /> */}
			{/* <ArrowNavComponent /> */}
			<Work />
			<Education />
			{/* <div className="container">{<ContentDisplay />}</div> */}
		</StyledContainer>
	);
};

const StyledContainer = styled.div<StyledProps>`
	margin: 0;
	/* position: relative;
	margin: auto;
	padding: 10px;
	width: 100%;
	height: 100%;
	color: #fff;
	display: flex;
	flex-flow: column wrap;
	justify-content: flex-start;
	align-items: space-between;

	h1 {
		padding: 0;
		margin: 0;
		line-height: 0.8;
	}

	.container {
		display: flex;
		flex-flow: column;
		justify-content: flex-end;
		align-items: center;
		align-self: center;
	}
	@media (max-width: 568px) {
		width: auto;
		margin-left: 50px;
		.container {
		}
	} */

	@media (max-width: 320px) {
		width: 100%;
		background-color: #586c8a;
	}

	@keyframes breathing {
		0% {
			transform: scale(1);
		}
		50% {
			transform: scale(1.2);
		}
		100% {
			transform: scale(1);
		}
	}
`;

export default PortfolioLanding;

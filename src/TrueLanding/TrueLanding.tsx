import { FC } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { BreakPoint } from "../styles/breakpoints";

type Props = {};

type StyledProps = {};

const TrueLanding: FC<Props> = (props) => {
	return (
		<StyledContainer>
			<div className="screenHalf">
				<NavLink to="/portfolio/">
					<h1 className="halfLabel">Portfolio Site</h1>
				</NavLink>
			</div>
			<div className="line"></div>
			<div className="screenHalf">
				<NavLink to="/playground">
					<h1 className="halfLabel">Digital Playground</h1>
				</NavLink>
			</div>
		</StyledContainer>
	);
};

const StyledContainer = styled.div<StyledProps>`
	height: 100vh;
	width: 100%;
	display: flex;
	flex-direction: row;
	font-family: "Wipeout";
	.screenHalf {
		width: 50%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		/* border: solid 1px #333; */
	}
	.line {
		background-color: #333;
		width: 2px;
		margin: 10vh 0;
	}

	a {
		text-decoration: none;
		color: #fff;
	}
	.halfLabel {
		&:hover {
			font-size: 210%;
		}
	}

	@media ${BreakPoint.lg} {
		.line {
			margin: 20vh 0;
		}
	}

	@media ${BreakPoint.md} {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		h1 {
			font-size: 1.5em;
		}
		.screenHalf {
			height: auto;
			padding: 20px 0;
		}
		.line {
			margin: 0;
			width: 80vw;
			height: 2px;
		}
	}

	@media ${BreakPoint.sm} {
		.screenHalf {
			width: 100%;
		}
		h1 {
			font-size: 1.3em;
		}
		.line {
			margin: 0;
		}
	}
`;

export default TrueLanding;

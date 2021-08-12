import React, { FC, useState, useEffect } from "react";
import styled from "styled-components";
import { BreakPoint } from "../styles/breakpoints";
// import Menu from "../Menu/Menu";
// import "./Banner.scss";

type Props = {};

type StyledProps = {
	scrollTop: boolean;
};

const Banner: FC<Props> = (props) => {
	const {} = props;
	let [scrollTop, setScrollTop] = useState<boolean>(true);

	window.addEventListener("scroll", () => {
		handleScroll();
	});

	const handleScroll = () => {
		if (window.scrollY !== 0) {
			setScrollTop(false);
		}
		if (window.scrollY === 0) {
			setScrollTop(true);
		}
	};

	return (
		<StyledContainer
			style={{
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
			scrollTop={scrollTop}
		>
			<div className={"h1s " + (scrollTop === true ? "" : "scrolling")}>
				<h1 className="wipeout" data-text="Erik Kimsey's">
					Erik Kimsey's{" "}
				</h1>
				<h1 className="wipeout digitalPlayground" data-text="Digital">
					Digital Playground
				</h1>
			</div>
			<div className="sloganContainer"></div>
			{/* <Menu /> */}
		</StyledContainer>
	);
};

const StyledContainer = styled.div<StyledProps>`
	padding: 0 0 0 50px;
	margin: 0;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	background-color: #000;
	color: rgba(255, 255, 255, 0.5);

	.wipeout {
		color: rgba(255, 255, 255, 1);
		font-family: "Angel";
		padding: 20px 20px;
		margin: 0px;
		margin-top: 20px;
	}

	.digitalPlayground {
		padding-left: 20px;
	}
	.h1s {
		display: flex;
		flex-direction: row;
		font-size: 1.7em;
		transition: font-size 1s;
		will-change: font-size;
	}

	.scrolling {
		font-size: 1.2em;
	}

	@media ${BreakPoint.xl} {
		display: flex;
		flex-direction: column;
		align-items: space-between;
		padding: 10px 10px 0px 50px;
		.h1s {
			width: 100%;
			display: flex;
			flex-direction: column;
			font-size: 1.5em;
			transition: font-size 1s;
			will-change: font-size;
		}
		.wipeout {
			font-family: "Angel";
			margin: 0;
			padding: 0px;
		}
		.scrolling {
			font-size: 1em;
		}
	}

	@media ${BreakPoint.md} {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		padding: 10px 10px 0px 0px;
		.h1s {
			display: flex;
			flex-direction: column;
			font-size: 1em;
			padding-left: 30px;
		}
		.scrolling {
			animation-name: none;
		}
	}

	@keyframes shrinkBanner {
		0% {
			font-size: 100%;
		}
		100% {
			font-size: calc(50%);
		}
	}
`;

export default Banner;

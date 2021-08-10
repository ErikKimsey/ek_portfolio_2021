import React, { FC, useState, useEffect } from "react";
import styled from "styled-components";
// import Menu from "../Menu/Menu";
// import "./Banner.scss";

type Props = {};

type StyledProps = {
	scrollTop: boolean;
};

function Comp() {
	let monContr = 1300,
		total = 0;
	for (let i = 1; i < 13; i++) {
		total += (total + monContr) * 1.11;
		console.log(total + " / month");
	}
	console.log("total total");
	console.log(total);
}

const Slogan = () => {
	// Comp();
	let pElems = [];
	for (let i = 0; i < 5; i++) {
		pElems.push(
			<p
				className="slogan"
				style={{ color: `rgba(255,255,255, 0.${4 + i})` }}
			>
				the digital art and play-things, of a restless, creative soul.
			</p>
		);
	}
	return pElems;
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
				backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 1)), url(https://i.imgur.com/QISJdLz.png)`,
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
			<div className="sloganContainer">
				{/* {() => {
					Slogan().map((e) => {
						console.log(e);
						return e;
					});
				}} */}
			</div>
			{/* <Menu /> */}
		</StyledContainer>
	);
};

const StyledContainer = styled.div<StyledProps>`
	padding: 0 0 0 0px;
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
	.h1s {
		display: flex;
		flex-direction: row;
		font-size: 1.7em;
	}

	.scrolling {
		color: #f0f;
		animation-duration: 1s;
		animation-name: shrinkBanner;
	}

	@media (max-width: 1040px) {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		padding: 10px 10px 0px 30px;
		.h1s {
			display: flex;
			flex-direction: column;
			font-size: 1em;
		}

		.scrolling {
			animation-name: none;
		}
		.wipeout {
			font-family: "Angel";
			margin: 0;
			padding: 0px;
		}
	}
	@media (max-width: 600px) {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		padding: 10px 10px 0px 30px;
		.h1s {
			display: flex;
			flex-direction: column;
			font-size: 0.8em;
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

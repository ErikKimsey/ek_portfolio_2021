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
			<div
				className="h1s"
				style={scrollTop ? { fontSize: "2em" } : { fontSize: "1em" }}
			>
				<h1 className="wipeout" data-text="Erik Kimsey's">
					Erik Kimsey's{" "}
				</h1>
				<h1 className="wipeout" data-text="Digital">
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
	top: 0px;
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
	}
	.slogan {
		paddingleft: "0px";
		paddingtop: "10px";
		margin: "0px";
		fontsize: "1em";
		letterspacing: "0.3em";
	}

	@media (max-width: 990px) {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		padding: 30px 20px 0px 20px;
		.wipeout {
			font-family: "Wipeout";
			font-size: 2em;
			margin: 2px;
			.digitalPlayground {
				font-size: 3em;
			}
		}
		.h1s {
			display: flex;
			flex-direction: column;
		}
		.slogan {
			width: 80vw;
			paddingleft: 0px;
			paddingtop: 5px;
			margin: 0px;
			fontsize: 0.8em;
		}
	}
`;

export default Banner;

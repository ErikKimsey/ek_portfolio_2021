import React, { FC, useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Marquee from "./Marquee";

type Props = {};

type StyledProps = {
	bannerHeight?: number;
};

const MARQUEE_DATA = [
	"P5",
	"HTML",
	"Sass",
	"CSS",
	"JAvascript",
	"React",
	"React-Native",
];

const TopComponent: FC<Props> = (props) => {
	const thisRef = useRef();
	const [bannerHeight, setBannerHeight] = useState(null);

	useEffect(() => {
		if (thisRef !== undefined) {
			setBannerDimens(thisRef);
		}
	}, []);

	function setBannerDimens(ref) {
		let bH;
		bH = ref.current.children[0].clientHeight;
		console.log("bH");
		console.log(bH);

		setBannerHeight(bH);
	}

	return (
		<StyledContainer ref={thisRef} bannerHeight={bannerHeight}>
			<div className="marquee-container">
				<Marquee
					textInput={MARQUEE_DATA}
					positiveFlow={true}
					textColor="#f0f"
					marqueeSpeed={"12s"}
				/>
				<Marquee
					textInput={MARQUEE_DATA}
					positiveFlow={false}
					textColor="#fff"
					marqueeSpeed={"16s"}
				/>
			</div>
		</StyledContainer>
	);
};

const StyledContainer = styled.div<StyledProps>`
	/* height: calc(100vh - ${(props) => props.bannerHeight}px); */

	width: 100%;
	margin: 0;
	margin-top: 10px;
	.container {
		/* height: 100%; */
		/* width: 100%; */
	}
`;

export default TopComponent;

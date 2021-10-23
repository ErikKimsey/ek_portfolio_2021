import React, { FC, useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Banner from "../../Banner";

type Props = {};

type StyledProps = {
	bannerHeight?: number;
};

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
		setBannerHeight(bH);
	}

	return (
		<StyledContainer ref={thisRef} bannerHeight={bannerHeight}>
			{/* <Banner /> */}
			<div className="container"></div>
		</StyledContainer>
	);
};

const StyledContainer = styled.div<StyledProps>`
	height: calc(100vh - ${(props) => props.bannerHeight}px);
	width: 100%;
	margin: 0;
	margin-top: 10px;
	.container {
		/* height: 100%; */
		/* width: 100%; */
	}
`;

export default TopComponent;

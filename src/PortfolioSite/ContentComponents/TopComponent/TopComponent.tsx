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
			<Banner />
			<div className="container"></div>
		</StyledContainer>
	);
};

const StyledContainer = styled.div<StyledProps>`
	/* height: calc(
		100vh - ${(props) => props.bannerHeight && props.bannerHeight}px
	); */
	height: 100vh;
	width: 100%;
`;

export default TopComponent;

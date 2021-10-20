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
		setBannerDimens();
	}, []);

	function setBannerDimens() {
		let bH = thisRef.current.children[0].clientHeight;
		console.log(bH);
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
	height: 100vh;
	width: 100%;
	border: solid 1px #fff;
`;

export default TopComponent;

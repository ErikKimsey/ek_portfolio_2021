import React, { FC, useRef, useState } from "react";
import styled from "styled-components";
import { Canvas, useFrame } from "@react-three/fiber";
import { Box } from "./Box";

type Props = {};

type StyledProps = {};

const PortfolioLanding: FC<Props> = (props) => {
	const {} = props;

	return (
		<StyledContainer>
			<Canvas>
				<ambientLight />
				<pointLight position={[10, 10, 10]} />
				<Box position={[-1.2, 0, 0]} />
				<Box position={[1.2, 0, 0]} />
			</Canvas>
			,
		</StyledContainer>
	);
};

const StyledContainer = styled.div<StyledProps>`
	background-color: #000;
	color: #fff;
	display: flex;
	flex-flow: column wrap;
`;

export default PortfolioLanding;

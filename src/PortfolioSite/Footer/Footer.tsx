import React, { FC, useState, useEffect } from "react";
import styled from "styled-components";

type Props = {};

type StyledProps = {};

const Footer: FC<Props> = (props) => {
	const {} = props;

	return <StyledContainer></StyledContainer>;
};

const StyledContainer = styled.div<StyledProps>`
	height: 50px;
	border-top: solid 1px #f0f;

	@media (max-width: 768px) {
		/* height: 100px; */
	}
	@media (max-width: 568px) {
		/* height: 100px; */
	}
`;

export default Footer;

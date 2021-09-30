import React, { FC } from "react";
import styled from "styled-components";

type Props = {};

type StyledProps = {};

const Footer: FC<Props> = (props) => {
	return <StyledContainer></StyledContainer>;
};

const StyledContainer = styled.div<StyledProps>`
	position: absolute;
	display: flex;
	width: 50%;
	bottom: 0px;
	height: 50px;
	border-top: solid 1px #f0f;
	align-self: flex-end;
	/* justify-self: flex-end; */

	@media (max-width: 768px) {
		/* height: 100px; */
	}
	@media (max-width: 568px) {
		/* height: 100px; */
	}
`;

export default Footer;

import React, { FC, useState, useEffect } from "react";
import styled from "styled-components";

type Props = {
	componentData?: {} | undefined;
};

type StyledProps = {};

const ContentTemplateComponent: FC<Props> = (props) => {
	const { componentData } = props;

	return <StyledContainer></StyledContainer>;
};

const StyledContainer = styled.div<StyledProps>``;

export default ContentTemplateComponent;

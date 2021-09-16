import React, { FC, useState, useEffect } from "react";
import styled from "styled-components";

type Props = {};

type StyledProps = {};

const Resume: FC<Props> = (props) => {
	const {} = props;

	return (
		<StyledContainer>
			<h3 className="header">resume</h3>
			<p>
				Leverage agile frameworks to provide a robust synopsis for high
				level overviews. Iterative approaches to corporate strategy
				foster collaborative thinking to further the overall value
				proposition. Organically grow the holistic world view of
				disruptive innovation via workplace diversity and empowerment.
			</p>
		</StyledContainer>
	);
};

const StyledContainer = styled.div<StyledProps>`
	width: 100%;
	height: 100%;
	font-family: "Desib";
	p {
		font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
			sans-serif;
	}
`;

export default Resume;

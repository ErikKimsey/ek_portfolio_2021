import React, { FC, useState, useEffect } from "react";
import styled from "styled-components";

type Props = {};

type StyledProps = {};

const Education: FC<Props> = (props) => {
	const {} = props;

	return (
		<StyledContainer>
			<h1>education.</h1>
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
	height: 600px;
	h1,
	p {
		padding: 10px;
		color: #fff;
		font-family: "Desib";
		font-weight: 200;
	}
	p {
		color: #fff;
		font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
			sans-serif;
		font-weight: 200;
		text-transform: uppercase;
	}
`;

export default Education;

import React, { FC, useState, useEffect } from "react";
import styled from "styled-components";

type Props = {};

type StyledProps = {};

const ContentDisplay: FC<Props> = (props) => {
	const {} = props;

	return (
		<StyledContainer>
			{/* <Switch>
					<Route path={}>
                        <h1>1</h1>
                    </Route>
					<Route path={}>
                        <h1>2</h1>
                    </Route>
					<Route path={}>
                        <h1>3</h1>
                    </Route>
			</Switch> */}
			<div>
				Leverage agile frameworks to provide a robust synopsis for high
				level overviews. Iterative approaches to corporate strategy
				foster collaborative thinking to further the overall value
				proposition. Organically grow the holistic world view of
				disruptive innovation via workplace diversity and empowerment.
			</div>
		</StyledContainer>
	);
};

const StyledContainer = styled.div<StyledProps>`
	width: 70%;
	height: auto;
	padding: 20px;
	/* border: solid 1px #fff; */
`;

export default ContentDisplay;

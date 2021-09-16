import React, { FC, useState, useEffect } from "react";
import styled from "styled-components";
import Resume from "./Resume/Resume";

type Props = {};

type StyledProps = {};

const ContentDisplay: FC<Props> = (props) => {
	const {} = props;

	return (
		<StyledContainer>
			<Resume />
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
		</StyledContainer>
	);
};

const StyledContainer = styled.div<StyledProps>`
	width: 70%;
	height: auto;
	/* padding: 20px; */
	/* border: solid 1px #fff; */
`;

export default ContentDisplay;

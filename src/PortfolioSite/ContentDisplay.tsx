import React, { FC, useState, useEffect } from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";
import Education from "./Education/Education";
import Resume from "./Resume/Resume";
import Work from "./Work/Work";

type Props = {};

type StyledProps = {};

const ContentDisplay: FC<Props> = (props) => {
	const {} = props;

	return (
		<StyledContainer>
			{/* <Switch> */}
			<Route path="/portfolio/" component={Resume} />
			{/* <Resume /> */}
			{/* </Route> */}
			<Route path="/portfolio/work/" component={Work} />
			{/* <Work /> */}
			{/* </Route> */}
			{/* <Route path="/portfolio/resume/" component={}>
				<Resume />
			</Route> */}
			<Route path="/portfolio/education/" component={Education} />
			{/* <Education /> */}
			{/* </Route> */}
			{/* </Switch> */}
		</StyledContainer>
	);
};

const StyledContainer = styled.div<StyledProps>`
	width: 600px;
	height: 400px;
	/* padding: 20px; */
	/* border: solid 1px #fff; */
`;

export default ContentDisplay;

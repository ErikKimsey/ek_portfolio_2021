import { motion } from "framer-motion";
import React, { FC, useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
import { Work, Resume, Education, LandingComponent } from "./index";

type Props = {};

type StyledProps = {};

// const SomeComp = () => {
// 	const { ref, inView, entry } = useInView({
// 		/* Optional options */
// 		threshold: 0.5,
// 	});

// 	console.log(`In View: ${inView}`);

// 	return (
// 		<div
// 			ref={ref}
// 			style={{ height: "400px", width: "600px", background: "#f0f" }}
// 		>
// 			<h2>{`Header inside viewport ${inView}.`}</h2>
// 		</div>
// 	);
// };

const ContentDisplay: FC<Props> = (props) => {
	let [content, setContent] = useState([]);

	useEffect(() => {
		if (
			Work !== undefined &&
			Resume !== undefined &&
			Education !== undefined
		) {
			const _cont = [Work, Resume, Education];
			setContent(_cont);
		}
	}, []);

	return (
		<StyledContainer>
			{content.length > 0 && (
				<motion.div className="contentContainer">
					<Switch>
						<Route exact path="/portfolio">
							<LandingComponent />
						</Route>
						<Route path="/portfolio/work">
							<Work />
						</Route>
					</Switch>
				</motion.div>
			)}
		</StyledContainer>
	);
};

const StyledContainer = styled.div<StyledProps>`
	position: relative;
	top: 14vh;
	display: flex;
	flex-flow: column wrap;
	justify-content: flex-start;
	align-items: flex-start;

	.contentContainer {
		width: 80%;
	}

	.inViewContainer {
		width: 500px;
		display: flex;
		flex-direction: column;
	}

	@media (max-width: 700px) {
		top: 100px;
		height: 100%;
		width: 100%;
		.contentContainer {
		}
	}
`;

export default ContentDisplay;

import React, { FC, useState, useEffect } from "react";
import styled from "styled-components";

type Props = {
	textInput?: string[];
	positiveFlow?: boolean;
	textColor?: string;
	marqueeSpeed?: string;
};

type StyledProps = {
	positiveFlow?: boolean;
	textColor?: string;
	marqueeSpeed?: string;
};

const Marquee: FC<Props> = (props) => {
	const { textInput, positiveFlow, textColor, marqueeSpeed } = props;
	let [input, setInput] = useState<string[]>();
	let [flow, setFlow] = useState<boolean>();
	let [color, setColor] = useState<string>();
	let [speed, setSpeed] = useState<string>();
	console.log(textInput);

	useEffect(() => {
		if (textInput && textInput.length > 0) setInput(textInput);
		setFlow(positiveFlow);
		setColor(textColor);
		if (marqueeSpeed) setSpeed(marqueeSpeed);
	}, []);

	return (
		<StyledContainer
			positiveFlow={flow}
			textColor={color}
			marqueeSpeed={speed}
		>
			{input && (
				<div className="marquee">
					{input.map((e, i) => {
						return <div className="marquee-item">{e}</div>;
					})}
				</div>
			)}
		</StyledContainer>
	);
};

const StyledContainer = styled.div<StyledProps>`
	width: 100%;
	background-color: #222;
	padding: 0;
	margin: 20px;
	font-family: "ComfortaaBold";
	height: 9vw;

	.marquee {
		overflow: hidden;
		position: absolute;
		width: 100%;
		height: 100%;
		width: auto;
		height: 9vw;
		padding: 0;
		margin: 0;
		display: flex;
		/* justify-content: space-between; */
		color: ${(props) => props.textColor};
		font-size: 4vw;
		font-weight: 100;
		animation: ${(props) =>
				props.positiveFlow === true
					? "MarqueePositive"
					: "MarqueeNegative"}
			12s infinite linear;
	}
	.marquee-item {
		margin-right: 4vw;
		width: auto;
		white-space: nowrap;
	}

	@keyframes MarqueePositive {
		0% {
			transform: translateX(-100%);
		}
		100% {
			transform: translateX(100%);
		}
	}
	@keyframes MarqueeNegative {
		0% {
			transform: translateX(200%);
		}
		100% {
			transform: translateX(-100%);
		}
	}
`;

export default Marquee;

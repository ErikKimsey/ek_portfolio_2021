import React, { FC, useState, useEffect } from "react";
import styled from "styled-components";

type Props = {
	textInput?: string[];
	positiveFlow?: boolean;
	textColor?: string;
};

type StyledProps = {
	positiveFlow?: boolean;
	textColor?: string;
};

const Marquee: FC<Props> = (props) => {
	const { textInput, positiveFlow, textColor } = props;
	let [input, setInput] = useState<string[]>();
	let [flow, setFlow] = useState<boolean>();
	let [color, setColor] = useState<string>();
	console.log(textInput);

	useEffect(() => {
		if (textInput && textInput.length > 0) setInput(textInput);
		setFlow(positiveFlow);
		setColor(textColor);
	}, []);

	return (
		<StyledContainer positiveFlow={flow} textColor={color}>
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
	padding: 0;
	margin: 20px;
	font-family: "ComfortaaBold";

	.marquee {
		width: 100%;
		padding: 0;
		margin: 0;
		display: flex;
		justify-content: space-between;
		color: ${(props) => props.textColor};
		font-size: 8vw;
		font-weight: 100;
		animation: ${(props) =>
				props.positiveFlow === true
					? "MarqueePositive"
					: "MarqueeNegative"}
			10s infinite linear;
	}
	.marquee-item {
		margin-right: 20px;
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
			transform: translateX(100%);
		}
		100% {
			transform: translateX(-100%);
		}
	}
`;

export default Marquee;

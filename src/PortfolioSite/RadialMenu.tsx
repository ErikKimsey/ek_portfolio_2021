import React, { FC, useState, useEffect } from "react";
import styled from "styled-components";

const menuItemsData = [
	{ id: 0, title: "home" },
	{ id: 1, title: "resume" },
	{ id: 2, title: "work" },
	{ id: 3, title: "yayaya" },
	{ id: 4, title: "blutrbla" },
];

type Props = {};

type StyledProps = {
	midW?: number;
	midH?: number;
};

const RadialMenu: FC<Props> = (props) => {
	const {} = props;
	let [midH, setMidH] = useState(window.innerHeight / 2);
	let [midW, setMidW] = useState(window.innerWidth / 2);
	let [centerPoint, setCenterPoint] = useState([]);
	let [radius, setRadius] = useState(222);
	let [numOfItems, setNumOfItems] = useState(5);

	useEffect(() => {
		let midH = window.innerHeight / 2;
		let midW = window.innerWidth / 2;
		setCenterPoint([midW, midH]);
	}, []);

	const calculatePosition = (i: number, theta: number) => {
		// x = centerPoint[0] + radius * sin (360/(numOfItems * i))
		// y = centerPoint[1] - radius * (1 - cos(360/(numOfItems * i))
		let x, y;
		if (midW != undefined && midH != undefined) {
			x = midW + radius * Math.sin(theta * i);
			y = midH - radius * (1 - Math.cos(theta * i));
			console.log(y);
		}
		return { x, y };
	};

	const createMenu = () => {
		let theta = (2 * Math.PI) / 5;
		return menuItemsData.map((e, i) => {
			let { x, y } = calculatePosition(i, theta);
			console.log(y);

			return <div className="menuItem" style={{ left: x, top: y }}></div>;
		});
	};

	return (
		<StyledContainer midW={midW} midH={midH}>
			{createMenu()}
		</StyledContainer>
	);
};

const StyledContainer = styled.div<StyledProps>`
	top: ${(props) => props.midH / 2 - 200}px;
	left: ${(props) => props.midW / 2 - 200}px;
	width: 400px;
	height: 400px;
	background-color: #222;
	.menuItem {
		position: absolute;
		width: 100px;
		height: 100px;
		background-color: #fff;
		border-radius: 100px;
	}
`;

export default RadialMenu;

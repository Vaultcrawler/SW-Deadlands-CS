import './DiceProperty.css';
import { useState } from "react";

function DiceProperty({ name, level, attribute }) {

	const [_level, setLevel] = useState(level);
	const selectedStyle = { "color": "cadetblue" };
	const diceRange = [];

	for(let i = 0; i < 5; i++)
	{
		let cStyle;
		if (i === _level - 1)
		{
			cStyle = selectedStyle;
		}
		const cKey = 4 + i * 2;
		const args = [i + 1];
		diceRange.push(<p style={cStyle} key={cKey} onClick={() => { onClickDice(args) }}>{cKey}</p>);
	}

	if (!attribute)
	{
		attribute = "";
	}

	const nameStyle = {
		width: "10em",
		textAlign: "left",
		overflow: "auto"
	};

	const extraInformation = attribute ? <p>{attribute}</p> : <p>{_level}</p>;

	const content = (
		<div className='Dicerow'>
			{diceRange}
			{extraInformation}
			<p style={nameStyle}>{name}</p>
		</div>
	);

	function onClickDice(level) {
		if (!level) return;

		setLevel(level);
	}

	return content;
}

export default DiceProperty;

import { useState } from "react";

function DiceProperty({ name, level, attribute }) {

	const [_level, setLevel] = useState(level);
	const selectedStyle = { "color": "cadetblue" };
	const diceRange = [];

	for(let i = 0; i < 5; i++)
	{
		if (i === _level - 1)
		{
			diceRange.push(<p key={4 + i*2} style={selectedStyle}>{4 + i*2}</p>);
			continue;
		}

		diceRange.push(<p key={4 + i*2}>{4 + i*2}</p>);
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
		<div className='dicerow'>
			{diceRange}
			{extraInformation}
			<p style={nameStyle}>{name}</p>
			<button onClick={onClickPlus}>+</button>
			<button onClick={onClickMinus}>-</button>
		</div>
	);

	function onClickPlus() {
		if (_level < 5)
		{
			setLevel(_level + 1);
		}
	}

	function onClickMinus() {
		if (_level > 1)
		{
			setLevel(_level - 1);
		}
	}

	return content;
}

export default DiceProperty;

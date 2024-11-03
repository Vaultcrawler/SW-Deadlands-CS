function DiceProperty({ name, level }) {
	const content = (
		<div className='dicerow'>
			<p>4</p>
			<p>6</p>
			<p>8</p>
			<p>10</p>
			<p>12</p>
			<p>{level}</p>
			<p>{name}</p>
		</div>
	);

	return content;
}

export default DiceProperty;

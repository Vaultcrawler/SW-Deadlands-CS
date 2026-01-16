import { useContext } from 'react';
import { CharacterContext } from './CharacterContext';

function DiceProperty({ name, level, attribute, attributeKey, skillId, onChange }) {
	const context = useContext(CharacterContext);
	const selectedStyle = { color: 'cadetblue', fontWeight: 'bold' };
	const diceValues = [4, 6, 8, 10, 12];

	const handleDiceClick = (newLevel) => {
		if (attributeKey && context) {
			context.updateAttribute(attributeKey, newLevel);
		} else if (skillId !== undefined && context) {
			context.updateSkill(skillId, newLevel);
		} else if (onChange) {
			onChange(newLevel);
		}
	};

	const nameStyle = {
		width: '10em',
		textAlign: 'left',
		overflow: 'auto',
	};

	const diceRange = diceValues.map((dice, i) => {
		const isSelected = i === level - 1;
		return (
			<p
				style={isSelected ? selectedStyle : {}}
				key={dice}
				onClick={() => handleDiceClick(i + 1)}
			>
				d{dice}
			</p>
		);
	});

	const extraInformation = attribute ? (
		<p>{attribute}</p>
	) : (
		<p>{level}</p>
	);

	return (
		<div className='Dicerow'>
			{diceRange}
			{extraInformation}
			<p style={nameStyle}>{name}</p>
		</div>
	);
}

export default DiceProperty;

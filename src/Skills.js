import DiceProperty from './DiceProperty';

function Skills() {
	const characterSkills = [
		{ attribute: 'A', id: 0, name: 'Athletics' },
		{ attribute: 'S', id: 1, name: 'Common Knowledge' },
		{ attribute: 'Sp', id: 2, name: 'Notice' },
		{ attribute: 'V', id: 3, name: 'Persuasion' },
		{ attribute: 'A', id: 4, name: 'Stealth' },
	];

	const skillsList = characterSkills.map((cSkill) => (
		<DiceProperty
			key={cSkill.id}
			name={cSkill.name}
			level={cSkill.attribute}
		></DiceProperty>
	));

	return (
		<div className='attributes'>
			<h1>Skills</h1>
			{skillsList}
		</div>
	);
}

export default Skills;

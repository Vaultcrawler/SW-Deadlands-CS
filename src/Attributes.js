import DiceProperty from './DiceProperty';

function Attributes() {
	const characterAttribues = [
		{ name: 'Agility', level: 1, id: 0 },
		{ name: 'Smarts', level: 1, id: 1 },
		{ name: 'Spirit', level: 1, id: 2 },
		{ name: 'Stregth', level: 1, id: 3 },
		{ name: 'Vigor', level: 1, id: 4 },
	];

	const attributeList = characterAttribues.map((cAttribute) => (
		<DiceProperty
			key={cAttribute.id}
			name={cAttribute.name}
			level={cAttribute.level}
		></DiceProperty>
	));

	return (
		<div className='attributes'>
			<h1>Attributes</h1>
			{attributeList}
		</div>
	);
}

export default Attributes;

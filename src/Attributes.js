import DiceProperty from './DiceProperty';
import { useContext } from 'react';
import { CharacterContext } from './CharacterContext';

function Attributes() {
	const { character } = useContext(CharacterContext);

	const attributeList = Object.entries(character.attributes).map(
		([key, attr]) => (
			<DiceProperty
				key={key}
				name={attr.name}
				level={attr.level}
				attributeKey={key}
			/>
		)
	);

	return (
		<div className='Attributes'>
			<h1>Attributes</h1>
			{attributeList}
		</div>
	);
}

export default Attributes;

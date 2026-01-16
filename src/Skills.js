import DiceProperty from './DiceProperty';
import { useContext } from 'react';
import { CharacterContext } from './CharacterContext';

function Skills() {
	const { character } = useContext(CharacterContext);

	const skillsList = character.skills.map((skill) => (
		<DiceProperty
			key={skill.id}
			name={skill.name}
			attribute={skill.attribute}
			level={skill.level}
			skillId={skill.id}
		/>
	));

	return (
		<div className='Attributes'>
			<h1>Skills</h1>
			{skillsList}
		</div>
	);
}

export default Skills;

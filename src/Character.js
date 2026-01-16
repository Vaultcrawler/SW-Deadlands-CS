import { useContext } from 'react';
import { CharacterContext } from './CharacterContext';

function Character() {
	const { character, updateCharacterInfo } = useContext(CharacterContext);

	const style = {
		margin: 0,
	};

	const style2 = {
		textAlign: 'center',
		margin: 0,
	};

	const handleInputChange = (field) => (e) => {
		updateCharacterInfo(field, e.target.value);
	};

	return (
		<div className='Attributes'>
			{/* Character Fields */}
			<div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px', paddingBottom: '20px', borderBottom: '2px solid #333' }}>
				<div style={{ display: 'grid', gridTemplateColumns: '100px 1fr', alignItems: 'center', gap: '10px' }}>
					<label style={{ color: '#d4a373', fontWeight: '600' }}>Name:</label>
					<input
						type='text'
						value={character.name}
						onChange={handleInputChange('name')}
						placeholder='Character Name'
					/>
				</div>
				<div style={{ display: 'grid', gridTemplateColumns: '100px 1fr', alignItems: 'center', gap: '10px' }}>
					<label style={{ color: '#d4a373', fontWeight: '600' }}>Nickname:</label>
					<input
						type='text'
						value={character.nickname}
						onChange={handleInputChange('nickname')}
						placeholder='Nickname'
					/>
				</div>
				<div style={{ display: 'grid', gridTemplateColumns: '100px 1fr', alignItems: 'center', gap: '10px' }}>
					<label style={{ color: '#d4a373', fontWeight: '600' }}>Bennies:</label>
					<input
						type='number'
						value={character.bennies}
						onChange={handleInputChange('bennies')}
						placeholder='0'
					/>
				</div>
				<div style={{ display: 'grid', gridTemplateColumns: '100px 1fr', alignItems: 'center', gap: '10px' }}>
					<label style={{ color: '#d4a373', fontWeight: '600' }}>Conviction:</label>
					<input
						type='text'
						value={character.conviction}
						onChange={handleInputChange('conviction')}
						placeholder='Conviction'
					/>
				</div>
			</div>

			{/* Derived Stats */}
			<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
				<div style={{ textAlign: 'center', padding: '12px', backgroundColor: '#1f2329', border: '1px solid #444', borderRadius: '4px' }}>
					<p style={{ color: '#d4a373', fontWeight: '600', margin: '0 0 6px 0', fontSize: '0.9em' }}>Pace</p>
					<p style={{ margin: 0, fontSize: '1.5em', color: '#d4a373', fontWeight: 'bold' }}>{character.derivedStats.pace}</p>
				</div>
				<div style={{ textAlign: 'center', padding: '12px', backgroundColor: '#1f2329', border: '1px solid #444', borderRadius: '4px' }}>
					<p style={{ color: '#d4a373', fontWeight: '600', margin: '0 0 6px 0', fontSize: '0.9em' }}>Parry</p>
					<p style={{ margin: 0, fontSize: '1.5em', color: '#d4a373', fontWeight: 'bold' }}>{character.derivedStats.parry}</p>
				</div>
				<div style={{ textAlign: 'center', padding: '12px', backgroundColor: '#1f2329', border: '1px solid #444', borderRadius: '4px' }}>
					<p style={{ color: '#d4a373', fontWeight: '600', margin: '0 0 6px 0', fontSize: '0.9em' }}>Toughness</p>
					<p style={{ margin: 0, fontSize: '1.5em', color: '#d4a373', fontWeight: 'bold' }}>{character.derivedStats.toughness}</p>
				</div>
			</div>
		</div>
	);
}

export default Character;

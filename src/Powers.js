import { useContext, useState } from 'react';
import { CharacterContext } from './CharacterContext';

function Powers() {
	const { character, addPower, removePower } = useContext(CharacterContext);
	const [showForm, setShowForm] = useState(false);
	const [formData, setFormData] = useState({ name: '', points: 1, description: '' });

	const handleAddPower = () => {
		if (formData.name.trim()) {
			addPower(formData);
			setFormData({ name: '', points: 1, description: '' });
			setShowForm(false);
		}
	};

	const handleInputChange = (e) => {
		const { name, value, type } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: type === 'number' ? parseInt(value, 10) || 0 : value,
		}));
	};

	const powerList = character.powers.map((power) => (
		<PowerItem
			key={power.id}
			power={power}
			onRemove={() => removePower(power.id)}
		/>
	));

	const totalPowerPoints = character.powers.reduce(
		(sum, power) => sum + power.points,
		0
	);

	return (
		<div className='Section'>
			<h3>Powers / Supernatural Abilities</h3>
			<p style={{ fontSize: '0.9em', margin: '5px 0' }}>
				Total Points: <strong>{totalPowerPoints}</strong>
			</p>
			<div className='ItemList'>
				{powerList}
				{!showForm ? (
					<button onClick={() => setShowForm(true)}>+ Add Power</button>
				) : (
					<div style={{ backgroundColor: '#2a2e35', padding: '10px', borderRadius: '4px' }}>
						<input
							type='text'
							name='name'
							placeholder='Power Name'
							value={formData.name}
							onChange={handleInputChange}
							style={{ width: '100%', marginBottom: '8px', padding: '5px' }}
						/>
						<input
							type='number'
							name='points'
							placeholder='Power Points'
							value={formData.points}
							onChange={handleInputChange}
							min='1'
							style={{ width: '100%', marginBottom: '8px', padding: '5px' }}
						/>
						<textarea
							name='description'
							placeholder='Effects / Description (optional)'
							value={formData.description}
							onChange={handleInputChange}
							style={{ width: '100%', marginBottom: '8px', padding: '5px', minHeight: '60px' }}
						/>
						<div style={{ display: 'flex', gap: '8px' }}>
							<button onClick={handleAddPower} style={{ flex: 1 }}>
								Save
							</button>
							<button
								onClick={() => setShowForm(false)}
								style={{ flex: 1, backgroundColor: '#666' }}
							>
								Cancel
							</button>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}

function PowerItem({ power, onRemove }) {
	return (
		<div className='ItemBox'>
			<div className='ItemHeader'>
				<strong>{power.name}</strong>
				<span style={{ fontSize: '0.9em', color: '#666' }}>
					{power.points} PP
				</span>
				<button onClick={onRemove}>✕</button>
			</div>
			{power.description && (
				<p className='ItemDescription'>{power.description}</p>
			)}
		</div>
	);
}

export default Powers;

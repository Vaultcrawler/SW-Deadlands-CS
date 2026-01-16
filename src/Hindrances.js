import { useContext, useState } from 'react';
import { CharacterContext } from './CharacterContext';

function Hindrances() {
	const { character, addHindrance, removeHindrance } = useContext(CharacterContext);
	const [showForm, setShowForm] = useState(false);
	const [formData, setFormData] = useState({ name: '', description: '', major: false });

	const handleAddHindrance = () => {
		if (formData.name.trim()) {
			addHindrance(formData);
			setFormData({ name: '', description: '', major: false });
			setShowForm(false);
		}
	};

	const handleInputChange = (e) => {
		const { name, value, type, checked } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: type === 'checkbox' ? checked : value,
		}));
	};

	const hindranceList = character.hindrances.map((hindrance) => (
		<HindranceItem
			key={hindrance.id}
			hindrance={hindrance}
			onRemove={() => removeHindrance(hindrance.id)}
		/>
	));

	return (
		<div className='Section'>
			<h3>Hindrances</h3>
			<div className='ItemList'>
				{hindranceList}
				{!showForm ? (
					<button onClick={() => setShowForm(true)}>+ Add Hindrance</button>
				) : (
					<div style={{ backgroundColor: '#2a2e35', padding: '10px', borderRadius: '4px' }}>
						<input
							type='text'
							name='name'
							placeholder='Hindrance Name'
							value={formData.name}
							onChange={handleInputChange}
							style={{ width: '100%', marginBottom: '8px', padding: '5px' }}
						/>
						<textarea
							name='description'
							placeholder='Description (optional)'
							value={formData.description}
							onChange={handleInputChange}
							style={{ width: '100%', marginBottom: '8px', padding: '5px', minHeight: '60px' }}
						/>
						<label style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
							<input
								type='checkbox'
								name='major'
								checked={formData.major}
								onChange={handleInputChange}
								style={{ marginRight: '8px' }}
							/>
							Major Hindrance
						</label>
						<div style={{ display: 'flex', gap: '8px' }}>
							<button onClick={handleAddHindrance} style={{ flex: 1 }}>
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

function HindranceItem({ hindrance, onRemove }) {
	const badgeStyle = {
		display: 'inline-block',
		padding: '2px 6px',
		borderRadius: '3px',
		fontSize: '0.8em',
		marginLeft: '8px',
		backgroundColor: hindrance.major ? '#ff6b6b' : '#ffd43b',
		color: hindrance.major ? 'white' : 'black',
	};

	return (
		<div className='ItemBox'>
			<div className='ItemHeader'>
				<strong>
					{hindrance.name}
					<span style={badgeStyle}>{hindrance.major ? 'Major' : 'Minor'}</span>
				</strong>
				<button onClick={onRemove}>✕</button>
			</div>
			{hindrance.description && (
				<p className='ItemDescription'>{hindrance.description}</p>
			)}
		</div>
	);
}

export default Hindrances;

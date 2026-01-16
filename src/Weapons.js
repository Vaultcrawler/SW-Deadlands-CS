import { useContext, useState } from 'react';
import { CharacterContext } from './CharacterContext';

function Weapons() {
	const { character, addWeapon, removeWeapon } = useContext(CharacterContext);
	const [showForm, setShowForm] = useState(false);
	const [formData, setFormData] = useState({ name: '', damage: '1d6', range: 'Melee', type: 'Weapon' });

	const handleAddWeapon = () => {
		if (formData.name.trim()) {
			addWeapon(formData);
			setFormData({ name: '', damage: '1d6', range: 'Melee', type: 'Weapon' });
			setShowForm(false);
		}
	};

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const weaponList = character.weapons.map((weapon) => (
		<WeaponItem
			key={weapon.id}
			weapon={weapon}
			onRemove={() => removeWeapon(weapon.id)}
		/>
	));

	return (
		<div className='Section'>
			<h3>Weapons</h3>
			<div className='ItemList'>
				{weaponList}
				{!showForm ? (
					<button onClick={() => setShowForm(true)}>+ Add Weapon</button>
				) : (
					<div style={{ backgroundColor: '#2a2e35', padding: '10px', borderRadius: '4px' }}>
						<input
							type='text'
							name='name'
							placeholder='Weapon Name'
							value={formData.name}
							onChange={handleInputChange}
							style={{ width: '100%', marginBottom: '8px', padding: '5px' }}
						/>
						<input
							type='text'
							name='damage'
							placeholder='Damage (e.g., 2d6)'
							value={formData.damage}
							onChange={handleInputChange}
							style={{ width: '100%', marginBottom: '8px', padding: '5px' }}
						/>
						<input
							type='text'
							name='range'
							placeholder='Range (e.g., 12/24/48)'
							value={formData.range}
							onChange={handleInputChange}
							style={{ width: '100%', marginBottom: '8px', padding: '5px' }}
						/>
						<input
							type='text'
							name='type'
							placeholder='Type (e.g., Pistol, Rifle, Melee)'
							value={formData.type}
							onChange={handleInputChange}
							style={{ width: '100%', marginBottom: '8px', padding: '5px' }}
						/>
						<div style={{ display: 'flex', gap: '8px' }}>
							<button onClick={handleAddWeapon} style={{ flex: 1 }}>
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

function WeaponItem({ weapon, onRemove }) {
	const statsStyle = {
		display: 'grid',
		gridTemplateColumns: '1fr 1fr 1fr',
		gap: '10px',
		fontSize: '0.9em',
		marginTop: '8px',
	};

	const statItemStyle = {
		padding: '6px',
		backgroundColor: '#1f2329',
		borderRadius: '3px',
		textAlign: 'center',
		border: '1px solid #444',
		color: '#d4a373',
	};

	return (
		<div className='ItemBox'>
			<div className='ItemHeader'>
				<strong>{weapon.name}</strong>
				<span style={{ fontSize: '0.8em', color: '#999' }}>
					{weapon.type}
				</span>
				<button onClick={onRemove}>✕</button>
			</div>
			<div style={statsStyle}>
				<div style={statItemStyle}>
					<strong>Damage</strong>
					<p>{weapon.damage}</p>
				</div>
				<div style={statItemStyle}>
					<strong>Range</strong>
					<p>{weapon.range}</p>
				</div>
			</div>
		</div>
	);
}

export default Weapons;

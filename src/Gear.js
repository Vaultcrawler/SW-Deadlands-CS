import { useContext, useState } from 'react';
import { CharacterContext } from './CharacterContext';

function Gear() {
	const { character, addGearItem, removeGearItem } = useContext(CharacterContext);
	const [showForm, setShowForm] = useState(false);
	const [formData, setFormData] = useState({ name: '', amount: 1 });

	const handleAddGear = () => {
		if (formData.name.trim()) {
			addGearItem(formData);
			setFormData({ name: '', amount: 1 });
			setShowForm(false);
		}
	};

	const handleInputChange = (e) => {
		const { name, value, type } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: type === 'number' ? parseInt(value, 10) || 1 : value,
		}));
	};

	const handleRemoveGear = (itemId) => {
		removeGearItem(itemId);
	};

	const gearList = character.gear.map((item) => (
		<GearItem
			key={item.id}
			item={item}
			onRemove={() => handleRemoveGear(item.id)}
		/>
	));

	return (
		<div className='Gear'>
			<h3>Gear</h3>
			<div className='ItemList'>
				{gearList}
				{!showForm ? (
					<button onClick={() => setShowForm(true)}>+ Add Item</button>
				) : (
					<div style={{ backgroundColor: '#2a2e35', padding: '10px', borderRadius: '4px' }}>
						<input
							type='text'
							name='name'
							placeholder='Item Name'
							value={formData.name}
							onChange={handleInputChange}
							style={{ width: '100%', marginBottom: '8px', padding: '5px' }}
						/>
						<input
							type='number'
							name='amount'
							placeholder='Amount'
							value={formData.amount}
							onChange={handleInputChange}
							min='1'
							style={{ width: '100%', marginBottom: '8px', padding: '5px' }}
						/>
						<div style={{ display: 'flex', gap: '8px' }}>
							<button onClick={handleAddGear} style={{ flex: 1 }}>
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

function GearItem({ item, onRemove }) {
	const textStyle = {
		width: '60%',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	};

	const amountText = item.amount > 1 ? `${item.amount}x ` : '';

	return (
		<p style={textStyle}>
			{amountText}
			{item.name}
			<button onClick={onRemove}>remove</button>
		</p>
	);
}

export default Gear;

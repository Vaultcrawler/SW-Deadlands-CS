import { useContext, useState } from 'react';
import { CharacterContext } from './CharacterContext';

function Edges() {
	const { character, addEdge, removeEdge } = useContext(CharacterContext);
	const [showForm, setShowForm] = useState(false);
	const [formData, setFormData] = useState({ name: '', description: '' });

	const handleAddEdge = () => {
		if (formData.name.trim()) {
			addEdge(formData);
			setFormData({ name: '', description: '' });
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

	const edgeList = character.edges.map((edge) => (
		<EdgeItem
			key={edge.id}
			edge={edge}
			onRemove={() => removeEdge(edge.id)}
		/>
	));

	return (
		<div className='Section'>
			<h3>Edges</h3>
			<div className='ItemList'>
				{edgeList}
				{!showForm ? (
					<button onClick={() => setShowForm(true)}>+ Add Edge</button>
				) : (
					<div style={{ backgroundColor: '#2a2e35', padding: '10px', borderRadius: '4px' }}>
						<input
							type='text'
							name='name'
							placeholder='Edge Name'
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
						<div style={{ display: 'flex', gap: '8px' }}>
							<button onClick={handleAddEdge} style={{ flex: 1 }}>
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

function EdgeItem({ edge, onRemove }) {
	return (
		<div className='ItemBox'>
			<div className='ItemHeader'>
				<strong>{edge.name}</strong>
				<button onClick={onRemove}>✕</button>
			</div>
			{edge.description && <p className='ItemDescription'>{edge.description}</p>}
		</div>
	);
}

export default Edges;

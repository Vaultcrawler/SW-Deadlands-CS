import { useContext } from 'react';
import { CharacterContext } from './CharacterContext';

function CharacterControls() {
	const { exportCharacter, importCharacter, resetCharacter } = useContext(CharacterContext);

	const handleExport = () => {
		const json = exportCharacter();
		const blob = new Blob([json], { type: 'application/json' });
		const url = URL.createObjectURL(blob);
		const link = document.createElement('a');
		link.href = url;
		link.download = `deadlands-character-${Date.now()}.json`;
		link.click();
		URL.revokeObjectURL(url);
	};

	const handleImport = (event) => {
		const file = event.target.files?.[0];
		if (file) {
			const reader = new FileReader();
			reader.onload = (e) => {
				const content = e.target?.result;
				if (typeof content === 'string') {
					const success = importCharacter(content);
					if (success) {
						alert('Character erfolgreich importiert!');
					} else {
						alert('Fehler beim Importieren. Bitte überprüfe die Datei.');
					}
				}
			};
			reader.readAsText(file);
		}
		// Reset input
		event.target.value = '';
	};

	const handleReset = () => {
		if (window.confirm('Möchtest du wirklich alles zurücksetzen? Dies kann nicht rückgängig gemacht werden.')) {
			resetCharacter();
		}
	};

	const buttonStyle = {
		background: 'linear-gradient(135deg, #d4a373 0%, #c49563 100%)',
		color: '#1a1d23',
		border: 'none',
		borderRadius: '4px',
		padding: '6px 12px',
		cursor: 'pointer',
		fontSize: '0.75em',
		fontWeight: 'bold',
		textTransform: 'uppercase',
		letterSpacing: '0.5px',
		transition: 'all 0.2s',
		margin: '0 5px',
	};

	return (
		<div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
			<button style={buttonStyle} onClick={handleExport} title="Character als JSON exportieren">
				💾 Export
			</button>
			<label style={{ ...buttonStyle, cursor: 'pointer', display: 'inline-block' }} title="Character aus JSON importieren">
				📁 Import
				<input
					type="file"
					accept=".json"
					onChange={handleImport}
					style={{ display: 'none' }}
				/>
			</label>
			<button style={{ ...buttonStyle, background: 'linear-gradient(135deg, #ff6b6b 0%, #cc5555 100%)' }} onClick={handleReset} title="Character zurücksetzen">
				🔄 Reset
			</button>
		</div>
	);
}

export default CharacterControls;

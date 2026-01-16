import Gear from './Gear';
import Character from './Character';
import Attributes from './Attributes';
import Skills from './Skills';
import Edges from './Edges';
import Hindrances from './Hindrances';
import Powers from './Powers';
import Weapons from './Weapons';
import CharacterControls from './CharacterControls';
import { CharacterProvider } from './CharacterContext';

function App() {
	const imgStyle = {
		width: '100%',
		height: 'auto',
		maxWidth: '100%',
	};

	const isLargeScreen = typeof window !== 'undefined' && window.innerWidth > 1024;

	const gridStyleRow1 = {
		display: 'grid',
		gridTemplateColumns: window.innerWidth > 768 ? '1fr 1fr 1fr' : '1fr',
		gap: '20px',
		padding: '20px',
		backgroundColor: '#1a1d23',
		borderBottom: '1px solid #333',
		position: 'relative',
	};

	const gridStyleRow2 = {
		display: 'grid',
		gridTemplateColumns: window.innerWidth > 768 ? '1fr 1fr 1fr' : '1fr',
		gap: '20px',
		padding: '20px',
		backgroundColor: '#1a1d23',
		borderBottom: '1px solid #333',
	};

	return (
		<CharacterProvider>
			<div className='App'>
				<header className='App-header'>
					<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', maxWidth: '1400px', padding: '0 20px' }}>
						<div style={{ flex: 1 }}></div>
						<div style={{ textAlign: 'center' }}>
							<h1>Deadlands</h1>
							<p>Character Sheet</p>
						</div>
						<div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
							<CharacterControls />
						</div>
					</div>
				</header>

				{/* Row 1: Attributes | Character Info | (spacer for image) */}
				<div style={gridStyleRow1}>
					<div style={{ minHeight: window.innerWidth > 768 ? '450px' : 'auto' }}>
						<Attributes />
					</div>
					<div style={{ minHeight: window.innerWidth > 768 ? '450px' : 'auto' }}>
						<Character />
					</div>
					<div style={{ minHeight: window.innerWidth > 768 ? '450px' : 'auto', position: 'relative', display: window.innerWidth > 768 ? 'block' : 'flex', justifyContent: 'center', marginTop: window.innerWidth > 768 ? '0' : '20px' }}>
						<img
							className='avatar'
							style={{ ...imgStyle, maxHeight: window.innerWidth > 768 ? '450px' : '300px', position: window.innerWidth > 768 ? 'absolute' : 'relative', top: window.innerWidth > 768 ? '50%' : 'auto', left: window.innerWidth > 768 ? '50%' : 'auto', transform: window.innerWidth > 768 ? 'translate(-50%, -50%)' : 'none' }}
							src='https://i.pinimg.com/736x/14/50/5e/14505efe36944fc6b33c3ecda90403c1.jpg'
							alt='Character Avatar'
						/>
					</div>
				</div>

				{/* Row 2-3 Combined: Skills | Gear | (Hindrances & Edges) | Powers below */}
				<div style={gridStyleRow2}>
					{/* Left: Skills */}
					<div style={{ gridColumn: window.innerWidth > 768 ? '1' : 'auto' }}>
						<Skills />
					</div>

					{/* Center: Gear */}
					<div style={{ gridColumn: window.innerWidth > 768 ? '2' : 'auto' }}>
						<Gear />
					</div>

					{/* Right: Hindrances & Edges (spans down) */}
					<div style={{ gridColumn: window.innerWidth > 768 ? '3' : 'auto', gridRow: window.innerWidth > 768 ? '1 / 3' : 'auto', display: 'flex', flexDirection: 'column', gap: '20px' }}>
						<Hindrances />
						<Edges />
					</div>

					{/* Powers (spans columns 1-2, row 2) */}
					<div style={{ gridColumn: window.innerWidth > 768 ? '1 / 3' : 'auto', gridRow: window.innerWidth > 768 ? '2' : 'auto' }}>
						<Powers />
					</div>
				</div>

				{/* Row 4: Weapons (full width) */}
				<div className='row'>
					<div id='column1' className='column' style={{ maxWidth: '100%' }}>
						<Weapons />
					</div>
				</div>
			</div>
		</CharacterProvider>
	);
}

export default App;

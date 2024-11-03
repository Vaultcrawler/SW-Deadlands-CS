import './App.css';
import Gear from './Gear';
import Character from './Character';
import Attributes from './Attributes';
import Skills from './Skills';

function App() {
	const imgStyle = {
		width: '150px',
		height: 'auto',
	};

	const testStyle = {
		'min-height': '200px',
		width: '80%',
		'outline-style': 'groove',
		'outline-width': '2px',
		'outline-color': 'black',
	};

	return (
		<div className='App'>
			<header className='App-header'>
				<h1>Deadlands</h1>
				<p>Character Sheet</p>
			</header>
			<div className='row'>
				<div id='coloum1' className='coloum'>
					<Attributes></Attributes>
					<Skills></Skills>
				</div>
				<div id='coloum2' className='coloum'>
					<Character></Character>
					<Gear></Gear>
				</div>
				<div id='coloum3' className='coloum'>
					<img
						className='avatar'
						style={imgStyle}
						src='https://i.pinimg.com/736x/14/50/5e/14505efe36944fc6b33c3ecda90403c1.jpg'
						alt=''
					></img>
				</div>
			</div>
			<div id='powers' className='row'>
				<div style={testStyle}></div>
			</div>
			<div id='weapons' className='row'>
				<div style={testStyle}></div>
			</div>
		</div>
	);
}

export default App;

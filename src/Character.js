function Character() {
	const user = {
		name: 'Morty McFly',
		nickname: 'Morty',
		bennies: 3,
		conviction: '',
		height: 6,
		weight: 120,
	};

	const style = {
		margin: 0,
	};

	const style2 = {
		textAlign: 'center',
		margin: 0,
	};

	return (
		<div className='attributes'>
			<p style={style}>Name: {user.name}</p>
			<p style={style}>Nickname: {user.nickname}</p>
			<p style={style}>Bennies: {user.bennies}</p>
			<p style={style}>Conviction: {user.conviction}</p>
			<div className='row'>
				<div>
					<p>Pace</p>
					<p style={style2}>0</p>
				</div>
				<div>
					<p>Parry</p>
					<p style={style2}>0</p>
				</div>
				<div>
					<p>Toughness</p>
					<p style={style2}>0</p>
				</div>
			</div>
		</div>
	);
}

export default Character;

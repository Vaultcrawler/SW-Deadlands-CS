import { useState } from 'react';

function Gear() {
	const invenotry = [
		{ title: 'Cabbage', amount: 1, id: 1 },
		{ title: 'Garlic', amount: 1, id: 2 },
		{ title: 'Apple', amount: 2, id: 3 },
		{ title: '', amount: 0, id: 0 },
	];

	const listItems = invenotry.map((item) => (
		<div key={item.id}>
			<InventoryItem
				itemname={item.title}
				amount={item.amount}
			></InventoryItem>
		</div>
	));

	return (
		<div className='gear'>
			<h3>Gear</h3>
			{listItems}
		</div>
	);
}

function InventoryItem({ itemname, amount }) {
	const [_amount, setAmount] = useState(amount);
	const [_name, setName] = useState(itemname);

	function handleClickUse() {
		if (_amount === 1) {
			setName("");
		}
		setAmount(_amount - 1);
	}

	function handleClickAdd() {
		setName("test");
		setAmount(1);
	}

	const textStyle = {
		width: '80%',
		display: 'flex',
		flexDirection: "row",
    	justifyContent: "space-between",
	};

	const button = _amount > 0 ? <button onClick={handleClickUse}>use</button> : <button onClick={handleClickAdd}>add</button>;

	const amountText = _amount > 1 ? `${_amount}x ` : '';
	const content = (
		<p style={textStyle}>
			{amountText}
			{_name}
			{button}
		</p>
	);

	return content;
}

export default Gear;

import { useState } from 'react';

function Gear() {
	const invenotry = [
		{ title: 'Cabbage', amount: 1, id: 1 },
		{ title: 'Garlic', amount: 1, id: 2 },
		{ title: 'Apple', amount: 2, id: 3 },
		{ title: '', amount: 0, id: 0 },
		{ title: '', amount: 0, id: 0 },
		{ title: '', amount: 0, id: 0 },
		{ title: '', amount: 0, id: 0 },
		{ title: '', amount: 0, id: 0 },
		{ title: '', amount: 0, id: 0 },
		{ title: '', amount: 0, id: 0 },
		{ title: '', amount: 0, id: 0 },
		{ title: '', amount: 0, id: 0 },
		{ title: '', amount: 0, id: 0 },
		{ title: '', amount: 0, id: 0 },
		{ title: '', amount: 0, id: 0 },
		{ title: '', amount: 0, id: 0 },
		{ title: '', amount: 0, id: 0 },
		{ title: '', amount: 0, id: 0 },
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
	let [_amount, setAmount] = useState(amount);
	const [used, setUsed] = useState(false);
	const _name = itemname;

	function handleClick() {
		if (itemname === '') {
			// add new
			// add new emtpy
			return;
		}

		if (_amount === 1) {
			setUsed(true);
		}
		setAmount(_amount - 1);
		console.log('Amount: ' + _amount);
	}

	let content;
	if (!used) {
		const amountText = _amount > 1 ? `${_amount}x ` : '';

		content = (
			<p onClick={handleClick}>
				{amountText}
				{_name}
			</p>
		);
	} else {
		content = null;
	}

	return content;
}

export default Gear;

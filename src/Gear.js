import "./Gear.css";
import { useState } from "react";

function Gear() {
    const [additionalSlots, setAdditionalSlots] = useState([]);

    const listItems = (
        <div>
            <InventoryItem itemname={""} amount={0}></InventoryItem>
            {additionalSlots}
            <p>
                <button onClick={onClick}>add</button> more slots
            </p>
        </div>
    );

    function onClick() {
        setAdditionalSlots((prevSlots) => [
            ...prevSlots,
            <InventoryItem key={'ii' + prevSlots.length} itemname={""} amount={0}></InventoryItem>,
        ]);
    }

    return (
        <div className="Gear">
            <h3>Gear</h3>
            {listItems}
        </div>
    );
}

function InventoryItem({ itemname, amount }) {
    const [_amount, setAmount] = useState(amount);
    const [_name, setName] = useState(itemname);

    function handleClickUse() {
        if (_amount <= 1) {
            setName("");
        }
        setAmount(_amount - 1);
    }

    function handleClickAdd() {
        let newItem = prompt("What item do you wanna add?", "N/A");
        let newAmount = prompt("How many of this item do you have?", 1);
        setName(newItem);
        setAmount(newAmount);
    }

    const textStyle = {
        width: "60%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    };

    const button =
        _amount > 0 ? <button onClick={handleClickUse}>use</button> : <button onClick={handleClickAdd}>add</button>;

    const amountText = _amount > 1 ? `${_amount}x ` : "";
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

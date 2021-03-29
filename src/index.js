import React, { useState, useEffect, useRef } from "react";
import { Row, Col } from "reactstrap";

import ListItems from "./ListItems";
import Toolbar from "./Toolbar";
import SelectedItem from "./SelectedItem";
import availableItems from "./availableItems";

import "./style.css";

const Component = props => {
	const [allItems] = useState(props.availableItems || {...availableItems});
	const [items, setItems] = useState(props.items || []); // add one item in new instance at start
	const [selectedItem, setSelectedItem] = useState(null);
	const bottomRef = useRef(null);

	//////////// webhooks to world ///////////

	// call props.onUpdate whenever items changes
	useEffect(() => {
		props.onUpdate(items);
	}, [items]);

	//////////// internal functions ///////////

	const newItem = (type) => {
		items.push({...allItems[type].defaultState});
		setItems([...items]);
		bottomRef.current.scrollIntoView({ behavior: "smooth" });
	};

	const onItemSelect = (id) => {
		if (id === selectedItem)
			setSelectedItem(null);
		else
			setSelectedItem(id);
	};

	const onItemDelete = (event, id) => {
		event.stopPropagation(); // stop parent div onClick to be triggered
		selectedItem === id && setSelectedItem(null);
		items.splice(id, 1);
		setItems([...items]);
	};

	const onItemDuplicate = (event, id) => {
		event.stopPropagation(); // stop parent div onClick to be triggered
		items.splice(id + 1, 0, {...items[id]});
		setItems([...items]);
	};

	const onSelectedItemUpdate = (item) => {
		if (selectedItem === null) return;
		items[selectedItem] = item;
		setItems([...items]);
	};

	return (
		<Row className="afb-container">
			<Col xs={3} className="afb-container-left afb-float">
				<SelectedItem
					items={items}
					selectedItem={selectedItem}
					availableItems={allItems}
					onSelectedItemUpdate={onSelectedItemUpdate}
				/>
			</Col>
			<Col xs={{ size: 6, offset: 3 }} className="afb-container-center">
				<ListItems
					items={items}
					selectedItem={selectedItem}
					onItemSelect={onItemSelect}
					onItemDelete={onItemDelete}
					onItemDuplicate={onItemDuplicate}
					availableItems={allItems}
				/>
				<div ref={bottomRef}></div>
			</Col>
			<Col xs={3} className="afb-container-right afb-float">
				<Toolbar newItem={newItem} availableItems={allItems} />
			</Col>
		</Row>
	);
};

export default Component;
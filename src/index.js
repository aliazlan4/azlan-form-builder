import React, { useState, useEffect, useRef } from "react";
import { Row, Col } from "reactstrap";

import ListItems from "./ListItems";
import Toolbar from "./Toolbar";
import SelectedItem from "./SelectedItem";
import availableItems from "./availableItems";

import "./style.css";

const Component = props => {
	const [allItems] = useState(props.availableItems || {...availableItems});
	const [items, setItems] = useState([]);
	const [selectedItem, setSelectedItem] = useState(null);
	const bottomRef = useRef(null);
	const didMount = useRef(false);

	const [draggingItem, setDraggingItem] = useState(null);
	const [dragPosition, setDragPosition] = useState(null);
	const dropzoneDiv = useRef(null);

	//////////// webhooks to world ///////////

	// call props.onUpdate whenever items changes
	useEffect(() => {
		if (didMount.current) {
			props.onUpdate(items);
		} else {
			didMount.current = true;
		}
	}, [items]);

	// updating items array and UI after items are changed in parent component
	useEffect(() => {
		didMount.current = false;
		if (props.items) {
			setItems(props.items);
		}
	}, [props.items]);

	//////////// internal functions ///////////

	const newItem = (type) => {
		items.push(JSON.parse(JSON.stringify(allItems[type].defaultState)));
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

	const dragStart = (e, index) => {
		setDraggingItem(index);
	};

	const dragEnd = (e, index) => {
		setDraggingItem(null);
		setDragPosition(null);
		if (isInDropZone(e, dropzoneDiv)) {
			const newIndex = findNewIndex(e, dropzoneDiv);
			if (newIndex !== index) {
				array_move(items, index, newIndex);
				setItems([...items]);
			}
		}
	};

	const dragEndNewItem = (e, type) => {
		setDraggingItem(null);
		setDragPosition(null);
		if (isInDropZone(e, dropzoneDiv)) {
			const newIndex = findNewIndex(e, dropzoneDiv);
			items.push(JSON.parse(JSON.stringify(allItems[type].defaultState)));
			array_move(items, items.length - 1, newIndex);
			setItems([...items]);
		}
	};

	const dragOver = (e) => {
		if (isInDropZone(e, dropzoneDiv)) {
			setDragPosition(findNewIndex(e, dropzoneDiv));
		} else {
			setDragPosition(null);
		}
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
					setItems={setItems}
					selectedItem={selectedItem}
					onItemSelect={onItemSelect}
					onItemDelete={onItemDelete}
					onItemDuplicate={onItemDuplicate}
					availableItems={allItems}
					dragStart={dragStart}
					dragEnd={dragEnd}
					dragOver={dragOver}
					dropzoneDiv={dropzoneDiv}
					draggingItem={draggingItem}
					dragPosition={dragPosition}
				/>
				<div ref={bottomRef}></div>
			</Col>
			<Col xs={3} className="afb-container-right afb-float">
				<Toolbar
					newItem={newItem}
					availableItems={allItems}
					dragEnd={dragEndNewItem}
					dragOver={dragOver}
				/>
			</Col>
		</Row>
	);
};

export default Component;


////// Private Functions //////

const findNewIndex = (e, dropzoneDiv) => {
	for (let count = 0; count < dropzoneDiv.current.children.length; count++) {
		const body = dropzoneDiv.current.children[count].getBoundingClientRect();
		if (e.clientY >= body.top && e.clientY <= body.bottom) {
			return count;
		}
	}
	return dropzoneDiv.current.children.length - 1;
};

const isInDropZone = (e, dropzoneDiv) => {
	const zone = dropzoneDiv.current.getBoundingClientRect();

	return (e.pageX >= zone.left) && (e.pageX <= zone.right) &&
	(e.clientY >= zone.top) && (e.clientY <= zone.bottom);
};

const array_move = (arr, old_index, new_index) => {
	if (new_index >= arr.length) {
		var k = new_index - arr.length + 1;
		while (k--) {
			arr.push(undefined);
		}
	}
	arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
	return arr;
};

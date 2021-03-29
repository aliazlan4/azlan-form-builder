import React from "react";
import { Row, Col, FormGroup, Label, Input } from "reactstrap";

const ItemUI = (props) => {
	const friendlyName = props.availableItems[props.item.type].name;
	let classOfDiv = "afb-item";
	if (props.selectedItem === props.index) classOfDiv += " afb-item-selected";
	if (props.item.required) classOfDiv += " afb-is-required";
	return (
		<div className={classOfDiv} onClick={e => props.onItemSelect(props.index)}>
			<span className="fa fa-trash afb-delete-icon btn-outline-danger" onClick={e => props.onItemDelete(e, props.index)}/>
			<span className="fa fa-clone afb-copy-icon btn-outline-success" onClick={e => props.onItemDuplicate(e, props.index)}/>
			<span className="afb-item-type">{friendlyName}</span>
			<div className="afb-item-body">
				{props.children}
			</div>
		</div>
	);
};

const Component = props => {
	const renderItem = (item, index) => {
		let subcomponent;
		switch (item.type) {
			case "section":
				subcomponent = (
						<h2>{item.text}</h2>
				); break;
			case "paragraph":
				subcomponent = (
						<p>{item.text}</p>
				); break;
			case "text":
				subcomponent = (
					<FormGroup>
						<Label className="afb-label">{item.text}</Label>
						<Input type="text" placeholder={item.placeholder} disabled />
					</FormGroup>
				); break;
			case "email":
				subcomponent = (
					<FormGroup>
						<Label className="afb-label">{item.text}</Label>
						<Input type="email" placeholder={item.placeholder} disabled />
					</FormGroup>
				); break;
			case "textarea":
				subcomponent = (
					<FormGroup>
						<Label className="afb-label">{item.text}</Label>
						<Input type="textarea" placeholder={item.placeholder} disabled />
					</FormGroup>
				); break;
			case "select":
				subcomponent = (
					<FormGroup>
						<Label className="afb-label">{item.text}</Label>
						<Input type="select">
							{item.options.map(option => (
								<option>{option}</option>
							))}
						</Input>
					</FormGroup>
				); break;
			case "checkbox":
				subcomponent = (
					<FormGroup>
						<Label className="afb-label">{item.text}</Label>
						{item.options.map(option => (
							<FormGroup check>
								<Label check>
									<Input type="checkbox" disabled/>
									{option}
								</Label>
							</FormGroup>
						))}
						
					</FormGroup>
				); break;
			case "radio":
				subcomponent = (
					<FormGroup>
						<Label className="afb-label">{item.text}</Label>
						{item.options.map(option => (
							<FormGroup check>
								<Label check>
									<Input type="radio" disabled/>
									{option}
								</Label>
							</FormGroup>
						))}
						
					</FormGroup>
				); break;
			case "date":
				subcomponent = (
					<FormGroup>
						<Label className="afb-label">{item.text}</Label>
						<Input type="date" disabled style={{width: "100%"}} />
					</FormGroup>
				); break;
		}

		return (
			<ItemUI item={item} index={index} {...props}>
				{subcomponent}
			</ItemUI>
		);
	};

	return (
		<div>
			{props.items.map((item, index) => (
				<Row key={"item-"+index}>
					<Col sm="12">
						{renderItem(item, index)}
					</Col>
				</Row>
			))}

			{props.items.length === 0 &&
				<div className="afb-no-items-present">
					<h3>Add Form Elements</h3>
				</div>
			}
		</div>
	);
};

export default Component;
import React, { useEffect, useState } from "react";
import { FormGroup, Label, Input, Row, Col, Card, CardHeader, CardBody, InputGroup, InputGroupAddon, InputGroupText, Button } from "reactstrap";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertFromHTML, ContentState } from 'draft-js';
import { stateToHTML } from 'draft-js-export-html';

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const options = {
	options: ["inline", "list", "link", "embedded", "image", "emoji"],
	inline: { inDropdown: true },
	list: { inDropdown: true },
};

const Component = props => {
	if (props.selectedItem === null) {
		return (
			<Row>
				<Col sm="12">
					<div className="afb-no-items-present">No Item Selected</div>
				</Col>
			</Row>
		);
	}

	const item = props.items[props.selectedItem];
	const friendlyName = props.availableItems[item.type].name;

	const makeEditorState = (text) => {
		const blocksFromHTML = convertFromHTML(text);
		return EditorState.createWithContent(ContentState.createFromBlockArray(
			blocksFromHTML.contentBlocks,
			blocksFromHTML.entityMap,
		));
	};

	const [editorState, setEditorState] = useState(makeEditorState(item.text));

	useEffect(() => {
		setEditorState(makeEditorState(item.text));
	}, [item]);

	const updateParagraphText = state => {
		setEditorState(state);
		item.text = stateToHTML(state.getCurrentContent());
		props.onSelectedItemUpdate(item);
	};

	const updateText = ev => {
		item.text = ev.target.value;
		props.onSelectedItemUpdate(item);
	};
	
	const updatePlaceholder = ev => {
		item.placeholder = ev.target.value;
		props.onSelectedItemUpdate(item);
	};

	const updateOption = (ev, index) => {
		item.options[index] = ev.target.value;
		props.onSelectedItemUpdate(item);
	};

	const updateRequired = ev => {
		item.required = !item.required;
		props.onSelectedItemUpdate(item);
	};

	const deleteOption = index => {
		item.options.splice(index, 1);
		props.onSelectedItemUpdate(item);
	};

	const addOption = () => {
		item.options.push("New option");
		props.onSelectedItemUpdate(item);
	};

	return (
		<Row>
			<Col sm="12">
			{item &&
				<Card>
					<CardHeader>{friendlyName}</CardHeader>
					<CardBody className="afb-selected-form">
						<FormGroup>
							<Label className="afb-label">Text</Label>

							{item.type === "paragraph" ?
								<Editor
									editorState={editorState}
									toolbar={options}
									toolbarClassName="toolbarClassName"
									wrapperClassName="wrapperClassName"
									editorClassName="editorClassName"
									onEditorStateChange={updateParagraphText}
								/>
								:
								<Input type="text" value={item.text} onChange={updateText} />
							}
							
						</FormGroup>

						{ item.placeholder !== undefined &&
							<FormGroup>
								<Label className="afb-label">Placeholder</Label>
								<Input type="text" value={item.placeholder} onChange={updatePlaceholder} />
							</FormGroup>
						}

						{ item.options !== undefined &&
							<FormGroup>
								<Label className="afb-label">Options</Label>
								<Button size="sm" color="success" outline style={{float: "right"}} onClick={addOption}>
									<span className="fa fa-plus"></span>
								</Button>
								{item.options.map((option, index) => (
									<InputGroup className="mb-1">
										<InputGroupAddon addonType="prepend">
											<InputGroupText>{index + 1}</InputGroupText>
										</InputGroupAddon>
										<Input type="text" value={option} onChange={e => updateOption(e, index)} />
										<InputGroupAddon addonType="append">
											<InputGroupText className="btn-danger cursor-pointer" onClick={e => deleteOption(index)}>
												<span className="fa fa-trash"></span>
											</InputGroupText>
										</InputGroupAddon>
									</InputGroup>
								))}
							</FormGroup>
						}

						{ item.required !== undefined &&
							<FormGroup check>
								<Label check>
									<Input type="checkbox" checked={item.required} onChange={updateRequired}/> Required?
								</Label>
							</FormGroup>
						}
					</CardBody>
				</Card>
			}
			</Col>
		</Row>
	);
};

export default Component;
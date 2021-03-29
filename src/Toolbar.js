import React from "react";
import { Row, Col } from "reactstrap";

const Component = props => {
	return (
		<Row>
			{Object.keys(props.availableItems).map((type, index) => {
				const item = props.availableItems[type];

				return (
					<Col sm="12" md="6" className="afb-toolbar-item-parent" key={"toolbar-item-"+index}>
						<div className="afb-toolbar-item" onClick={e => props.newItem(type)}>
							<i className={item.icon + " mr-2"}/>
							<br/>
							<p>{item.name}</p>
						</div>
					</Col>
				);
			})}
		</Row>
	);
};

export default Component;
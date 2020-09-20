import React from "react";
import { ListGroup } from "react-bootstrap";

const AddBreeds = ({ breed, subbreed }) => {
    return (
        <ListGroup defaultActiveKey="#Category1">
            <ListGroup.Item
                action
                href="#Category1"
                onClick={() =>
                    this.setState({ firstOpen: !this.state.firstOpen })
                }>
                Category 1
            </ListGroup.Item>
            <Collapse in={open}>
                <ListGroup defaultActiveKey="#Category1">
                    <ListGroup.Item action href="#Category2">
                        Category 2
                    </ListGroup.Item>
                    <ListGroup.Item action href="#Category3">
                        Category 3
                    </ListGroup.Item>
                    <ListGroup.Item action href="#Category4">
                        Category 4
                    </ListGroup.Item>
                </ListGroup>
            </Collapse>
        </ListGroup>
    );
};

export default AddBreeds;

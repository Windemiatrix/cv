import React from 'react';
import Description from "./Description";
import {ListGroup} from "react-bootstrap";

const Project = (props) => {
    return (
        <ListGroup.Item as="li">
            <strong>{props.content.title}</strong>
            <Description content={props.content.description}/>
            <ul>
                {props.content.data.map((item, index) => (
                    <li style={{textAlign: "justify"}}>{item}</li>
                ))}
            </ul>
            <Description content={"Tech stack: " + props.content.techStack}/>
        </ListGroup.Item>
    );
};

export default Project;
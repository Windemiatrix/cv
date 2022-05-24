import React from 'react';
import Title from "./Block/Title";
import {Card} from "react-bootstrap";
import CardHeader from "react-bootstrap/CardHeader";

const BlockEducation = (props) => {
    return (
        <div>
            <Title content={props.title}/>
            {props.content.map((item, index) => (
                <Card style={{marginBottom: "10px"}}>
                    <CardHeader>
                        {item.title}
                        <br/><small className={"text-muted"}> {item.dates}</small>
                    </CardHeader>
                    <Card.Body>
                        <Card.Text>
                            {item.description}
                        </Card.Text>
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
};

export default BlockEducation;
import React from 'react';
import Title from "./Block/Title";
import Project from "./Block/Project";
import { Card, Row, ListGroup, Col } from "react-bootstrap";
import CardHeader from "react-bootstrap/CardHeader";

const BlockExperience = (props) => {
    return (
        <Row>
            <Col>
                <Title content={props.title} />
                {props.content.map((item, index) => (
                    <Card style={{ marginBottom: "10px" }}>
                        <CardHeader>
                            {item.company}
                            <br /><small className={"text-muted"}> {item.dates}</small>
                        </CardHeader>
                        <Card.Body>
                            <Card.Subtitle>
                                {item.description}
                            </Card.Subtitle>
                            <Card.Text>
                                <ListGroup as="ol" variant="flush" numbered>
                                    {item.projectsContent.map((project, index) => (
                                        <Project title={"dd"} content={project} />
                                    ))}
                                </ListGroup>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                ))}
            </Col>
        </Row>
    );
};

export default BlockExperience;
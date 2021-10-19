import React from 'react';
import { Card, Col } from 'react-bootstrap';
import "./AboutCard.css"

const AboutCard = (props) => {
    const { image, name, subject, degree } = props.doctor
    return (
        <div>
            <Col>
                <Card className="w-80 cart  border  border-secondary rounded bg-light">
                    <Card.Img variant="top" src={image} className="w-50 mx-auto border border-3 border-info rounded-circle" />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>{degree}</Card.Text>
                        <Card.Text>{subject}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default AboutCard;
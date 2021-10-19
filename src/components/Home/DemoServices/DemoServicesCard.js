import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';
import "./DemoService.css"
const DemoServicesCard = (props) => {
    const { id, title, img, price, description } = props.service
    const history = useHistory()
    const handleCardDetails = (id) => {
        console.log(id);
        history.push(`/services/${id}`)
    }
    return (
        <div><Col>
            <Card className="w-90 demo ">
                <Card.Img variant="top" src={img} className="w-100 mx-auto pt-2" />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{price}</Card.Text>
                    <Card.Text>{description}</Card.Text>
                </Card.Body>
                <Button variant="primary" onClick={() => handleCardDetails(id)}>See Details
                </Button>
            </Card>
        </Col>

        </div>
    );
};

export default DemoServicesCard;
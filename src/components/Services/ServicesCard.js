import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';

const ServicesCard = (props) => {
    const { id, title, img, description, price } = props.service
    const history = useHistory()
    const handleCardDetails = (id) => {
        console.log(id);
        history.push(`/services/${id}`)
    }
    return (
        <div className='my-10 '>
            <Col>
                <Card style={{ height: '37rem' }} className="w-75">
                    <Card.Img style={{ height: '10rem' }} variant="top" src={img} className="w-75 border  border-4  border-info rounded mx-auto m-2 " />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>{price}</Card.Text>
                        <Card.Text>{description}</Card.Text>

                    </Card.Body>
                    <Card.Footer><Button onClick={() => handleCardDetails(id)}>Details</Button></Card.Footer>
                </Card>
            </Col>
        </div>
    );
};

export default ServicesCard;
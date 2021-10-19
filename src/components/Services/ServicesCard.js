import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';

const ServicesCard = (props) => {
    const {id, title, img, description,price } = props.service 
    const history =useHistory()
    const handleCardDetails =(id)=>{
        console.log(id);
        history.push(`/services/${id}`)
    }
    return (
        <div>
            <Col>
                <Card className="w-75">
                    <Card.Img variant="top" src={img} className="w-50 mx-auto" />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>{price}</Card.Text>
                        <Card.Text>{description}</Card.Text>
                        <Button onClick={()=>handleCardDetails(id)}>Details</Button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default ServicesCard;
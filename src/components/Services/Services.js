import React from 'react';
import { Row } from 'react-bootstrap';
import ServicesApi from '../../Hooks/ServicesApi';
import ServicesCard from './ServicesCard';

const Services = () => {
    const { services } = ServicesApi()
    return (
        <div className="container">
            <Row xs={1} md={2} className="g-4">
                {
                    services.map((service) => (<ServicesCard key={service._id} service={service}></ServicesCard>
                    ))}
            </Row>
        </div>
    );
};

export default Services;
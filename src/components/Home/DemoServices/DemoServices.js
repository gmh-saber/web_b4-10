import React from 'react';
import { Row } from 'react-bootstrap';
import ServicesApi from '../../../Hooks/ServicesApi';
import DemoServicesCard from './DemoServicesCard';
const DemoServices = () => {
    const { services } = ServicesApi()
    return (
        <div className="my-5">
            <Row xs={1} md={3} >
                {
                    services.slice(0, 6).map((service) => <DemoServicesCard key={service.id} service={service}></DemoServicesCard>)
                }
            </Row>
        </div>
    );
};

export default DemoServices;
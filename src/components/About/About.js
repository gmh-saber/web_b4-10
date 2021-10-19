import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import AboutCard from './AboutCard';

const About = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('/doctors_details.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    return (
        <div className="container">
            <Row xs={1} md={2} lg={4} className="g-4">
                {
                    doctors.map((doctor) => (<AboutCard key={doctor._id} doctor={doctor}></AboutCard>
                    ))}
            </Row>
        </div>
    );
};

export default About;
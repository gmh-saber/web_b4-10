import React from 'react';
import { useParams } from 'react-router';
import ServicesApi from '../../Hooks/ServicesApi';

const SingleServices = () => {
    const { id } = useParams()
    const { services } = ServicesApi()
    const clickedServices = services.filter(service => service?.id === parseFloat(id))
    return (
        <div className="container my-5">
            <div className="card mb-3" style={{ mazWidth: "100%" }}>
                <div className="row g-0">
                    <div className="col-md-4 ">
                        <img src={clickedServices[0]?.img} className="img-fluid rounded-start p-3" alt="..." />
                    </div>
                    <div className="col-md-8 ">
                        <div className="card-body">
                            <h3 className="card-title"> Name: {clickedServices[0]?.title}</h3>
                            <h3 className="card-title">Price: {clickedServices[0]?.price}</h3>
                            <p className="card-text">Details: {clickedServices[0]?.description}</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleServices;
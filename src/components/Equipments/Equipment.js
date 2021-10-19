import React from 'react';

const Equipment = (props) => {
    const {_id, name, description, picture } = props.equipment
    return (
        <div>
            {
                _id %2 === 0 ? <div className="card mb-3" style={{ "maxWidth": "100%" }}>
                    <div className="row g-0"> 
                        <div className="col-md-8 ">
                            <div className="card-body">
                                <h3 className="card-title">{name}</h3>
                                <p className="card-text">{description}</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                        <div className="col-md-4  ">
                            <img src={picture}  className="img-fluid rounded-start p-3" alt="..." />
                        </div>
                    </div>
                </div>
                    :
                    <div className="card mb-3" style={{ "max-width": "100%" }}>
                        <div className="row g-0">
                            <div className="col-md-4 ">
                                <img src={picture} className="img-fluid rounded-start p-3" alt="..." />
                            </div>
                            <div className="col-md-8 ">
                                <div className="card-body">
                                    <h3 className="card-title">{name}</h3>
                                    <p className="card-text">{description}</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>

                        </div>
                    </div>
            } 
        </div>
    );
};

export default Equipment;
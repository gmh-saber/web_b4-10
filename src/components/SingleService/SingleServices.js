import React from 'react';
import { useParams } from 'react-router';

const SingleServices = () => {
    const { id } = useParams()
    return (
        <div>
            <h1>This Single Card {id}</h1>
        </div>
    );
};

export default SingleServices;
import React, { useEffect, useState } from 'react';
import Equipment from './Equipment';
 

const Equipments = () => {
    const [equipments, setEquipments] = useState([]);
    useEffect(() => {
        fetch('/equipment.json')
            .then(res => res.json())
            .then(data => setEquipments(data))
    }, [])
    return (
        <div className="container">
            <div className="founder-container mt-4">
                <div className="row">
                    {
                        equipments.map((equipment) => (<Equipment key={equipment._id} equipment={equipment}></Equipment>
                            
                        ))}
                </div> 
            </div> 
             
        </div>
    );
};

export default Equipments;
import React from 'react';
import ".//AboutHome.css"
const AboutHome = () => {
    return (
        <div className="row my-5 p-5 bg-secondary border rounded ">
            <div className=" col-sm-12 col-md-6  col-lg-6 ">
                <img className="images border rounded" src="https://img.freepik.com/free-vector/pharmacy-interior-with-shelves-pills_273525-293.jpg?size=626&ext=jpg" alt=""></img>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 d-flex flex-column justify-content-center">
                <h1 className=" text-info">About our Facility</h1>
                <p className="text-white">SMK  Diagonistic Center is the Best Hospital in Bangladesh. We are a 250 bedded multi-disciplinary tertiary-care Hospital, situated at Gandaria, Dhaka. It is a concern of the ‘City Group’ (www.citygroup.com.bd) which is one of the top Conglomerates in Bangladesh, started its journey back in 1972 and in a span of four decades, it has grown-up as one of the largest Industrial & Commercial Icons.</p>
            </div>
        </div>
    );
};

export default AboutHome;
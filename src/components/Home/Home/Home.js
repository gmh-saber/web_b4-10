import React from 'react';
import { Carousel } from 'react-bootstrap';
import AboutHome from '../AboutHome/AboutHome';
import DemoServices from '../DemoServices/DemoServices';
import MedInfo from '../MedInfo/MedInfo';
import Testimonials from '../Testimonial/Testimonial';
import "./Home.css"



const Home = () => {

    return (
        <div className="container">
            <div>
                <Carousel>
                    <Carousel.Item interval={1000}>
                        <img
                            className="d-block w-100 carouselImg"
                            src="/caro-1.jpg"
                            alt="First slide"

                        />
                        {/* <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <img
                            className="d-block w-100 carouselImg"
                            src="https://img.freepik.com/free-vector/isometric-medicine-pharmacy-set-with-isolated-medical-products-pharmaceutical-drugs-pills-with-drops_1284-58578.jpg?size=626&ext=jpg"
                            alt="Second slide"
                        />
                        {/* <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 carouselImg"
                            src="/caro-3.jpg"
                            alt="Third slide"
                        />
                        {/* <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                </Carousel>
            </div>

            <DemoServices></DemoServices>
            <AboutHome></AboutHome>
            <Testimonials></Testimonials>
            <MedInfo></MedInfo>

        </div>
    );
};

export default Home;
import React from 'react';
import { Card } from 'react-bootstrap';
import "./Testimonial.css"

const Testimonials = () => {
    return (
        <div className="p-5 m-3">
            <h1 className="mb-4">Testimonials</h1>

            <div className="row ">

                <div className=" col-sm-12 col-lg-6 mb-4">
                    <Card className="card-hover">
                        <Card.Header className="quote">Thanks for choosing us</Card.Header>
                        <Card.Body>
                            <blockquote className="blockquote mb-0">
                                <p>

                                    loving. God bless you all. Special thanks to the doctors for their effort and hard work.
                                </p>
                                <footer className="blockquote-footer">
                                    Someone famous in <cite title="Source Title">Source Title</cite>
                                </footer>
                            </blockquote>
                        </Card.Body>
                    </Card>
                </div>
                <div className=" col-sm-12 col-lg-6 mb-4 ">
                    <Card className="card-hover">
                        <Card.Header className="quote">The amazing clinic! Wonderful Support!</Card.Header>
                        <Card.Body>
                            <blockquote className="blockquote mb-0">
                                <p>
                                    {' '}
                                    They have got my project on tiompetition witd, and experienced & professional team.{' '}
                                </p>
                                <footer className="blockquote-footer">
                                    Someone famous in <cite title="Source Title">Source Title</cite>
                                </footer>
                            </blockquote>
                        </Card.Body>
                    </Card>
                </div>
                <div className=" col-sm-12 col-lg-6 mb-4">
                    <Card className="card-hover">
                        <Card.Header className="quote">Experience</Card.Header>
                        <Card.Body>
                            <blockquote className="blockquote mb-0">
                                <p>
                                    {' '}
                                    What a wonderful experience! I can’t thank enough the Jaslok staff from a every senior d{' '}
                                </p>
                                <footer className="blockquote-footer">
                                    Someone famous in <cite title="Source Title">Source Title</cite>
                                </footer>
                            </blockquote>
                        </Card.Body>
                    </Card>
                </div>
                <div className=" col-sm-12 col-lg-6 mb-4">
                    <Card className="card-hover">
                        <Card.Header className="quote"> Thanks for Helping us!</Card.Header>
                        <Card.Body>
                            <blockquote className="blockquote mb-0">
                                <p>Very good treatment and care taking team of Dr. Firuza Parikh and all doctors of the</p>
                                <footer className="blockquote-footer">
                                    Someone famous in <cite title="Source Title">Source Title</cite>
                                </footer>
                            </blockquote>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Link } from 'react-router-dom';
import "./NotFound.css"

const NotFound = () => {
    return (
        <div class="page_404">
            <div class="container">
                <div class="d-flex flex-column ">
                    <div >

                        <div class="four_zero_four_bg  ">
                            <h1 class="text-center ">404</h1>


                        </div>

                        <div class="contant_box_404">
                            <h3 class="h2">
                                Look like you're lost
                            </h3>

                            <p>the page you are looking for not avaible!</p>

                        </div>
                        <Link to="/"><Button className="link_404">Go to Home</Button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
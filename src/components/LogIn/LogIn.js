import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import UseAuth from '../../Hooks/UseAuth';

const LogIn = () => {
    const { handleGoogleSignIn, logInEmailPassword, error } = UseAuth();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handlePass = (e) => {
        setPassword(e.target.value);
    }
    const handleLogIn = () => {
        logInEmailPassword(email, password)
    }
    const goToSignUp = () => {
        history.push('/signup')
    }
    const googleSignIn = () => {
        handleGoogleSignIn()
            .then((result) => {
                history.push(redirect_uri);
            })

    }
    const text = 'auth/wrong-password'
    return (
        <div>
            <div>
                <div id="login-box">
                    <div className="left">
                        <h1> Log In</h1>
                        <input type="text" name="email" placeholder="E-mail" onChange={handleEmail} />
                        <input type="password" name="password" placeholder="Password" onChange={handlePass} />

                        {
                            error === text ? <span className="text-danger hidden">Wrong Password</span> : <span className="text-white hidden" >Wrong Password</span>
                        }
                        <input type="submit" name="signup_submit" value="Log in" onClick={handleLogIn} />
                    </div>

                    <div className="right bg-secondary ">
                        <span className="loginwith text-white">New here ?<br />Sign up</span>

                        <button className="btn btn-outline-info my-2" onClick={goToSignUp}> Sign Up with <FontAwesomeIcon className="fs-5" icon={faEnvelope} /></button>
                        <Button className="btn btn-outline-warning " onClick={googleSignIn}>Log in with <FontAwesomeIcon className="fs-5" icon={faGoogle} /></Button>
                    </div>
                    <div className="or">OR</div>
                </div>
            </div>

        </div>
    );
};

export default LogIn;
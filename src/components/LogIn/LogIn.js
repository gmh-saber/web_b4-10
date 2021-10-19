import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import UseAuth from '../../Hooks/UseAuth';
import "../LogIn/Login.css"

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
                            error === text ? <span className="text-danger">Wrong Password</span> : <span className="text-white" >Wrong Password</span>
                        }
                        <input type="submit" name="signup_submit" value="Log in" onClick={handleLogIn} />
                    </div>

                    <div className="right">
                        <span className="loginwith">New here<br />just Sign up</span>

                        <button className="social-signin facebook" onClick={goToSignUp}> Sign Up with Email</button>
                        <button className="social-signin google" onClick={googleSignIn}>Log in with Google+</button>
                    </div>
                    <div className="or">OR</div>
                </div>
            </div>

        </div>
    );
};

export default LogIn;
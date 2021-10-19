import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import UseAuth from '../../Hooks/UseAuth';
import "./Signup.css"

const  Signup = () => {
    const { handleGoogleSignIn,registerByEmailPass,error } = UseAuth()
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
    const handleRegister = () => {
        registerByEmailPass(email, password)
    }
    const  goToLogIn = () => {
        history.push('/logIn')
    }
    const googleSignIn = () => {
        handleGoogleSignIn()
            .then((result) => {
                history.push(redirect_uri);
            }) 
    } 
    const text ="auth/email-already-in-use"
    return (

        <div className="mt-5">

            <div>
                <div id="login-box">
                    <div className="left">
                        <h1>Sign up</h1>

                         
                        <input type="text" name="email" placeholder="E-mail" onChange={handleEmail} />
                        <input type="password" name="password" placeholder="Password" onChange={handlePass} />
                        <input type="password" name="password2" placeholder="Retype password" />
                        {
                             error === text ?<span className="text-danger">Give a new email</span> :  <span className="text-white" > Give a new email</span>
                         }
                        <input type="submit" name="signup_submit" value="Sign me up" onClick={handleRegister} />
                         
                    </div>

                    <div className="right">
                        <span className="loginwith">Sign in with<br />social network</span>

                        <button className="social-signin facebook" onClick={goToLogIn} >Log in with Email</button>
                        <button className="social-signin google" onClick={googleSignIn}>Log in with Google+</button>
                    </div>
                    <div className="or">OR</div>
                </div>
            </div> 
        </div>
    );
};

export default  Signup;
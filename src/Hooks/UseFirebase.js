import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../FireBase/FireBase.init";
initializeAuthentication()


const UseFirebase = () => {
  const [user, setUser] = useState({})
  const [error, setError] = useState("")
  const auth = getAuth();
  const GoogleProvider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => { 
    return signInWithPopup(auth, GoogleProvider) 
  }
  const  registerByEmailPass = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        setError(error.code);
      });
  }
  const  logInEmailPassword = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        setError(error.code);
      });
  }
  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
  }
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);

      }
    })
  },  )
  return { handleGoogleSignIn, user, error, logOut, registerByEmailPass,logInEmailPassword }
};

export default UseFirebase;
import { useContext } from "react";
import { AuthContext } from "../components/Context/AuthProvider";

 

const UseAuth = () => {
     return useContext(AuthContext)
};

export default UseAuth;
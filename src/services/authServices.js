import axios from "axios";
import { BASE_URL } from "../utils";
import Cookies from "js-cookie";


const registerUser = async (userData) => {

    try {
        const res = await axios.post(
            `${BASE_URL}/user/register`,
            userData
        );

        // console.log(res.data)
        if (res.status == 200) {
            Cookies.set("jwt", res.data.token)
            Cookies.set("username", res.data.username)
            alert("Signup Successfull")
            return res.status;
        }

    } catch (e) {
        // message from the backend to handle Errors 
        if (e.response.data.message == "UserName already exist ,try Different UserName or Email") {
            alert("UserName already exist ,try Different UserName or Email")
            return 401
        }
    }
};

const loginUser = async (userData) => {

    try{
        const res = await axios.post(
            `${BASE_URL}/user/login`,
            userData
        );

       // console.log(res.data)
        if (res.status == 200) {
            Cookies.set("jwt", res.data.token)
            Cookies.set("username", res.data.username)
            alert("Login Successfull")
            return res.status;
        }
    
    }catch(e){
        // message from the backend to handle Errors 
        if (e.response.data.message == "Authentication Failed"){
            alert("Wrong Credentials")
            return 401
        }

        if (e.response.data.message == "No User Found") {
            alert("User does not exist, plz Sign Up")
            return 401
        }    
    }
   
};

const logoutUser = () => {
    localStorage.removeItem("user");
};

const authService = {
    registerUser,
    logoutUser,
    loginUser,
};

export default authService;
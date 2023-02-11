import axios from "axios";
import { BASE_URL } from "../utils";


// get all the Task of Each user with Dynamic Dates

const getTasks = async (token, id) => {  
    //console.log("getTasks is Running" , id)

    if(!token || !id) return 400

    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    if(id){
        const res = await axios.get(`${BASE_URL}/user/task/${id}`, config);
       // console.log(res.data)
        return res.data;
    }
    
};


// Post request and its Dynamic for all Days and for each User
const addTasks = async (data, token) => {
    //console.log(data,token)
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
    const bodyData = {
        ...data
    };
    const res = await axios.post(
        `${BASE_URL}/user/task`,
        bodyData,
        config
    );
    
    if (res.status == 200) return 200;
    else return 400
};


// To get the Dates in Format
const CurrDate = () => {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1; // January is 0!
    let yyyy = today.getFullYear();
    let Month = Date().split(" ")[1]

    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }
    let dateFormat = dd +  mm +  yyyy 
    today = { dd, mm, yyyy, Month, dateFormat }
    return (today)
}

const taskService = {
    getTasks,
    addTasks,
    CurrDate
};

export default taskService;
import axios from "axios";
import { BASE_URL } from "../utils";

const getTasks = async (token, id) => {
    
    //console.log("getTasks is Running" , id)

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

    const res = await axios.get(`${BASE_URL}/user/task`, config);
    return res.data;
    
    
};

const addTasks = async (todo, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
    const bodyData = {
        todo: todo,
    };
    const res = await axios.post(
        `${BASE_URL}/rest/todos/`,
        bodyData,
        config
    );
    return res.data;
};


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
import axios from "axios";
import { BASE_URL } from "../utils";

const getTasks = async (token, id) => {
    
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    if(id){
        const res = await axios.get(`${BASE_URL}/user/task/${id}`, config);
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
    const response = await axios.post(
        `${BASE_URL}/rest/todos/`,
        bodyData,
        config
    );
    return response.data;
};


const taskService = {
    getTasks,
    addTasks
};

export default taskService;
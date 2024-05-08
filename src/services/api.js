import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://127.0.0.1:3000/blog/v1',
    timeout: 5000
})

export const getProjects = async (data) => {
    try{
        return await apiClient.post('/projects/')
    }catch(e){
        return{
            error: true,
            e 
        }
    }
}
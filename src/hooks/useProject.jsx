import { useState } from "react";
import toast from "react-hot-toast";
import { getProjects, postProject } from "../services/api";
import { useNavigate } from "react-router-dom";

export const useProjects = () => {
    const [projects, setProjects] = useState([]);
    const navigate = useNavigate()

    const getProjectsData = async () => {

        const response = await getProjects();
        if (response.error) {
            return toast.error(
                response.e?.response?.data || 'Ocurrió un error al leer los canales'
            )
        }
        setProjects(response.data);
    };

    const createProject = async (data) => {
        console.log(data)
        const response = await postProject(data);
        if (response.error) {
            console.log(response.e); // Imprime el objeto de error
            console.log(response.e?.response); // Imprime la respuesta del servidor
            console.log(response.e?.response?.data); // Imprime los datos de la respuesta
            return toast.error(response.e?.response?.data || 'Ocurrio un error al iniciar sesion, intenta de nuevo')
        }
        navigate('/')

    };

    return {
        getProjects: getProjectsData,
        isFetching: projects.length === 0,
        projects: projects,
        createProject
    };
};

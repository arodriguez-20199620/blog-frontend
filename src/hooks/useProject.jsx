import { useState } from "react";
import toast from "react-hot-toast";
import { getProjects } from "../services/api"; // Asegúrate de importar la función getProjects desde tu archivo de servicios API

export const useProjects = () => {
    const [projects, setProjects] = useState([]);

    const getProjectsData = async () => {
        try {
            const response = await getProjects();
            // console.log(response);
            setProjects(response.data);
        } catch (error) {
            toast.error(
                error?.response?.data || 'Ocurrió un error al obtener los proyectos'
            );
        }
    };

    return {
        getProjects: getProjectsData,
        isFetching: projects.length === 0,
        projects: projects
    };
};

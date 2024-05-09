import React from 'react'
import { Card } from '../components/Card'
import { Navbar } from '../components/Navbar'
import { Herosection } from '../components/Herosection'
import { useProjects } from '../hooks/useProject'
import { useEffect } from 'react';


export const Home = () => {
    const { getProjects, isFetching, projects } = useProjects(); // Llama al hook useProjects y extrae las variables necesarias

    useEffect(() => {

        getProjects();
    }, []);

    return (
        <>
            <Navbar />
            <Herosection />
            <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
            <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
                    {isFetching ? (
                        <div>Cargando...</div>
                    ) : (
                        <>
                            {projects.map(project => (
                                <Card key={project._id} data={project}  img={"https://images.pexels.com/photos/196667/pexels-photo-196667.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"}/>
                            ))} 
                        </>
                    )}
                </div>
            </div>
        </>
    )
}

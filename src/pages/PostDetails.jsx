import React, { useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { useProjects } from '../hooks/useProject';
import { useParams } from 'react-router-dom';
import { Card } from '../components/Card';

export const PostDetails = () => {
    const { projectId } = useParams();
    const { findByIdProject, isFetching, projects } = useProjects();

    useEffect(() => {
        findByIdProject(projectId);
    }, [projectId]); 
    
    const project = projects.find(proj => proj._id === projectId);

    return (
        <>
            <Navbar />
            <div className="container mx-auto mt-8">
                <div className="flex flex-wrap justify-between">
                    <div className="w-full md:w-8/12 px-4 mb-8">
                        <img src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Featured Image" className="w-full h-64 object-cover rounded" />
                        {project && (
                            <>
                                <h2 className="text-4xl font-bold mt-4 mb-2">{project.title}</h2>
                                <p className="text-gray-700 mb-4">{project.description}</p>
                                <a href={project.code} className="text-blue-500 hover:text-blue-700 transition duration-300"> Ver codigo</a>

                            </>
                        )}

                    </div>
                    <div className="w-full md:w-4/12 px-4 mb-8">
                        <div className="bg-gray-100 px-4 py-6 rounded">
                            <h3 className="text-lg font-bold mb-2">Comentarios</h3>
                            <ul className="list-disc list-inside">
                                <li><a href="#" className="text-gray-700 hover:text-gray-900">Technology</a></li>
                                <li><a href="#" className="text-gray-700 hover:text-gray-900">Travel</a></li>
                                <li><a href="#" className="text-gray-700 hover:text-gray-900">Food</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

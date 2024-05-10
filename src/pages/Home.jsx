import React from 'react'
import { Card } from '../components/Card'
import { Navbar } from '../components/Navbar'
import { Herosection } from '../components/Herosection'
import { useProjects } from '../hooks/useProject'
import { useEffect } from 'react';
import { Footer } from '../components/Footer'

export const Home = () => {

    const { getProjects, isFetching, projects } = useProjects();
    useEffect(() => {

        getProjects();
    }, []);

    return (
        <>
            <Navbar />
            <Herosection />
            <div className='bg-neutral-100'>
        
                <div className="max-w-screen-2xl mx-auto p-5 sm:p-10 md:p-16">
                <h1 className='font-bold text-3xl mb-5 text-center'> Articulos </h1>
                    <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">

                        {isFetching ? (
                            <div>Cargando...</div>
                        ) : (
                            <>
                                {projects.map(project => (
                                    <Card key={project._id} data={project} img={"https://images.pexels.com/photos/196667/pexels-photo-196667.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"} />
                                ))}
                                {projects.map(project => (
                                    <Card key={project._id} data={project} img={"https://images.pexels.com/photos/196667/pexels-photo-196667.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"} />
                                ))} {projects.map(project => (
                                    <Card key={project._id} data={project} img={"https://images.pexels.com/photos/196667/pexels-photo-196667.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"} />
                                ))} {projects.map(project => (
                                    <Card key={project._id} data={project} img={"https://images.pexels.com/photos/196667/pexels-photo-196667.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"} />
                                ))} {projects.map(project => (
                                    <Card key={project._id} data={project} img={"https://images.pexels.com/photos/196667/pexels-photo-196667.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"} />
                                ))} {projects.map(project => (
                                    <Card key={project._id} data={project} img={"https://images.pexels.com/photos/196667/pexels-photo-196667.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"} />
                                ))} {projects.map(project => (
                                    <Card key={project._id} data={project} img={"https://images.pexels.com/photos/196667/pexels-photo-196667.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"} />
                                ))} {projects.map(project => (
                                    <Card key={project._id} data={project} img={"https://images.pexels.com/photos/196667/pexels-photo-196667.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"} />
                                ))}
                            </>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

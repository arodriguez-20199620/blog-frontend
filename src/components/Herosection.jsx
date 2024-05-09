import React from 'react';
import herobg from '../assets/img/hero.jpg';

export const Herosection = () => {
    return (
        <div className="bg-gray-900 py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-5xl font-bold text-white">Bienvenido a nuestro Blog Minimalista</h1>
                <p className="mt-4 text-xl text-gray-400">Explora artículos interesantes sobre diversos temas</p>
                <div className="mt-8">
                    <a href="#" className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 px-8 rounded-full">Explorar</a>
                </div>
            </div>
        </div>
    );
};

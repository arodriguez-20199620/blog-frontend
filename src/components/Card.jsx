import React from 'react'

export const Card = ({ data, img }) => {

    const { title, description, code, authorName, authorEmail, createdAt } = data;

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    };

    return (
        <div className="rounded overflow-hidden shadow-lg">
            <a href="#"></a>
            <div className="relative">
                <a href="#">
                    <img class="w-full"
                        src="https://images.pexels.com/photos/196667/pexels-photo-196667.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"
                        alt="Sunset in the mountains"/>
                        <div
                            className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
                        </div>
                </a>
            </div>
            <div className="flex flex-col  justify-between px-6 py-4">
                <a href="#" className="inline-block mb-4 text-xs font-bold capitalize relative">
                    <span className="border-b-2 border-blue-600 hover:text-blue-600">
                        {authorName}
                    </span>
                </a>
                <a href="#"
                    className="font-bold text-2xl inline-block hover:text-indigo-600 transition duration-500 ease-in-out">{title}</a>
                <p className="text-gray-500 ">
                    {description}
                </p>
            </div>
            <div className="px-6 py-4 flex flex-row items-center">
                <span href="#" className="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row items-center">
                    <span className="ml-2">{formatDate(createdAt)}</span>
                </span>
            </div>
        </div>
    )
}

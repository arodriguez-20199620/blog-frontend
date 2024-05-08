import React from 'react'

export const Herosrction = () => {
    return (
        <div class="relative w-full h-[400px]" id="home">
            <div class="absolute inset-0 opacity-70">
                <img src="https://image1.jdomni.in/banner/13062021/0A/52/CC/1AF5FC422867D96E06C4B7BD69_1623557926542.png" alt="Background Image" class="object-cover object-center w-full h-full" />

            </div>
            <div class="absolute inset-9 flex flex-col md:flex-row items-center justify-between">
                <div class="md:w-1/2 mb-4 md:mb-0">
                    <h1 class="text-grey-700 font-medium text-4xl md:text-5xl leading-tight mb-2">Angel Kaled Rodriguez Soc</h1>
                    <p class="font-regular text-xl mb-8 mt-4">This is my blog</p>
                    <a href="#contactUs"
                        class="px-6 py-3 bg-[#c8a876] text-white font-medium rounded-full hover:bg-[#c09858]  transition duration-200">Contact
                        Us</a>
                </div>
            </div>
        </div>
    )
}

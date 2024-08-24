import React from 'react'
import useTheme from '../contexts/theme';
import { useState } from 'react';

export default function Card() {
    const { themeMode } = useTheme()
    const [visible, setvisible] = useState(false);

    return (
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="/">
                <img className="p-8 rounded-t-lg" src={themeMode === "dark" ? "https://plus.unsplash.com/premium_photo-1685959222430-9ab84326847f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" : "https://plus.unsplash.com/premium_photo-1663013006667-e07512fd39d2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt="Morning" />
            </a>
            <div className="px-5 pb-5">
                <a href="/">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        {themeMode === "dark" ? "When life gets too overwhelming, just look up at the night sky and loose yourself for a while." : "For each new morning let there be flow of love. Let there be light of happiness in every direction"}
                    </h5>
                </a>
                <div className="flex items-center justify-between">
                    <a
                        href="/"
                        className="mx-20 mt-8 bg-gray-400 text-black  hover:text-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg
                         hover:bg-gray-600 text-sm px-5 py-2.5 text-center  dark:text-black dark:bg-white dark:hover:bg-gray-600"

                        onClick={() => {setvisible(!visible)}}
                    >
                        Welcome Message
                    </a>

                    <span
                        className={`text-black ${visible ? "" : "hidden"} dark:text-white`}
                    >
                        {themeMode === "dark" ? "dark" : "Light"}
                        {/* console.log("false") */}
                    </span>
                </div>
            </div>
        </div>
    );
}
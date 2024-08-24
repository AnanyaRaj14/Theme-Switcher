import React from 'react';
import useTheme from '../contexts/theme';
import { FiSun, FiMoon } from 'react-icons/fi'; 

export default function ThemeBtn() {
    const { themeMode, lightTheme, darkTheme } = useTheme();

    const toggleTheme = () => {
        if (themeMode === 'dark') {
            lightTheme();
        } else {
            darkTheme();
        }
    };

    return (
        <button
            className="flex items-center px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-800"
            onClick={toggleTheme}
        >
            {themeMode === 'dark' ? (
                <FiSun className="text-yellow-500" />
            ) : (
                <FiMoon className="text-blue-500" />
            )}
        </button>
    );
}
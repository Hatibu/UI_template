import React from 'react'
import useTheme from './hooks/useTheme';

const DarkMode = () => {
    const [nextTheme, setTheme] = useTheme();
    return (
        <div className="dark-mode">
           <div className="flex justify-center mt-10 bg-white dark:bg-black">
                <button onClick={() => setTheme(nextTheme)} type="button" className="border-gray-200 bg-indigo-400 py-2 px-4 rounded-lg focus:outline-none ">
                        Switch Theme
                </button>

                <div className="ml-5 text-black dark:text-white">Light mode and Dark mode</div>
               
               

            </div>
        </div>
    )
}

export default DarkMode

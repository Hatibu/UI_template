import React from 'react'
import useTheme from './hooks/useTheme';

const DarkMode = () => {
    const [nextTheme, setTheme] = useTheme();
    return (
        <div className="dark-mode">
           
        </div>
    )
}

export default DarkMode

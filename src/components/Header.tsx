import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

export default function Header(){ 
    const [darkMode, setDarkMode ] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        console.log("Dark Mode");
        document.documentElement.classList.toggle('dark');
    }
    return (
        <header className="bg-white dark:bg-gray-800 shadow-md">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
               <h1 className='text-2xl font-bold'>Chanpech Hoeng</h1> 
                <nav>
                    <ul className='flex space-x-4'>
                        <li><a href="#about" className="hover:text-blue-500">About</a></li>
                        <li><a href="#experience" className="hover:text-blue-500">Experience</a></li>
                        <li><a href="#projects" className="hover:text-blue-500">Projects</a></li>
                        <li><a href="#courses" className="hover:text-blue-500">Courses</a></li>
                        <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
                    </ul>
                </nav>
                <button className='p-2 rounded-full hover:bg-gray-200 dark:hover:bg:gray-700' onClick={toggleDarkMode}>
                    {darkMode ? <Sun className='w-5 h-5' /> : <Moon className='w-5 h-5'/>}
                </button>
            </div>
        </header>
    )
}
import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-xl font-bold">
                    Help Center
                </div>
                <div className="md:hidden">
                    <button
                        onClick={toggleMenu}
                        className="text-white focus:outline-none"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            ></path>
                        </svg>
                    </button>
                </div>
                <ul className={`flex-col md:flex-row md:flex md:space-x-6 ${isOpen ? 'flex' : 'hidden'}`}>
                    <li>
                        <a href="#home" className="block text-white hover:text-gray-300 px-2 py-1">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#about" className="block text-white hover:text-gray-300 px-2 py-1">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#services" className="block text-white hover:text-gray-300 px-2 py-1">
                            Services
                        </a>
                    </li>
                    <li>
                        <a href="#contact" className="block text-white hover:text-gray-300 px-2 py-1">
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;

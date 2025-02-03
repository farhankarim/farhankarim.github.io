import React from 'react';

function Header() {
    return (
        <>
            <nav className="bg-gray-800 p-4 fixed w-full z-10 top-0">
                <div className="max-w-5xl mx-auto flex justify-center items-center">
                    <div className="space-x-4">
                        <a href="#about" className="text-gray-400 hover:text-blue-400 transition duration-300">About</a>
                        <a href="#skills" className="text-gray-400 hover:text-blue-400 transition duration-300">Skills</a>
                        <a href="#education" className="text-gray-400 hover:text-blue-400 transition duration-300">Education</a>
                        <a href="#experience" className="text-gray-400 hover:text-blue-400 transition duration-300">Experience</a>
                        <a href="#projects" className="text-gray-400 hover:text-blue-400 transition duration-300">Projects</a>
                    </div>
                </div>
            </nav>
            <header className="text-center py-20 mt-16">
                <h1 className="text-5xl font-bold text-blue-400">Farhan Karim</h1>
                <p className="text-lg text-gray-400">Software Engineer</p>
                <p className="text-gray-400 mt-2">
                    <a href="mailto:farhankarimcs@hotmail.com" target="_blank" rel="noopener noreferrer" className="hidden sm:inline"><i
                        className="fas fa-envelope"></i> farhankarimcs@hotmail.com</a>
                    <a href="mailto:farhankarimcs@hotmail.com" target="_blank" rel="noopener noreferrer" className="sm:hidden"><i
                        className="fas fa-envelope"></i></a>
                    <i className="fas fa-phone ml-4 hidden sm:inline"></i> <span className="hidden sm:inline">+92 315 2063180</span>
                    <i className="fas fa-map-marker-alt ml-4 hidden sm:inline"></i> <span className="hidden sm:inline">Karachi, Pakistan</span>
                    <a href="https://www.linkedin.com/in/farhan-karim/" target="_blank" rel="noopener noreferrer" className="hidden sm:inline">
                        <i className="ml-4 fab fa-linkedin"></i> https://www.linkedin.com/in/farhan-karim/
                    </a>
                    <a href="https://www.linkedin.com/in/farhan-karim/" target="_blank" rel="noopener noreferrer" className="sm:hidden">
                        <i className="ml-4 fab fa-linkedin"></i>
                    </a>
                </p>
            </header>
        </>
    );
}

export default Header;

import React, { useState } from "react";

function Header() {

    const [nav, setNav] = useState(false);

    const showNav = () => {
      setNav(!nav);
    };

    return (
        <>
                    {/* desktop nav */}
                    <nav className="bg-gray-800 p-4 fixed w-full z-10 top-0 hidden md:flex gap-5 fixed top-0 left-0 right-0 z-50">
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

        {/* hamburger */}
        {nav ? (
          // close button
          <i
            className="fixed top-0 left-0 right-[30px] fa fa-times text-3xl z-50 md:hidden"
            aria-hidden="true"
            onClick={showNav}
          ></i>
        ) : (
          <i
            className="fixed top-0 left-0 fa fa-bars text-1xl md:hidden"
            aria-hidden="true"
            onClick={showNav}
          ></i>
        )}

        {/* mobile nav */}
        <nav
          className={`h-[100vh] fixed top-[0px] flex flex-col justify-around items-center w-full md:hidden bg-gray-800 z-40 duration-1000 ${
            nav ? "right-[0px]" : "right-[-100vw]"
          } `}
        >
             <a href="#"  onClick={showNav} className="text-gray-400 hover:text-blue-400 transition duration-300">
            Home
          </a>
          <a href="#about"  onClick={showNav} className="text-gray-400 hover:text-blue-400 transition duration-300">
            About
          </a>
          <a href="#skills" className="text-gray-400 hover:text-blue-400 transition duration-300">
            Skills
          </a>
          <a href="#education"  onClick={showNav} className="text-gray-400 hover:text-blue-400 transition duration-300">
            Education
          </a>
          <a href="#experience"  onClick={showNav} className="text-gray-400 hover:text-blue-400 transition duration-300">
            Projects
          </a>
         
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
            <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
        </>
    );
}

export default Header;

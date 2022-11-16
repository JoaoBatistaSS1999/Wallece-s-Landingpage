import React, { useState } from "react";

import HeaderLogo from "../../Assets/Logos/HeaderLogo.png";
// import Twitter from "../../assets/social/twitterWhite.png";
// import Discord from "../../assets/social/discordia.png";

const Header = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav((prevState) => !prevState);
  };

  return (
    <header className="flex justify-center w-full bg-[#181A1F]">
      <div className="max-w-screen-2xl w-full h-16 flex justify-between items-center font-Orbitron p-4">
        <h1 className="text-2xl cursor-pointer font-bold text-white flex items-center gap-3 ">
          <img src={HeaderLogo} alt="" />
          <p className="flex justify-end max-h-full font-semibold items-end">
            Kristin
          </p>
        </h1>

        <div className="hidden lg:flex justify-center items-center gap-3">
          <ul className="flex justify-center items-center mr-3 gap-4 text-lg font-semibold text-white">
            <a href="#about">
              <li className="hover:text-[#7100E2] hover:underline-offset-4 transition-all ease-in-out duration-500">
                About
              </li>
            </a>
            <a href="#features">
              <li className="hover:text-[#7100E2] hover:underline-offset-4 transition-all ease-in-out duration-500">
                Features
              </li>
            </a>
            <a href="#partners">
              <li className="hover:text-[#7100E2] hover:underline-offset-4 transition-all ease-in-out duration-500">
                Partners
              </li>
            </a>
            <a href="#roadmap">
              <li className="hover:text-[#7100E2] hover:underline-offset-4 transition-all ease-in-out duration-500">
                Roadmap
              </li>
            </a>
            <a href="#team">
              <li className="hover:text-[#7100E2] hover:underline-offset-4 transition-all ease-in-out duration-500">
                Team
              </li>
            </a>
          </ul>
          <a
            href="https://www.youtube.com/watch?v=X791IzOwt3Q&list=RDNl-RVIdTUVI&index=7"
            target="_blank"
            rel="noreferrer"
            className="font-Orbitron"
          >
            <button className="py-2 px-3 bg-[#7100E2] rounded-lg text-white font-Orbitron font-bold hover:bg-[#470687] transition-all ease-in-out duration-300">
              Launch App
            </button>
          </a>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="block lg:hidden">
          <button
            onClick={handleNav}
            className="p-2 text-gray-600 bg-gray-100 rounded transition hover:text-gray-600/75"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? "lg:hidden fixed z-30 right-0 top-0 w-full h-screen drop-shadow-2xl "
              : null
          }
        >
          <div
            className={
              nav
                ? "bg-[#000000] fixed z-10 flex flex-col justify-between right-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen text-white p-10 ease-in duration-500"
                : "fixed right-[-130%] top-0 p-10 ease-in duration-500"
            }
          >
            <div className="flex flex-col w-full font-Orbitron items-center justify-between">
              <div className="flex justify-between items-center w-full mb-5">
                <h1 className="text-2xl font-bold">Project</h1>
                <div
                  onClick={handleNav}
                  className="rounded shadow-lg bg-white w-9 h-9 text-black p-2 flex justify-center items-center cursor-pointer"
                >
                  &#10005;
                </div>
              </div>

              <ul className="uppercase w-full h-fit flex flex-col items-center gap-10 text-xl py-3  justify-center">
                <a href="#about">
                  <li onClick={() => setNav(false)} className="py-4">
                    About
                  </li>
                </a>
                <a href="#features">
                  <li onClick={() => setNav(false)} className="py-4">
                    Features
                  </li>
                </a>
                <a href="#partners">
                  <li onClick={() => setNav(false)} className="py-4">
                    Partners
                  </li>
                </a>
                <a href="#roadmap">
                  <li onClick={() => setNav(false)} className="py-4">
                    Roadmap
                  </li>
                </a>
                <a href="#team">
                  <li onClick={() => setNav(false)} className="py-4">
                    Team
                  </li>
                </a>
              </ul>
            </div>

            {/* <div className="py-4 flex flex-col">
              <div className="-blue-500">
                <div className="flex justify-center items-center gap-3">
                  <a
                    className="px-5 py-2.5 text-sm font-medium"
                    href="https://www.youtube.com/watch?v=vDqULFUg6CY"
                    target="_black"
                    rel="noreferrer"
                  >
                    <img src={Twitter} alt="" className="h-12" />
                  </a>

                  <a
                    className="px-5 py-2.5 text-sm font-medium"
                    href="https://www.youtube.com/watch?v=vDqULFUg6CY"
                    target="_black"
                    rel="noreferrer"
                  >
                    <img src={Discord} alt="" className="h-12" />
                  </a>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

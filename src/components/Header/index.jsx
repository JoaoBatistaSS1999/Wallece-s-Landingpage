import React, { useState } from "react";
import styles from "./styles.module.css";

import HeaderLogo from "../../Assets/Logos/HeaderLogo.png";
import AppButton from "../UI/AppButton";
import HamburgerIcon from "../UI/HamburgerIcon";
import CloseIcon from "../UI/CloseIcon";

import Twitter from "../../Assets/Social/twitter.png";
import Telegram from "../../Assets/Social/telegram.png";
import Discord from "../../Assets/Social/discord.png";

const Header = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav((prevState) => !prevState);
  };

  return (
    <header className="flex justify-center w-full bg-[#181A1F]">
      <div className="max-w-screen-2xl w-full h-16 flex justify-between items-center font-Orbitron p-4">
        <h1 className="text-2xl cursor-pointer font-bold text-white flex items-center gap-5">
          <img src={HeaderLogo} alt="" />
          <p className="flex justify-end font-thin max-h-full items-end">
            Kristim
          </p>
        </h1>
        <div className="hidden lg:flex gap-5">
          <ul className={styles.nav}>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#roadmap">Roadmap</a>
            </li>
            <li>
              <a href="#partners">Partners</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="#team">Team</a>
            </li>
          </ul>

          <AppButton />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex justify-center items-center lg:hidden">
          <HamburgerIcon onClick={handleNav} />
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
                ? "bg-[#000000] fixed z-10 flex flex-col justify-between right-0 bottom-0 top-0 w-[100%] sm:w-[60%] md:w-[45%] h-screen text-white p-10 ease-in duration-500"
                : "fixed right-[-130%] top-0 p-10 ease-in duration-500"
            }
          >
            <div className="flex flex-col w-full h-screen font-Orbitron items-center justify-start">
              <div className="flex justify-between items-center w-full mb-5">
                <h1 className="text-2xl font-bold">Kristim</h1>
                <div onClick={handleNav}>
                  <CloseIcon />
                </div>
              </div>
              <div className="flex flex-col h-full items-center gap-10 w-full">
                <ul className="uppercase w-full flex-grow flex flex-col items-center gap-5 text-xl py-2  justify-center">
                  <a href="#about">
                    <li onClick={() => setNav(false)} className="py-2">
                      About
                    </li>
                  </a>
                  <a href="#features">
                    <li onClick={() => setNav(false)} className="py-2">
                      Features
                    </li>
                  </a>
                  <a href="#roadmap">
                    <li onClick={() => setNav(false)} className="py-2">
                      Roadmap
                    </li>
                  </a>
                  <a href="#partners">
                    <li onClick={() => setNav(false)} className="py-2">
                      Partners
                    </li>
                  </a>
                  <a href="#contact">
                    <li onClick={() => setNav(false)} className="py-2">
                      Contact
                    </li>
                  </a>
                  <a href="#team">
                    <li onClick={() => setNav(false)} className="py-2">
                      Team
                    </li>
                  </a>
                </ul>

                <div className="flex flex-col items-center gap-5 border-t border-gray-500 pt-5 w-full">
                  <h2 className="font-bold text-xl mb-3">Join Us</h2>
                  <div className="flex gap-5">
                    <img src={Twitter} alt="twitter" className="h-12" />
                    <img src={Discord} alt="Discord" className="h-12" />
                    <img src={Telegram} alt="Telegram" className="h-12" />
                  </div>
                </div>
              </div>
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

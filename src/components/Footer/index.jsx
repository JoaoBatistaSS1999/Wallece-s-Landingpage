import medium from "../../Assets/Social/medium.png";
import twitter from "../../Assets/Social/twitter.png";
import discord from "../../Assets/Social/discord.png";
import top from "../../Assets/Social/arrowUp.png";

const Footer = () => {
  return (
    <div>
      <footer
        aria-label="Site Footer"
        class="bg-black text-white font-ChakraPetch"
      >
        <div class="mx-auto max-w-screen-xl sm:px-4 px-1 pt-16 pb-6 lg:px-8 lg:pt-24">
          <div className="flex flex-col gap-10 items-center lg:flex-row lg:items-start justify-between">
            <div className="font-ChakraPetch">
              <div class="flex justify-center text-teal-600 sm:justify-start"></div>
              <h2 className="text-[50px] text-center lg:text-start font-bold">
                Logo
              </h2>
              <p class="mt-2 max-w-md text-center lg:text-start leading-relaxed sm:mx-0 sm:max-w-xs">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Incidunt consequuntur amet culpa cum itaque neque.
              </p>
            </div>

            <div className="max-w-[500px] w-full flex justify-center sm:gap-2 flex-wrap">
              <div class="text-center sm:text-left max-w-[150px] mb-10 w-full">
                <p class="text-2xl font-bold cursor-pointer">About</p>

                <nav aria-label="Footer Services Nav" class="mt-4">
                  <ul class="space-y-4 text-sm">
                    <ul class="space-y-4 text-sm">
                      <li className="cursor-pointer hover:text-gray-400">
                        <a
                          href="https://www.youtube.com/watch?v=QjlFqgRbICY&list=RDQjlFqgRbICY&start_radio=1"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Documentation
                        </a>
                      </li>
                      <li className="cursor-pointer hover:text-gray-400">
                        <a
                          href="https://www.youtube.com/watch?v=QjlFqgRbICY&list=RDQjlFqgRbICY&start_radio=1"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Lottery
                        </a>
                      </li>
                      <li className="cursor-pointer hover:text-gray-400">
                        <a
                          href="https://www.youtube.com/watch?v=QjlFqgRbICY&list=RDQjlFqgRbICY&start_radio=1"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Github
                        </a>
                      </li>
                      <li className="cursor-pointer hover:text-gray-400">
                        <a
                          href="https://www.youtube.com/watch?v=QjlFqgRbICY&list=RDQjlFqgRbICY&start_radio=1"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Synthetics
                        </a>
                      </li>
                    </ul>
                  </ul>
                </nav>
              </div>

              <div class="text-center sm:text-left max-w-[150px] mb-10 w-full">
                <p class="text-2xl font-bold cursor-pointer">Sections</p>

                <nav aria-label="Footer Services Nav" class="mt-4">
                  <ul class="space-y-4 text-sm">
                    <ul class="space-y-4 text-sm">
                      <li className="cursor-pointer hover:text-gray-400">
                        <a href="#about">About</a>
                      </li>
                      <li className="cursor-pointer hover:text-gray-400">
                        <a href="#features">Features</a>
                      </li>
                      <li className="cursor-pointer hover:text-gray-400">
                        <a href="#roadmap">Roadmap</a>
                      </li>

                      <li className="cursor-pointer hover:text-gray-400">
                        <a href="#contact">Contact</a>
                      </li>
                    </ul>
                  </ul>
                </nav>
              </div>

              <div class="text-center sm:text-left max-w-[150px] mb-10 w-full">
                <p class="text-2xl font-bold cursor-pointer">Contact</p>

                <nav aria-label="Footer Services Nav" class="mt-4">
                  <ul class="space-y-4 text-sm">
                    <ul class="space-y-4 text-sm">
                      <li className="cursor-pointer hover:text-gray-400">
                        <a
                          href="https://t.me/wecryptohere"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Telegram
                        </a>
                      </li>
                      <li className="cursor-pointer hover:text-gray-400">
                        <a
                          href="https://twitter.com/KrstmTech"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Twitter
                        </a>
                      </li>
                      <li className="cursor-pointer hover:text-gray-400">
                        <a
                          href="https://www.youtube.com/watch?v=YpugK0RpEaU&list=RDQjlFqgRbICY&index=2"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Discord
                        </a>
                      </li>
                      <li className="cursor-pointer hover:text-gray-400">
                        <a
                          href="https://www.youtube.com/watch?v=YpugK0RpEaU&list=RDQjlFqgRbICY&index=2"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Github
                        </a>
                      </li>
                    </ul>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="flex flex-col w-fit">
              <ul className="w-full flex justify-center items-center gap-2">
                <a
                  href="https://twitter.com/KrstmTech"
                  target="_blank"
                  rel="noreferrer"
                >
                  <li>
                    <img src={twitter} alt="twitter" className="h-9" />
                  </li>
                </a>

                <a
                  href="https://www.figma.com/file/1w6lQw5HVWrL36V7qFQlLq/Arc's-Landingpage?node-id=2%3A44"
                  target="_blank"
                  rel="noreferrer"
                >
                  <li>
                    <img src={discord} alt="discord" className="h-9" />
                  </li>
                </a>

                <a
                  href="https://www.figma.com/file/1w6lQw5HVWrL36V7qFQlLq/Arc's-Landingpage?node-id=2%3A44"
                  target="_blank"
                  rel="noreferrer"
                >
                  <li>
                    <img src={medium} alt="medium" className="h-9" />
                  </li>
                </a>
              </ul>
              <div className="w-full mt-10 flex justify-center lgjustify-end items-center">
                <a href="#home">
                  <div className="flex bg-white hover:bg-[#9754da] ease-in-out duration-500 rounded-xl w-fit p-3 justify-center items-center">
                    <img src={top} alt="" className="h-6 lg:h-10" />
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* trade marks */}

          <div class="mt-12 border-t border-gray-100 pt-6">
            <div class="text-center sm:flex sm:justify-between sm:text-left">
              <p class="text-sm text-white">
                <span class="block sm:inline">All rights reserved.</span>

                <a
                  class="inline-block text-[#c08ef1]  underline transition hover:text-[#8e31ea]"
                  href="/"
                >
                  Terms & Conditions
                </a>

                <span>&middot;</span>

                <a
                  class="inline-block text-[#c08ef1] underline transition hover:text-[#8e31ea]"
                  href="/"
                >
                  Privacy Policy
                </a>
              </p>

              <p class="mt-4 text-sm text-[#8a21f2] sm:order-first sm:mt-0">
                &copy; 2022 Company Name
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;

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
        <div class="mx-auto max-w-screen-xl px-4 pt-16 pb-6 sm:px-6 lg:px-8 lg:pt-24">
          <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="font-ChakraPetch">
              <div class="flex justify-center text-teal-600 sm:justify-start"></div>
              <h2 className="text-[50px] font-bold">Logo</h2>
              <p class="mt-2 max-w-md text-center leading-relaxed sm:mx-0 sm:max-w-xs sm:text-left">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Incidunt consequuntur amet culpa cum itaque neque.
              </p>
            </div>

            <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
              <div class="text-center sm:text-left">
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

              <div class="text-center sm:text-left">
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
                      <li className="cursor-pointer hover:text-gray-400">
                        <a href="#team">Team</a>
                      </li>
                    </ul>
                  </ul>
                </nav>
              </div>

              <div class="text-center sm:text-left">
                <p class="text-2xl font-bold cursor-pointer">Contact</p>

                <nav aria-label="Footer Services Nav" class="mt-4">
                  <ul class="space-y-4 text-sm">
                    <ul class="space-y-4 text-sm">
                      <li className="cursor-pointer hover:text-gray-400">
                        <a
                          href="https://www.youtube.com/watch?v=YpugK0RpEaU&list=RDQjlFqgRbICY&index=2"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Telegram
                        </a>
                      </li>
                      <li className="cursor-pointer hover:text-gray-400">
                        <a
                          href="https://www.youtube.com/watch?v=YpugK0RpEaU&list=RDQjlFqgRbICY&index=2"
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

              <div className="flex flex-col">
                <ul className="w-full flex justify-center items-center gap-5">
                  <a
                    href="https://www.figma.com/file/1w6lQw5HVWrL36V7qFQlLq/Arc's-Landingpage?node-id=2%3A44"
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
                <div className="w-full mt-10 flex justify-end items-center">
                  <a href="#" className="">
                    <div className="flex bg-white hover:bg-[#9754da] ease-in-out duration-500 rounded-xl w-fit p-3 justify-center items-center">
                      <img src={top} alt="" className="h-6 sm:h-10 sm:w-10" />
                    </div>
                  </a>
                </div>
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

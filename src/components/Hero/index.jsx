import Github from "../../Assets/Social/github.png";
import Medium from "../../Assets/Social/medium.png";
import Twitter from "../../Assets/Social/twitter.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full h-[calc(100vh-64px)] flex justify-center font-Orbitron items-end bg-[#262626] text-white"
    >
      <div className="max-w-screen-xl w-full flex justify-start px-2 lg:px-10">
        <div className="w-full flex flex-col pb-20 justify-center">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center lg:text-start mb-7">
            Project's Name goes here
          </h2>
          <div className="w-full flex justify-center lg:justify-start">
            <p className="sm:max-w-[70%] w-full flex justify-start text-center lg:max-w-[50%] text-md lg:text-2xl lg:text-start mb-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus id explicabo ipsam recusandae non
            </p>
          </div>

          {/* done */}
          <div className="flex justify-center lg:justify-start items-center gap-4 w-full flex-wrap">
            <a href="#contact">
              <button className="bg-[#8833e9] text-white hover:bg-[#5a16a7] transition-all duration-500 px-4 sm:px-8 py-3 text-[15px] sm:text-lg font-semibold rounded-xl">
                Join Us
              </button>
            </a>
            <a
              href="https://www.youtube.com/watch?v=hN4-Uq02Qzg"
              target="_blank"
              rel="noreferrer"
            >
              <button className="bg-white hover:bg-[#c4c4c4] transition-all duration-500 text-black px-4 sm:px-8 py-3 text-[15px] sm:text-lg font-semibold rounded-xl">
                Documentation
              </button>
            </a>
          </div>

          <div className="w-full flex justify-center lg:justify-start gap-4 mt-10">
            <a
              href="https://www.youtube.com/watch?v=8LVkcXA6Wxc"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Github} alt="" className="h-12" />
            </a>
            <a
              href="https://www.youtube.com/watch?v=8LVkcXA6Wxc"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Medium} alt="" className="h-12" />
            </a>
            <a
              href="https://twitter.com/KrstmTech"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Twitter} alt="" className="h-12" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import SVGIcon from "../UI/SVGIcon";

const About = () => {
  return (
    <div
      id="about"
      className="w-full flex justify-center py-20 bg-[#161616] text-white"
    >
      <section className="max-w-screen-2xl w-full flex flex-wrap justify-center items-center gap-10 2xl:gap-0">
        <div className="w-[500px] h-[400px] lg:h-[600px] bg-[#d3d1d1] mx-4 rounded-2xl"></div>

        <div className="flex flex-col">
          {/* top */}
          <div className="lg:max-w-4xl w-full flex flex-col justify-center items-center mb-5">
            <h2 className="text-2xl font-bold leading-none sm:text-4xl">
              Quo et liber recusabo
            </h2>
            <p className="px-8 my-4 lg:max-w-[60%] text-center">
              Graeco causae vim cu, alii option ancillae sea ut. Ad mea alii
              pertinax, ei sed falli ponderum adipisci. Vis iisque scripta cu.
              Sea ex mollis consulatu dissentiet, dicta viris volutpat mea an,
              et nec discere epicuri
            </p>
          </div>
          {/* paragraphs */}
          <div className="flex justify-center">
            <div className="max-w-3xl w-full flex flex-wrap justify-center gap-5 p-4">
              <div className="flex flex-col items-center justify-center space-y-3 max-w-xs md:justify-start md:items-start">
                <SVGIcon />
                <h5 className="text-xl font-semibold">
                  Est facilisis necessitatibus ea
                </h5>
                <p className="text-center sm:text-start">
                  Ex audiam inermis elaboraret eam, oratio petentium ne cum,
                  mundi interesset sit no.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-3 max-w-xs md:justify-start md:items-start">
                <SVGIcon />
                <h5 className="text-xl font-semibold">
                  Est facilisis necessitatibus ea
                </h5>
                <p className="text-center sm:text-start">
                  Ex audiam inermis elaboraret eam, oratio petentium ne cum,
                  mundi interesset sit no.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-3 max-w-xs md:justify-start md:items-start">
                <SVGIcon />
                <h5 className="text-xl font-semibold">
                  Est facilisis necessitatibus ea
                </h5>
                <p className="text-center sm:text-start">
                  Ex audiam inermis elaboraret eam, oratio petentium ne cum,
                  mundi interesset sit no.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-3 max-w-xs md:justify-start md:items-start">
                <SVGIcon />
                <h5 className="text-xl font-semibold">
                  Est facilisis necessitatibus ea
                </h5>
                <p className="text-center sm:text-start">
                  Ex audiam inermis elaboraret eam, oratio petentium ne cum,
                  mundi interesset sit no.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

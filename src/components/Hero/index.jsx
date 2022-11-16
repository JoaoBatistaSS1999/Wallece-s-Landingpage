const Hero = () => {
  return (
    <section className="w-full min-h-screen flex items-end justify-center bg-[#303030] text-white">
      <div className="max-w-screen-xl w-full flex justify-start sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex flex-col mb-40 justify-center text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl">
            mattis
            <span className="dark:text-violet-400">senectus</span>erat pharetra
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12">
            Dictum aliquam porta in condimentum ac integer
            <br className="hidden md:inline lg:hidden" />
            turpis pulvinar, est scelerisque ligula sem
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <a
              rel="noreferrer"
              href="/"
              className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900"
            >
              Suspendisse
            </a>
            <a
              rel="noreferrer"
              href="/"
              className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100"
            >
              Malesuada
            </a>
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default Hero;

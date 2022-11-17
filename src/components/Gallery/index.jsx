import image1 from "../../Assets/Gallery/Gallery1.jpg";
import image2 from "../../Assets/Gallery/Gallery2.jpg";
import image3 from "../../Assets/Gallery/Gallery3.jpg";
import image4 from "../../Assets/Gallery/Gallery4.jpg";
import BluryButton from "../UI/BluryButton";

const Gallery = () => {
  return (
    <div className="bg-[#161616] flex justify-center items-start py-2 sm:py-20 font-ChakraPetch">
      <div class="max-w-screen-xl w-full p-4 px-4 sm:px-6 lg:px-8 relative py-10">
        <div class="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div class="lg:col-start-2 lg:max-w-2xl ml-auto">
            <p class="text-base font-Orbitron leading-6 text-[#7100E2] font-semibold uppercase">
              Interactive
            </p>
            <h4 class="mt-2 text-2xl leading-8 font-extrabold text-gray-900 dark:text-white sm:text-3xl sm:leading-9">
              Interactivity between team members is the key of the success.
            </h4>
            <p class="mt-4 text-lg leading-6 text-gray-500 dark:text-gray-300">
              Build a simply and powered collaborative space for all your team.
              Track, share, measure, you have a fully control, it&#x27;s never
              be simply and efficient.
            </p>
            <ul class="mt-8 font-Orbitron md:grid md:grid-cols-2 gap-6 mb-10 sm:mb-20">
              <li class="mt-6 lg:mt-0">
                <div class="flex">
                  <span class="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-[#7100E2] text-white">
                    <svg
                      class="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span class="ml-4 text-base leading-6 font-medium text-gray-500 dark:text-gray-200">
                    Live modifications
                  </span>
                </div>
              </li>
              <li class="mt-6 lg:mt-0">
                <div class="flex">
                  <span class="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-[#7100E2] text-white">
                    <svg
                      class="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span class="ml-4 text-base leading-6 font-medium text-gray-500 dark:text-gray-200">
                    Data tracker
                  </span>
                </div>
              </li>
              <li class="mt-6 lg:mt-0">
                <div class="flex">
                  <span class="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-[#7100E2] text-white">
                    <svg
                      class="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span class="ml-4 text-base leading-6 font-medium text-gray-500 dark:text-gray-200">
                    24/24 support
                  </span>
                </div>
              </li>
              <li class="mt-6 lg:mt-0">
                <div class="flex">
                  <span class="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-[#7100E2] text-white">
                    <svg
                      class="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span class="ml-4 text-base leading-6 font-medium text-gray-500 dark:text-gray-200">
                    Free tips to improve work
                  </span>
                </div>
              </li>
            </ul>
            <a
              href="https://www.youtube.com/watch?v=8LVkcXA6Wxc"
              target="_blank"
              rel="noreferrer"
            >
              <div className="w-full flex justify-center lg:justify-start">
                <BluryButton />
              </div>
            </a>
          </div>
          <div class="mt-10 lg:-mx-4 relative relative-20 lg:mt-0 lg:col-start-1">
            <div class="relative space-y-4">
              <div class="flex items-end justify-center lg:justify-start space-x-4">
                <img
                  class="rounded-lg shadow-lg w-32 md:w-56"
                  width="200"
                  src={image1}
                  alt="1"
                />
                <img
                  class="rounded-lg shadow-lg w-40 md:w-64"
                  width="260"
                  src={image2}
                  alt="2"
                />
              </div>
              <div class="flex items-start justify-center lg:justify-start space-x-4 ml-12">
                <img
                  class="rounded-lg shadow-lg w-24 md:w-40"
                  width="170"
                  src={image3}
                  alt="3"
                />
                <img
                  class="rounded-lg shadow-lg w-32 md:w-56"
                  width="200"
                  src={image4}
                  alt="4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;

import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-indigo-900 text-white py-20">
      <div className="absolute inset-0 -z-10">
        <svg
          viewBox="0 0 1440 320"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            fill="#2d2075"
            fillOpacity="1"
            d="M0,224L60,202.7C120,181,240,139,360,112C480,85,600,75,720,101.3C840,128,960,192,1080,208C1200,224,1320,192,1380,176L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto flex flex-col items-center lg:flex-row lg:justify-between lg:px-20">
        <div className="text-center lg:text-left max-w-lg">
          <h2 className="text-lg font-semibold text-gray-300 mb-2">
            Hello I am
          </h2>
          <h1 className="text-5xl font-bold mb-4">Willimes Parker</h1>
          <p className="text-lg font-medium text-gray-300 mb-6">
            Graphic Designer, HTML Coder, PHP Programmer and Project Manager
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-6 mb-6">
            <button className="px-6 py-3 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-700">
              Start Consulting
            </button>
            <div className="flex items-center gap-2">
              <span className="block w-3 h-3 bg-green-500 rounded-full"></span>
              <span className="text-sm font-semibold">
                Available for Freelance
              </span>
            </div>
          </div>
        </div>

        <div className="relative mt-8 lg:mt-0 flex items-center">
          <div className="relative z-10 rounded-full overflow-hidden w-64 h-64">
            <Image
              src="/path-to-image.jpg"
              alt="Willimes Parker"
              width={256}
              height={256}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="absolute -top-4 -right-8 w-20 h-20 border-4 border-yellow-400 rounded-full"></div>

          <div className="absolute bottom-0 right-8 bg-white text-indigo-900 rounded-lg shadow-lg p-4 w-40 text-center">
            <p className="text-3xl font-bold">10K</p>
            <p className="text-sm font-medium">Happy Satisfied Customers</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

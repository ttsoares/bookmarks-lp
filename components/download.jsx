import Image from "next/image";
import React from "react";

const Download = () => {
  return (
    <section className="w-full">
      {/* head */}
      <div className="container mx-auto px-6">
        <h2 className="mb-6 text-3xl font-semibold text-center md:text-4xl">
          Download the extension
        </h2>
        <p className="max-w-lg mx-auto text-center text-grayishBlue">
          We&apos;ve got more browsers in the pipeline. Please do let us know if
          you&apos;ve got a favourite you&apos;d like us to prioritize.
        </p>
      </div>
      {/* browsers */}
      <div id="download-boxes" className="py-32">
        <div className="relative flex flex-col items-center max-w-5xl mx-auto space-y-10 px-10 md:px-6 md:space-y-0 md:space-x-7 md:flex-row">
          <div className="flex flex-col w-full py-6 space-y-4 text-center rounded-lg shadow-lg md:w-1/3">
            <div className="flex justify-center">
              <Image
                src="/logo-chrome.svg"
                alt="Chrome"
                width={80}
                height={80}
              />
            </div>
            <h5 className="pt-6 text-xl font-bold">Add to Chrome</h5>
            <p className="text-gray-400">Minimum Version 62</p>

            <div className="bg-dots bg-repeat-x px-6 pt-6 capitalize">
              <a
                href="#"
                className="block w-full py-3 text-white duration-200 border-2 rounded-lg bg-softBlue hover:text-softBlue hover:bg-white border-softBlue"
              >
                Add & Install Extension
              </a>
            </div>
          </div>

          <div className="w-full md:w-1/3">
            <div className="flex flex-col w-full py-6 space-y-4 text-center rounded-lg shadow-lg md:mt-8">
              <div className="flex justify-center">
                <Image
                  src="/logo-firefox.svg"
                  alt="Firefox"
                  width={80}
                  height={80}
                />
              </div>
              <h5 className="pt-6 text-xl font-bold">Add to Firefox</h5>
              <p className="text-gray-400">Minimum Version 55</p>

              <div className="bg-dots bg-repeat-x px-6 pt-6 capitalize">
                <a
                  href="#"
                  className="block w-full py-3 text-white duration-200 border-2 rounded-lg bg-softBlue hover:text-softBlue hover:bg-white border-softBlue"
                >
                  Add & Install Extension
                </a>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/3">
            <div className="flex flex-col w-full py-6 space-y-4 text-center rounded-lg shadow-lg md:mt-16">
              <div className="flex justify-center">
                <Image
                  src="/logo-opera.svg"
                  alt="Opera"
                  width={80}
                  height={80}
                />
              </div>
              <h5 className="pt-6 text-xl font-bold">Add to Opera</h5>
              <p className="text-gray-400">Minimum Version 46</p>

              <div className="bg-dots bg-repeat-x px-6 pt-6 capitalize">
                <a
                  href="#"
                  className="block w-full py-3 text-white duration-200 border-2 rounded-lg bg-softBlue hover:text-softBlue hover:bg-white border-softBlue"
                >
                  Add & Install Extension
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;

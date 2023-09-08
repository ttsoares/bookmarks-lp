import Image from "next/image";
import React from "react";
import Link from "next/link";

const Download = () => {
  return (
    <section className="w-full lg:mt-[70px]">
      {/* head */}
      <div className="container px-6 mx-auto">
        <h2 className="mb-6 text-3xl font-semibold text-center md:text-3xl">
          Download the extension
        </h2>
        <p className="w-[45%] mx-auto text-center text-grayishBlue">
          We&apos;ve got more browsers in the pipeline. Please do let us know if
          you&apos;ve got a favourite you&apos;d like us to prioritize.
        </p>
      </div>
      {/* browsers */}
      <div className="py-10 lg:mt-5">
        <div className="relative flex flex-col items-center max-w-5xl px-10 mx-auto space-y-10 md:px-6 md:space-y-0 md:space-x-7 md:flex-row">
          <div className="flex flex-col w-full py-6 space-y-3 text-center rounded-lg shadow-lg md:w-1/3 md:-mt-16 md:ml-8">
            <div className="flex justify-center">
              <Image
                src="/logo-chrome.svg"
                alt="Chrome"
                width={100}
                height={100}
              />
            </div>
            <h5 className="pt-6 text-xl font-semibold">Add to Chrome</h5>
            <p className="text-sm text-gray-400">Minimum Version 62</p>

            <div className="px-6 pt-12 pb-4 capitalize bg-repeat-x bg-dots">
              <Link
                href="https://chrome.google.com/webstore/detail/bookmark-managers/idfikogednmhonjfpfhnidolojlckgmd"
                className="block w-full py-3 text-sm text-white duration-200 border-2 rounded-lg bg-softBlue hover:text-softBlue hover:bg-white border-softBlue"
              >
                Add & Install Extension
              </Link>
            </div>
          </div>

          <div className="w-full md:w-1/3">
            <div className="flex flex-col w-full py-6 space-y-3 text-center rounded-lg shadow-lg md:mt-4">
              <div className="flex justify-center">
                <Image
                  src="/logo-firefox.svg"
                  alt="Firefox"
                  width={100}
                  height={100}
                />
              </div>
              <h5 className="pt-6 text-xl font-semibold">Add to Firefox</h5>
              <p className="text-sm text-gray-400">Minimum Version 55</p>

              <div className="px-6 pt-12 pb-4 capitalize bg-repeat-x bg-dots">
                <Link
                  href="https://addons.mozilla.org/en-US/firefox/addon/bookmarks-organizer/"
                  className="block w-full py-3 text-sm text-white duration-200 border-2 rounded-lg bg-softBlue hover:text-softBlue hover:bg-white border-softBlue"
                >
                  Add & Install Extension
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/3">
            <div className="flex flex-col w-full py-6 space-y-3 text-center rounded-lg shadow-lg md:mt-24">
              <div className="flex justify-center">
                <Image
                  src="/logo-opera.svg"
                  alt="Opera"
                  width={100}
                  height={100}
                />
              </div>
              <h5 className="pt-6 text-xl font-semibold">Add to Opera</h5>
              <p className="text-sm text-gray-400">Minimum Version 46</p>

              <div className="px-6 pt-12 pb-4 capitalize bg-repeat-x bg-dots">
                <Link
                  href="https://addons.opera.com/en/extensions/details/bookmarks-manager-and-viewer/"
                  className="block w-full py-3 text-sm text-white duration-200 border-2 rounded-lg bg-softBlue hover:text-softBlue hover:bg-white border-softBlue"
                >
                  Add & Install Extension
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;

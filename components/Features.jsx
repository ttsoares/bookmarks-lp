"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const TABS = [
  {
    img: "/illustration-features-tab-1.svg",
    title: "Bookmark in one click",
    text: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
  },
  {
    img: "/illustration-features-tab-2.svg",
    title: "Intelligent search",
    text: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
  },
  {
    img: "/illustration-features-tab-3.svg",
    title: "Share your bookmarks",
    text: "Easily share your bookmarks and collections with others. Create a shareable a link that you can send at the click of a button.",
  },
];

const Features = () => {
  const [tab, setTab] = useState(0);

  return (
    <section className="w-full mt-9">
      {/* header */}
      <div>
        <div className="px-6 mx-auto mt-[73px]">
          <h2 className="mb-6 text-3xl font-semibold text-center">Features</h2>
          <p className="max-w-lg mx-auto text-center text-grayishBlue">
            Our aim is to make it quick and easy for you to access your
            favourite websites. Your bookmarks sync between your devices so you
            can access them on the go.
          </p>
        </div>
      </div>
      {/* Tabs */}
      <div className="w-full">
        <div className="relative w-full px-6 mx-auto my-6 mt-12 mb-32">
          {/* blue ribon md/lg */}
          <div className="hidden lg:block w-[1500px] h-[350px] right-[56%] absolute rounded-r-full top-[250px] bg-softBlue"></div>
          {/* blue ribon sm */}
          <div className="lg:hidden w-[500px] h-[210px] right-[20%] absolute rounded-r-full top-[360px] bg-softBlue"></div>

          <div className="flex flex-col justify-center w-[60%] mx-auto mb-10 border-b md:space-x-10 md:flex-row">
            <div className="flex flex-col justify-center text-center text-gray-600 cursor-pointer hover:text-softRed md:w-1/3">
              <h2 onClick={() => setTab(0)} className="py-5">
                Simple Bookmarking
              </h2>
              <div
                className={`w-full h-4 ${
                  tab === 0 ? "border-softRed border-b-4" : ""
                }`}
              ></div>
            </div>

            <div className="flex flex-col justify-center text-center text-gray-600 cursor-pointer hover:text-softRed md:w-1/3">
              <h2 onClick={() => setTab(1)} className="py-5">
                Speedy Searching
              </h2>
              <div
                className={`w-full h-4 ${
                  tab === 1 ? "border-softRed border-b-4" : ""
                }`}
              ></div>
            </div>

            <div className="flex flex-col justify-center text-center text-gray-600 cursor-pointer hover:text-softRed md:w-1/3">
              <h2 onClick={() => setTab(2)} className="py-5">
                Easy Sharing
              </h2>
              <div
                className={`w-full h-4 ${
                  tab === 2 ? "border-softRed border-b-4" : ""
                }`}
              ></div>
            </div>
          </div>
          {/* Tabs contents */}
          <div className="w-full mx-auto">
            {TABS.map((elm, index) => {
              if (index === tab) {
                return ATab(index);
              }
              return null;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

function ATab(index) {
  return (
    <div
      key={index}
      className="flex flex-col w-full py-5 md:flex-row md:space-x-10"
    >
      <div className="flex justify-center md:w-1/2 lg:ml-9 lg:mr-28">
        <div className="md:w-[550px] mt-4 mb-3 z-10">
          <Image src={TABS[index].img} alt="" width={750} height={450} />
        </div>
      </div>

      <div className="flex flex-col ml-12 space-y-7 md:w-1/2">
        <h3 className="text-3xl font-semibold text-center lg:pt-16 md:mt-0 md:text-left">
          {TABS[index].title}
        </h3>
        <p className="max-w-md text-center text-grayishBlue md:text-left">
          {TABS[index].text}
        </p>
        <div className="mx-auto md:mx-0">
          <Link href="/moreInfo">
            <p className="px-6 py-3 mt-1 text-sm font-semibold text-white border-2 border-white rounded-lg md:inline-flex bg-softBlue hover:bg-white hover:text-softBlue hover:border-softBlue hover:border-2">
              More Info
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

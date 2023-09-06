import React from "react";
import Image from "next/image";

const Page = () => {
  return (
    <nav className="w-full h-fit mx-auto py-6 border-2 border-red-400">
      <div className="w-full flex items-center justify-between my-6 border-2 border-blue-500">
        <div className="w-[200px] h-20 bg-green-400"></div>
        <div className="w-[300px] h-20 bg-yellow-300"></div>
      </div>
    </nav>
  );
};

export default Page;

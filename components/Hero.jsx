import Image from "next/image";

const Hero = () => {
  return (
    <section>
      <div className="container flex flex-col-reverse mx-auto lg:p-6 lg:flex-row lg:mb-0">
        <div className="flex flex-col mt-10 space-y-8 lg:mt-28 lg:w-1/2 lg:ml-12">
          <h1 className="text-3xl font-semibold text-center lg:text-5xl lg:text-left">
            A Simple Bookmark Manager
          </h1>
          <p className="max-w-md mx-auto text-lg text-center text-gray-400 lg:text-lg lg:text-left lg:mt-0 lg:mx-0">
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </p>

          <div className="flex items-center justify-center w-full space-x-4 lg:justify-start">
            <a
              href="#"
              className="p-4 text-sm font-semibold text-white border-2 rounded shadow-md bg-softBlue border-softBlue md:text-xs hover:bg-white hover:text-softBlue"
            >
              Get It On Chrome
            </a>
            <a
              href="#"
              className="p-4 text-sm font-semibold text-gray-500 border-2 border-gray-300 rounded shadow-md bg-slate-50 md:text-xs hover:bg-white hover:text-gray-400 hover:border-gray-800"
            >
              Get It On Firefox
            </a>
          </div>
        </div>

        <div className="relative mx-auto lg:mx-0 lg:mb-0 lg:w-1/2">
          {/* blue ribbon md/lg*/}
          <div className="hidden lg:block w-[1500px] h-[300px] left-[38%] absolute rounded-l-full top-52 bg-softBlue"></div>
          {/* blue ribbon sm*/}
          <div className="lg:hidden w-[500px] h-[210px] left-[20%] absolute rounded-l-full top-14 bg-softBlue"></div>

          <div className="w-full lg:w-[660px] mt-1">
            <Image
              src="/illustration-hero.svg"
              alt=""
              width={900}
              height={597}
              className="relative z-10 ml-2 overflow-x-visible lg:top-6 xl:top-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

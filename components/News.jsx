"use client";

import { useForm } from "react-hook-form";

const News = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  function submition(data) {
    console.log(data);
    reset();
  }

  return (
    <section className="w-full pt-10 bg-softBlue lg:pb-14">
      <div className="max-w-lg mx-auto">
        <p className="pt-8 mb-10 text-xs tracking-widest text-center text-white uppercase">
          35,000+ Already Joined
        </p>
        <h2 className="mb-6 text-2xl font-semibold text-center text-white px-7 md:text-3xl">
          Stay up-to-date with what we&apos;re doing
        </h2>

        <form
          onSubmit={handleSubmit(submition)}
          noValidate
          className="flex flex-col items-start justify-center max-w-6xl px-6 mx-auto space-y-6 text-base md:flex-row md:space-y-0 md:space-x-4 md:px-0"
        >
          <div className="flex flex-col items-start justify-between mx-auto md:flex-row md:mx-0">
            <div
              className={`h-20 relative ${
                errors.email?.message
                  ? "bg-softRed border-2 border-softRed rounded-md"
                  : ""
              }`}
            >
              <input
                {...register("email", {
                  pattern: {
                    value:
                      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message: "Whoops, make sure it's an email",
                  },
                })}
                type="text"
                className="flex-1 px-6 pt-3 pb-2 mt-3 mb-4 border-white rounded-md border-1 focus:outline-none md:mb-0 w-72"
                placeholder="Enter your email address"
              />
              <p className="mt-2 ml-2 text-xs italic font-semibold text-white bg-softRed">
                {errors.email?.message}
              </p>

              {errors.email?.message && (
                <svg
                  className="absolute top-2.5 right-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                >
                  <g fill="none" fillRule="evenodd">
                    <circle cx="10" cy="10" r="10" fill="#FA5959" />
                    <g fill="#FFF" transform="translate(9 5)">
                      <rect width="2" height="7" rx="1" />
                      <rect width="2" height="2" y="8" rx="1" />
                    </g>
                  </g>
                </svg>
              )}
            </div>

            <input
              type="submit"
              className="inline-flex px-6 py-3 mt-3 ml-6 text-sm font-semibold text-center text-white duration-200 transform rounded-md cursor-pointer focus:outline-none bg-softRed hover:bg-white hover:text-softRed"
              value="Contact Us"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default News;

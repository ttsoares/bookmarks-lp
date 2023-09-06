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
    <section className="bg-softBlue w-full">
      <div className="max-w-lg mx-auto py-24">
        <p className="mb-6 text-xs tracking-widest text-center text-white uppercase">
          35,000+ Already Joined
        </p>
        <h2 className="px-3 mb-6 text-3xl font-semibold text-center text-white md:text-4xl">
          Stay up-to-date with what we&apos;re doing
        </h2>

        <form
          onSubmit={handleSubmit(submition)}
          noValidate
          className="flex flex-col items-start justify-center max-w-6xl mx-auto space-y-6 text-base px-6 md:flex-row md:space-y-0 md:space-x-4 md:px-0"
        >
          <div className="flex flex-col justify-between items-start  mx-auto md:flex-row md:mx-0">
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
                className="flex-1 px-6 pt-3 pb-2 mb-4 rounded-md border-1 border-white focus:outline-none md:mb-0 w-72"
                placeholder="Enter your email address"
              />
              <p className="font-semibold mt-2 ml-2 text-xs bg-softRed text-white italic">
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
              className="inline-flex ml-6 px-6 py-3 font-semibold text-center text-white duration-200 transform rounded-md cursor-pointer focus:outline-none bg-softRed hover:bg-white hover:text-softRed"
              value="Contact Us"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default News;

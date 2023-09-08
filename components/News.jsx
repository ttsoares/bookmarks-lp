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
        <p className="pt-8 mb-5 text-xs tracking-widest text-center text-white uppercase lg:mb-10">
          35,000+ Already Joined
        </p>
        <h2 className="mb-6 text-2xl font-semibold text-center text-white lg:px-7 md:text-3xl">
          Stay up-to-date with what we&apos;re doing
        </h2>

        <form
          onSubmit={handleSubmit(submition)}
          noValidate
          className="flex flex-col items-start justify-center max-w-6xl px-6 mx-auto space-y-6 text-base md:flex-row md:space-y-0 md:space-x-4 md:px-0"
        >
          <div className="flex flex-col items-start justify-between mx-auto md:flex-row md:mx-0">
            <div
              className={`relative ${
                errors.email?.message ? "bg-softRed rounded-md" : ""
              }`}
            >
              <input
                {...register("email", {
                  required: "First fill with a valid address...",
                  pattern: {
                    value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                    message: "Whoops, make sure it's an email",
                  },
                })}
                type="email"
                className="py-2 pt-4 pl-5 m-2 border-white rounded-md focus:outline-none w-72"
                placeholder="&nbsp;&nbsp;&nbsp;Enter your email address"
              />
              <p className="pl-6 mb-2 text-xs italic font-semibold text-white bg-softRed rounded-b-md">
                {errors.email?.message}
              </p>

              {errors.email?.message && (
                <svg
                  className="absolute top-6 right-4 animate-jump animate-infinite"
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
              className={
                `inline-flex w-full px-6 py-3.5 mb-12 text-sm font-semibold text-center text-white duration-200 transform rounded-md cursor-pointer mt-3 md:mt-2 lg:ml-6 focus:outline-none bg-softRed hover:bg-white hover:text-softRed ` +
                `${errors.email?.message ? "hover:border border-softRed" : ""}`
              }
              value="Contact Us"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default News;

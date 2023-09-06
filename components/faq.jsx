const FAQs = [
  {
    title: "What is BookMark?",
    ans: "Porro blanditiis voluptate aliquid ab tempore enim aspernatur cum ut, illum fuga dicta earum? Dolorum aliquam in sapiente       esse hic molestias, ad fuga, autem inventore perferendis dolorem! Culpa, deserunt.",
  },
  {
    title: "How can I request a new browser?",
    ans: "Quod molestiae nihil quasi amet consectetur eos aliquid suscipit quo, dolor esse consequuntur nostrum quia enim nulla maiores labore ipsam eius delectus obcaecati sint eprehenderit impedit harum! Recusandae modi laudantium mollitia officia dolorum suscipit itaque maxime, quia quisquam enim maiores, accusantium est blanditiis vel dolorem?",
  },
  {
    title: "Is there a mobile app?",
    ans: "Sapiente libero expedita repellendus ex perspiciatis qui in vitae illo, a cupiditate culpa saepe nisi id, similique debitis, impedit earum nobis nesciunt facilis? Reiciendis ipsa deserunt adipisci repudiandae optio consectetur sint quam velquaerat nihil quo, nesciunt repellendus aliquam reprehenderit suscipit.",
  },
  {
    title: " What about other Chromium browsers",
    ans: " Earum deleniti iste perspiciatis, consectetur dignissimos voluptatem, doloribus est harum officiis non aperiam odio doloremque aspernatur odit quo vitae amet dolorem cumque. Quia, voluptas vel! Doloremque tempora delectus beatae ducimus obcaecati maxime dolore, molestias sed id modi distinctio deserunt placeat?",
  },
];

const Faq = () => {
  return (
    <section>
      {/* header */}
      <div>
        <div className="container mx-auto">
          <h2 className="mb-6 text-3xl font-semibold text-center md:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="max-w-lg px-6 mx-auto text-center text-graishBlue">
            Here are some of our FAQs. If you have any other questions
            you&apos;d like answered please feel free to email us.
          </p>
        </div>
      </div>
      {/* FAQs */}
      <div>
        <div className="container px-6 mx-auto mb-32">
          <div className="max-w-2xl m-8 mx-auto ">
            {FAQs.map((faq, index) => (
              <div
                className="py-1 border-b outline-none group"
                key={index}
                tabIndex={String(index)}
              >
                <div className="flex items-center justify-between py-3 text-gray-500 transition duration-500 ease-in cursor-pointer group">
                  <div className="transition duration-500 ease-in group-hover:text-red-500">
                    {faq.title}
                  </div>
                  <div className="transition duration-500 ease-in group-focus:rotate-180 group-focus:text-red-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="12"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        d="M1 1l8 8 8-8"
                      />
                    </svg>
                  </div>
                </div>
                <div className="h-0 overflow-hidden transition ease-out duration-2000 group-focus:h-fit">
                  <p className="py-2 text-justify text-gray-400">{faq.ans}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;

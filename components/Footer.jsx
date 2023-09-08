import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full px-8 py-6 bg-veryDarkBlue">
      <div className="flex flex-col items-center justify-between w-full px-32 mx-auto space-y-16 md:flex-row md:space-y-0">
        <div className="flex flex-col items-center justify-between space-y-8 text-lg font-light md:flex-row md:space-y-0 md:space-x-14 text-grayishBlue">
          <Image
            src="/logo-bookmark-inv.svg"
            alt=""
            width={150}
            height={80}
            className=""
          />

          <a
            href="#features"
            className="text-sm text-gray-200 uppercase hover:text-softRed"
          >
            Features
          </a>
          <a
            href="#download"
            className="text-sm text-gray-200 uppercase hover:text-softRed"
          >
            Pricing
          </a>
          <a
            href="#faq"
            className="text-sm text-gray-200 uppercase hover:text-softRed"
          >
            Contact
          </a>
        </div>

        <div className="flex space-x-10">
          <a href="#">
            <Image
              src="/icon-facebook.svg"
              alt="Facebook"
              width={30}
              height={30}
              className="h-6 ficon"
            />
          </a>
          <a href="#">
            <Image
              src="/icon-twitter.svg"
              alt="Twitter"
              width={30}
              height={30}
              className="h-6 ficon"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

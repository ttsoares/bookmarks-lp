import Image from "next/image";

const Footer = () => {
  return (
    <footer className="py-5 bg-veryDarkBlue w-full">
      <div className="w-full flex flex-col items-center justify-between mx-auto space-y-16 px-6 md:flex-row md:space-y-0">
        <div className="flex flex-col items-center justify-between space-y-8 text-lg font-light md:flex-row md:space-y-0 md:space-x-14 text-grayishBlue">
          <Image
            src="/logo-bookmark-inv.svg"
            alt=""
            width={200}
            height={80}
            className="mb-1"
          />

          <a href="#features" className="uppercase hover:text-softRed">
            Features
          </a>
          <a href="#download" className="uppercase hover:text-softRed">
            Download
          </a>
          <a href="#faq" className="uppercase hover:text-softRed">
            FAQ
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

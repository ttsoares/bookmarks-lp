"use client";

import Image from "next/image";
import Link from "next/link";

import { MENU_LIST } from "./Header";

const Footer = () => {
  return (
    <footer className="w-full py-6 lg:px-8 bg-veryDarkBlue">
      <div className="flex flex-col items-center justify-between w-full mx-auto space-y-10 md:px-32 md:flex-row md:space-y-0">
        <div className="flex flex-col items-center justify-between text-lg font-light space-y-7 md:flex-row md:space-y-0 md:space-x-14 text-grayishBlue">
          <Link href="/">
            <Image
              src="/logo-bookmark-inv.svg"
              alt=""
              width={150}
              height={80}
              className=""
            />
          </Link>

          {MENU_LIST.map((item, ind) => (
            <Link
              key={ind}
              href={item.href}
              className="text-xs text-gray-500 hover:text-softRed "
            >
              {item.text}
            </Link>
          ))}
        </div>

        <div className="flex space-x-10">
          <Link href="https://www.facebook.com/frontendmentor">
            <Image
              src="/icon-facebook.svg"
              width={20}
              height={20}
              alt="Facebook"
              className="ficon"
            />
          </Link>
          <Link href="https://twitter.com/frontendmentor">
            <Image
              src="/icon-twitter.svg"
              width={20}
              height={20}
              alt="Twitter"
              className="ficon"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

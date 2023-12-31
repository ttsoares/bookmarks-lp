"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const MENU_LIST = [
  { text: "Features", href: "/#features" },
  { text: "Pricing", href: "/pricing" },
  { text: "Contact", href: "/contact" },
];

//--------------------
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <nav className="relative w-full lg:px-[175px] py-6 mx-auto">
      <div className="flex items-center justify-between w-full my-6 ">
        <div className="hidden w-[160px] md:block ">
          <Link href="/">
            <Image
              src="/logo-bookmark-reg.svg"
              width={200}
              height={80}
              alt="Logo"
            />
          </Link>
        </div>
        {/* Menu md/lg */}
        <div className="items-center hidden uppercase md:flex">
          {MENU_LIST.map((item, ind) => (
            <Link
              key={ind}
              href={item.href}
              className="px-6 text-xs text-gray-500 hover:text-softRed "
            >
              {item.text}
            </Link>
          ))}

          <div className="ml-5">
            <Link
              href="/login"
              className="px-8 py-2.5 text-xs text-white border-2 rounded-md shadow-md bg-softRed border-softRed hover:text-softRed hover:bg-white"
            >
              Login
            </Link>
          </div>
        </div>
        {/* Burger  */}
        <div className="flex justify-between w-full px-10 md:hidden">
          {!showMenu && (
            <div className="z-20 block md:hidden">
              <Image
                src="/logo-bookmark-reg.svg"
                width={130}
                height={60}
                alt="Logo"
              />
            </div>
          )}
          {showMenu ? (
            <div className="flex justify-between w-full">
              <div className="z-40">
                <Image
                  src="/logo-bookmark-inv.svg"
                  width={130}
                  height={60}
                  alt="Logo"
                />
              </div>
              <div onClick={toggleMenu} className="z-40 focus:outline-none">
                <Image
                  src="/icon-close.svg"
                  width={30}
                  height={30}
                  alt="menu"
                />
              </div>
            </div>
          ) : (
            <div
              onClick={toggleMenu}
              className="z-10 block md:hidden focus:outline-none"
            >
              <Image
                src="/icon-hamburger.svg"
                width={30}
                height={30}
                alt="menu"
              />
            </div>
          )}
        </div>
        {/* Mobile */}
        {showMenu && (
          <div className="fixed inset-0 z-30 flex-col items-center self-end w-full px-6 py-1 pt-24 pb-4 tracking-widest text-white uppercase h-fit m-h-screen opacity-90 bg-veryDarkBlue animate-fade-down animate-duration-700">
            {MENU_LIST.map((item, ind) => (
              <div
                key={ind}
                className="w-full py-3 text-center border-t-2 border-gray-700"
              >
                <Link href={item.href} className="block hover:text-softRed">
                  {item.text}
                </Link>
              </div>
            ))}
            <div className="w-full py-3 text-center border-2 border-white rounded-lg">
              <Link href="/login" className=" hover:text-softRed">
                Login
              </Link>
            </div>
            <div className="flex justify-center mt-32 space-x-6">
              <Link href="https://www.facebook.com/frontendmentor">
                <Image
                  src="/icon-facebook.svg"
                  width={30}
                  height={30}
                  alt="Facebook"
                  className="ficon"
                />
              </Link>
              <Link href="https://twitter.com/frontendmentor">
                <Image
                  src="/icon-twitter.svg"
                  width={30}
                  height={30}
                  alt="Twitter"
                  className="ficon"
                />
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;

"use client";
import Link from "next/link";
import { useContext } from "react";
import { FaUserCircle } from "react-icons/fa";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import ThemeContext from "../../context";

const Header = () => {
  const { darkTheme, setDarkTheme } = useContext(ThemeContext);
  return (
    <header className="py-10 px-4 container mx-auto text-xl flex flex-wrap md:flex-nowrap items-center justify-between">
      <div className="flex items-center w-full md:2/3">
        <Link href="/">
          <span className="font-bold text-blue-600">Flux</span>hotels
        </Link>
        <ul className="flex items-center ml-5">
          <li className="flex items-center cursor-pointer">
            <Link href="/auth">
              <FaUserCircle />
            </Link>
          </li>
          <li className="ml-5 cursor-pointer">
            {darkTheme ? (
              <MdDarkMode
                onClick={() => {
                  setDarkTheme(false),
                  localStorage.removeItem("hotel-theme");
                }}
              />
            ) : (
              <MdOutlineLightMode
                onClick={() => {
                  setDarkTheme(true),
                  localStorage.setItem("hotel-theme", "true");
                }}
              />
            )}
          </li>
        </ul>
      </div>

      <ul className="flex items-center justify-between w-full md:w-1/3 mt-4">
        <li className="hover:-translate-y-2 duration-500 transition-all cursor-pointer">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:-translate-y-2 duration-500 transition-all cursor-pointer">
          <Link href="/">Rooms</Link>
        </li>
        <li className="hover:-translate-y-2 duration-500 transition-all cursor-pointer">
          <Link href="/">Contact</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;

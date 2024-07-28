"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import Logo from "../public/assets/nlogo.png";
import { CiHeart } from "react-icons/ci";
import { SlBasket } from "react-icons/sl";
import MyCourseDropdownItem from "./Dropdowns/MyCourseDropDown";
import FavoritesDropdown from "./Dropdowns/FavoritesDropDown";
import Avatar from "../public/assets/avatar.png";
import BasketDropdown from "./Dropdowns/BasketDropdown";

const Nav = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(true);
  const [inputValue, setInputValue] = useState("");

  // * Dropdown States
  const [myCourseDropdown, setMyCourseDropdown] = useState(false);
  const [favoritesDropdown, setFavoritesDropdown] = useState(false);
  const [basketDropdown, setBasketDropdown] = useState(false);

  return (
    <nav className="flex justify-between w-full pt-3 items-center">
      <Link href="/" className="flex items-center ">
        {/* TODO: Check that logo again to add a new circle on to the background. */}
        <Image
          alt="logo"
          src={Logo}
          width={120}
          height={120}
          className="object-contain"
        />
        <p className="text-2xl font-bold lg:flex hidden">Learnify</p>
      </Link>

      <div className="md:flex md:flex-1 hidden mx-12 w-full">
        <form className="relative w-full">
          <input
            type="text"
            placeholder="Search for a course.."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            required
            className="search_input peer w-full"
          />
        </form>
      </div>
      <div className="flex relative">
        {isUserLoggedIn ? (
          <div className="flex items-center gap-5">
            <Link
              href="/my-course"
              className="font-semibold text-base cursor-pointer flex items-center gap-5"
              onMouseEnter={() => setMyCourseDropdown(!myCourseDropdown)}
              onMouseLeave={() => setMyCourseDropdown(!myCourseDropdown)}
            >
              My Courses
            </Link>
            <Link href="/favorites">
              <CiHeart
                onMouseEnter={() => setFavoritesDropdown(!favoritesDropdown)}
                onMouseLeave={() => setFavoritesDropdown(!favoritesDropdown)}
                size={"26px"}
              />
            </Link>
            {/* TODO: Add Dropdowns to those icons. */}
            <Link href="/basket">
              <SlBasket
                size={"22px"}
                onMouseEnter={() => setBasketDropdown(!basketDropdown)}
                onMouseLeave={() => setBasketDropdown(!basketDropdown)}
              />
            </Link>
            <Link href="/profile">
              <Image
                src={Avatar}
                width={35}
                height={35}
                className="rounded-full"
                alt="Profile Image"
              />
            </Link>
            {/* * My Course Dropdown */}
            {myCourseDropdown && (
              <div className="dropdown z-10">
                <MyCourseDropdownItem />
                <MyCourseDropdownItem />
                <MyCourseDropdownItem />
              </div>
            )}

            {/* * Favorites Dropdown */}
            {favoritesDropdown && (
              <div className="dropdown z-10">
                <FavoritesDropdown />
                <FavoritesDropdown />
                <FavoritesDropdown />
              </div>
            )}

            {/* * Basket Dropdown */}
            {basketDropdown && (
              <div className="dropdown z-10">
                <BasketDropdown />
              </div>
            )}
          </div>
        ) : (
          // TODO: Login and Register Buttons
          <div className="gap-3 flex">
            <Link href="/login">
              <button type="button" className="outline_btn">
                Log in
              </button>
            </Link>
            <Link href="/sign-in">
              <button type="button" className="black_btn">
                Sign in
              </button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;

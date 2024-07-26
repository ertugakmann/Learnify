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

const Nav = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(true);
  const [inputValue, setInputValue] = useState("");

  // * Dropdown States
  const [myCourseDropdown, setMyCourseDropdown] = useState(false);
  const [favoritesDropdown, setFavoritesDropdown] = useState(false);

  return (
    <nav className="flex justify-between w-full pt-3 items-center">
      <div>
        <Link href="/" className="flex items-center">
          {/* TODO: Check that logo again to add a new circle on to the background. */}
          <Image
            src={Logo}
            width={120}
            height={120}
            className="object-contain"
          />
          <p className="text-2xl font-bold">Learnify</p>
        </Link>
      </div>

      <div>
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
              href="/"
              className="font-semibold text-base cursor-pointer flex items-center gap-5"
              onMouseEnter={() => setMyCourseDropdown(!myCourseDropdown)}
              onMouseLeave={() => setMyCourseDropdown(!myCourseDropdown)}
            >
              My Courses{" "}
            </Link>
            <Link href="/">
              <CiHeart
                onMouseEnter={() => setFavoritesDropdown(!favoritesDropdown)}
                onMouseLeave={() => setFavoritesDropdown(!favoritesDropdown)}
                size={"26px"}
              />
            </Link>
            {/* TODO: Add Dropdowns to those icons. */}
            <Link href="/">
              <SlBasket size={"22px"} />
            </Link>
            <Link href="/">
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
              <div className="dropdown">
                <MyCourseDropdownItem />
                <MyCourseDropdownItem />
                <MyCourseDropdownItem />
              </div>
            )}

            {/* * Favorites Dropdown */}
            {favoritesDropdown && (
              <div className="dropdown">
                <FavoritesDropdown />
                <FavoritesDropdown />
                <FavoritesDropdown />
              </div>
            )}
          </div>
        ) : (
          // TODO: Login and Register Buttons
          <div>sdfsdasadf</div>
        )}
      </div>
    </nav>
  );
};

export default Nav;

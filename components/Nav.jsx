"use client";

import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import Logo from "../public/assets/nlogo.png";
import MyCourseDropdownItem from "./Dropdowns/MyCourseDropDown";
import FavoritesDropdown from "./Dropdowns/FavoritesDropDown";
import BasketDropdown from "./Dropdowns/BasketDropdown";
import ProfileDropdown from "@components/Dropdowns/ProfileDropdown";
import useUserStore from "@store/userStore";

// * Images and Icons
import { CiHeart } from "react-icons/ci";
import { SlBasket } from "react-icons/sl";
import Avatar from "../public/assets/avatar.png";
import { onAuthStateChanged, signOut } from "firebase/auth";

// * Firebase Auth

import { auth } from "@lib/firebase";

const Nav = () => {
    const [inputValue, setInputValue] = useState("");
    const { userSession, isLogged, logout } = useUserStore();

    // const [userSession, setUserSession] = useState(null);
    // const [isLogged, setIsLogged] = useState(false);

    // useEffect(() => {
    //   const fetchUserData = async () => {
    //     // * Get the current user with uid from authentification.
    //     const user = await getCurrentUser();

    //     if (user) {
    //       // * Fetch user data from the API with the user's uid.
    //       const response = await fetch(`/api/user/${user.uid}`);
    //       if (response.ok) {
    //         const userData = await response.json();
    //         setUserSession(userData);
    //         setIsLogged(true);
    //       } else {
    //         setIsLogged(false);
    //       }
    //     }
    //   };

    //   fetchUserData();
    // }, []);

    // * Log Out
    const logOut = async () => {
        signOut(auth);
        logout();
    };

    // * Dropdown States
    const [myCourseDropdown, setMyCourseDropdown] = useState(false);
    const [favoritesDropdown, setFavoritesDropdown] = useState(false);
    const [basketDropdown, setBasketDropdown] = useState(false);
    const [profileDropdown, setProfileDropdown] = useState(false);

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
                {isLogged ? (
                    <div className="flex items-center gap-5">
                        <button
                            type="button"
                            onClick={() => logOut()}
                            className="md:flex hidden rounded-full border border-black bg-transparent py-1.5 px-5 text-black transition-all hover:bg-black hover:text-white text-center text-sm font-inter flex items-center justify-center"
                        >
                            Sign out
                        </button>
                        <Link href="/favorites">
                            <CiHeart
                                onMouseEnter={() =>
                                    setFavoritesDropdown(!favoritesDropdown)
                                }
                                onMouseLeave={() =>
                                    setFavoritesDropdown(!favoritesDropdown)
                                }
                                size={"26px"}
                                className="md:flex hidden"
                            />
                        </Link>
                        {/* TODO: Add Dropdowns to those icons. */}
                        <Link href="/basket">
                            <SlBasket
                                size={"22px"}
                                onMouseEnter={() =>
                                    setBasketDropdown(!basketDropdown)
                                }
                                onMouseLeave={() =>
                                    setBasketDropdown(!basketDropdown)
                                }
                                className="md:flex hidden"
                            />
                        </Link>
                        {/* Desktop Navigation */}
                        <Link href="/profile">
                            <img
                                src={userSession?.photoURL || Avatar}
                                className="rounded-full md:flex hidden w-14 h-14"
                                alt="Profile Image"
                            />
                        </Link>

                        {/* Mobile Navigation */}

                        <img
                            src={userSession?.photoURL || Avatar}
                            className="rounded-full md:hidden flex w-14 h-14"
                            alt="Profile Image"
                            onClick={() => setProfileDropdown(!profileDropdown)}
                        />

                        {/* * My Course Dropdown */}

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

                        {/* * Profile Dropdown */}
                        {profileDropdown && (
                            <div className="dropdown z-10">
                                <ProfileDropdown />
                            </div>
                        )}
                    </div>
                ) : (
                    // TODO: Login and Register Buttons
                    <Link href="/login" className="gap-3 flex">
                        <button type="button" className="black_btn">
                            Sign in
                        </button>
                    </Link>
                )}
            </div>
        </nav>
    );
};

export default Nav;

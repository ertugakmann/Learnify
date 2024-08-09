import React from "react";
import Link from "next/link";
import { signOut } from "firebase/auth";
import { auth } from "@lib/firebase";

const ProfileDropdown = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="w-full flex items-center flex-col">
        <Link href={"/profile"}>
          <p className="text-sm font-semibold w-[175px] z-10 mt-3">Profile</p>
        </Link>
        <Link href={"/basket"}>
          <p className="text-sm font-semibold w-[175px] z-10 mt-2">Basket</p>
        </Link>
        <Link href={"/favorites"}>
          <p className="text-sm font-semibold w-[175px] z-10 mt-2">Favorites</p>
        </Link>
        <hr className="w-full bg-gray-400 mt-4" />

        <div className="w-full">
          <button
            type="button"
            onClick={() => signOut(auth)}
            className="rounded-full border w-full mt-5 border-black bg-transparent py-1.5 px-5 text-black transition-all hover:bg-black hover:text-white text-center text-sm font-inter flex items-center justify-center"
          >
            Sign out
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileDropdown;

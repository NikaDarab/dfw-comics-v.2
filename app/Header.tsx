"use client";

import Image from "next/image";
import SearchBar from "./SearchBar";
import { artists } from "./artists/page";
import Link from "next/link";
import { useAuthContext } from "../context/AuthContext";
import signOutFunc from "../firebase/auth/signOut";

const Header = () => {
  interface User {
    user: string;
  }
  const handleSearch = (query: string) =>
    artists.filter((artist) => artist.name.includes(query));
  const { user } = useAuthContext() as User;
  return (
    <section className="flex flex-row items-center justify-between h-[10vh] p-[1em] bg-green-800 w-full z-[999]">
      <div className="flex">
        <Link href="/">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/dfw-comics-v2.appspot.com/o/logo%2Fmic.png?alt=media&token=a649d0ee-6195-406b-924b-1b9ab6c5991a"
            alt="Logo"
            width={80}
            height={40}
          />
        </Link>
        <div className="flex items-center text-black">
          <SearchBar onSearch={handleSearch} />
        </div>
      </div>

      <input id="menu-toggle" type="checkbox" />
      <label className="menu-button-container" htmlFor="menu-toggle">
        <div className="menu-button" />
      </label>
      <ul className="menu">
        {user === null ? (
          <li>One</li>
        ) : (
          <li className="text-[1.2rem] font-medium">
            <button
              onClick={signOutFunc}
              className="text-gray-200  rounded-[8px] bg-transparent flex justify-center items-center py-[14px]"
            >
              Sign out
            </button>
          </li>
        )}
      </ul>
    </section>
  );
};

export default Header;

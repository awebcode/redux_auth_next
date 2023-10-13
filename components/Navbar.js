// components/Navbar.js

import React, { useEffect } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import ModeToggle from "./ThemeToggle";
import { setUserData } from "@/redux/actions/userAction";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const user = useSelector((s) => s.user);
  const dispatch = useDispatch();
  const logutHandler = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/auth/logout", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    localStorage.setItem("userData", {});

    dispatch(setUserData(null));
  };
  useEffect(() => {
    if (user === null) {
      router.push("/login");
    }
  }, [router, user]);
  return (
    <nav className={`bg-${theme === "dark" ? "gray-800" : "green-500"} p-4`}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-white font-bold text-xl mr-4">My App</div>
          <div className="block md:flex ">
            <Link href="/">
              <p className="text-white mr-4">Home</p>
            </Link>
            <Link href="/about">
              <p className="text-white mr-4">About</p>
            </Link>
            <Link href="/contact">
              <p className="text-white mr-4">Contact</p>
            </Link>
            {user ? (
              <a>{user?.email}</a>
            ) : (
              <Link href="/login">
                <p className="text-white mr-4">login</p>
              </Link>
            )}
            <h3 onClick={logutHandler}>
              <p className="text-white mr-4">Logout</p>
            </h3>
          </div>
        </div>
        <div className="flex items-center">
          <div className="mr-4">
            {/* <label htmlFor="themeToggle" className="flex items-center cursor-pointer">
              <span className="text-white mr-2">Dark Mode</span>
              <div className="relative">
                <input
                  type="checkbox"
                  id="themeToggle"
                  className="hidden"
                  onChange={toggleTheme}
                />
                <div
                  className={`toggle-bg w-10 h-5 rounded-full ${
                    theme === "dark" ? "bg-gray-500" : "bg-blue-500"
                  }`}
                ></div>
                <div
                  className={`toggle-switch absolute left-0 top-0 w-5 h-5 bg-white rounded-full ${
                    theme === "dark" ? "transform translate-x-full" : ""
                  }`}
                ></div>
              </div>
            </label> */}
            <ModeToggle />
          </div>
          {/* <button className="bg-white text-blue-500 px-4 py-2 rounded-full" on>Login</button> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import Image from "next/image";
import React from "react";
import Utils from "../utils";

const Header = () => {
  return (
    <header className="sticky top-0 z-50">
      <nav className="navbar text-cyan-700 font-semibold absolute right-0 left-0 z-10 transparent-nav transition-all">
        <div className="w-9/12 mx-auto py-5 flex justify-between items-center font-comf">
          <div className="flex align-center">
            <img
              alt="LAKS Stacker"
              src="/logo/ZyStacker.png"
              style={{ height: "40px" }}
            />
          </div>
          <div>
            <Utils.Button text="Add Listing" />
          </div>
          <div className="space-x-4">
            <Utils.Button text="Sign In" />
            <Utils.Button text="Sign Up" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

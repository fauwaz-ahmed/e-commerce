import Link from "next/link";
import React from "react";
import Menu from "./Menu";
import Image from "next/image";
import NavIcons from "./NavIcons";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      <div className="h-full flex items-center justify-between md:hidden ">
        {/* {MOBILE} */}
        <div>
          <Link href="/" className=" text-xl tracking-wide text-black">
            JahanMart
          </Link>
        </div>
        <Menu />
      </div>

      {/* {BIGGER SCREENS} */}
      <div className=" hidden md:flex items-center justify-between gap-8 h-full">
        {/* LEFT SECTION */}
        <div className="w-1/3 xl:w-1/2 flex item-center gap-12">

        <Link href="/" className="flex item-center gap-3">
          
        <Image src="/logo.png" alt="" width={24} height={24}/>
          <Link href="/" className=" text-2xl tracking-wide ">
            JahanMart
          </Link>
        </Link>
          <div className="hidden xl:flex items-center gap-4">
          <Link href="/">Homepage</Link>
          <Link href="/">Shop</Link>
          <Link href="/">Deals</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          </div>  



        </div>

        {/* RIGHT SECTION */}
        <div className="w-2/3  xl:w-1/2 flex items-center justify-between gap-8">
          <SearchBar/>
          <NavIcons/>
        
        </div>
      </div>
    </div>
  );
};

export default Navbar;

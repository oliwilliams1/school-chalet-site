import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@nextui-org/button";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/navbar";

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar 
      isBlurred={false}
      className={`mb-[-65px] transition-all duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-transparent"}`}
    >
      <NavbarBrand>
        <Image
          src="/favicon.ico"
          alt="logo"
          width={36}
          height={36}
          className="rounded-full"
        />
        <h2 className={`mt-1 ml-2 text-lg font-bold ${isScrolled ? `text-black` : `text-white`} transition-all duration-300`}>Maunga Ski Field</h2>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" className={`${isScrolled ? `text-black` : `text-white`} transition-all duration-300`} href=".">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" className={`${isScrolled ? `text-black` : `text-white`} transition-all duration-300`} href="/options">
            Our Chalets
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} className={`${isScrolled ? `bg-blue-300` : `bg-slate-600`} transition-all duration-300`} href="/register" variant="flat">
            <p className={`${isScrolled ? `text-black` : `text-white`} transition-all duration-300`}>Join The Club</p>
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@nextui-org/button";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/navbar";
import { Avatar, AvatarGroup, AvatarIcon } from "@nextui-org/avatar";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownSection, DropdownItem } from "@nextui-org/dropdown";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleMediaQueryChange = (event : any) => {
      setIsMobile(event.matches);
    };

    const mediaQuery = window.matchMedia("(max-width: 768px)");

    if (typeof window !== 'undefined') {
      setIsMobile(mediaQuery.matches);
      mediaQuery.addEventListener('change', handleMediaQueryChange);
    }

    return () => {
      if (typeof window !== 'undefined') {
        mediaQuery.removeEventListener('change', handleMediaQueryChange);
      }
    };
  }, []);

  return isMobile;
};

export const Header: React.FC = () => {
  const [user, setUser] = useState<string | null>(null);
  const [userName, setUserName] = useState('');
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(true);

  const isMobile = useIsMobile();

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "Our Chalets", path: "/options" },
    { label: "Register", path: "/register" },
  ];

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      const parsedData = JSON.parse(userData);
      setUser(parsedData);
      setUserName(`${parsedData.firstName} ${parsedData.lastName}`);
    }
  }, []);

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

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setUserName('');
    window.location.reload(); // Refresh the browser
  };

  return (
    <Navbar 
      onMenuOpenChange={setIsMenuOpen}
      isBlurred={false}
      className={`mb-[-65px] transition-all duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-transparent"}`}
    >
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className={`sm:hidden transition-all duration-300 ${isScrolled ? "text-black" : "text-white"}`}
      />
      <NavbarBrand>
        <Image
          src="/favicon.ico"
          alt="logo"
          width={36}
          height={36}
          className="rounded-full"
        />
        <h2 className={`mt-1 ml-2 text-lg font-bold montserrat ${isScrolled ? `text-black` : `text-white`} transition-all duration-300`}>Maunga Ski Field</h2>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        
        <NavbarItem>
          <Link color="foreground" className={`montserrat ${isScrolled ? `text-black` : `text-white`} transition-all duration-300`} href=".">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" className={`montserrat ${isScrolled ? `text-black` : `text-white`} transition-all duration-300`} href="/options">
            Our Chalets
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          {user ? (
            <div className="flex">
              <Dropdown placement="bottom-start">
                <DropdownTrigger>
                <Avatar as="button" showFallback className="w-8 h-8 my-auto transition-transform" />
                </DropdownTrigger>
                <DropdownMenu aria-label="Profile Actions" variant="flat">
                  <DropdownItem key="logout" color="danger" onClick={handleLogout}>
                    Log Out
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
              <p className={`montserrat ${isScrolled ? `text-black` : `text-white`} my-auto m-2`}>{!isMobile && (userName)}</p>
            </div>
          ) : (
            <Button
              as={Link}
              className={`montserrat ${isScrolled ? `bg-blue-300` : `bg-slate-600`} transition-all duration-300`}
              href="/register"
              variant="flat"
            >
              <p className={`montserrat ${isScrolled ? `text-black` : `text-white`} transition-all duration-300`}>
                Join The Club
              </p>
            </Button>
          )}
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href={item.path}
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};
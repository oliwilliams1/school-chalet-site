import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@nextui-org/button";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem} from "@nextui-org/navbar";

export const Header = () => {
  return (
    <Navbar isBordered className="mb-[-65px]">
        <NavbarBrand>
          <Image
            src="/favicon.ico"
            alt="logo"
            width={36}
            height={36}
            className="rounded-full"
          />
          <h2 className="mt-1 ml-2 text-lg font-bold">Maunga Ski Field</h2>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href=".">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/options">
            Our Chalets
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="primary" href="/register" variant="flat">
            Join The Club
          </Button>
        </NavbarItem>
      </NavbarContent>
      </Navbar>
  );
};

import Head from "next/head";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@nextui-org/button";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem} from "@nextui-org/navbar";

export default function Index() {
  return (
    <div>
      <Navbar shouldHideOnScroll isBordered>
        <NavbarBrand>
          <Image
            src="/favicon.ico"
            alt="logo"
            width={36}
            height={36}
            className="rounded-full"
          />
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Other page 1
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Other page 2
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign up
          </Button>
        </NavbarItem>
      </NavbarContent>
      </Navbar>
    </div>
  )
}
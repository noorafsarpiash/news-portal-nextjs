"use client";

import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";

import { Switch } from "../ui/switch";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const pathName = usePathname();

  return (
    <header className="py-4 shadow-md">
      <nav className="max-w-7xl mx-auto px-4 flex justify-between items-center sm:px-6 lg:px-8">
        <div className="text-xl font-bold">
          <Link href="/">Daily News</Link>
        </div>
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem className="flex items-center space-x-8">
              <NavigationMenuLink
                href="/news"
                className={`${
                  pathName === "/news" ? "text-red-500 font-semibold" : ""
                }
                hover:text-red-500`}
              >
                News
              </NavigationMenuLink>
              <NavigationMenuLink
                href="/services"
                className="hover:text-red-500 text-base"
              >
                <NavigationMenuTrigger className="text-gray-700">
                  Service
                </NavigationMenuTrigger>
                <NavigationMenuContent className="text-gray-600 shadow-md rounded-md px-5 py-4 space-y-2">
                  <ul>
                    <li>
                      <NavigationMenuLink href="/services/web">
                        Web Development
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink href="/services/app">
                        Mobile Apps
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink href="/services/seo">
                        SEO
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuLink>

              <NavigationMenuLink
                href="/about"
                className={`${
                  pathName === "/about" ? "text-red-500 font-semibold" : ""
                }
                hover:text-red-500`}
              >
                About
              </NavigationMenuLink>
              <NavigationMenuLink
                href="/contact"
                className={`${
                  pathName === "/contact" ? "text-red-500 font-semibold" : ""
                }
                hover:text-red-500`}
              >
                Contact
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="hidden lg:flex items-center space-x-4">
          <div className="flex items-center">
            <span className="mr-2">Dark Mode</span>
            <Switch />
          </div>
          <Button variant="default">Login</Button>
        </div>

        <MobileMenu></MobileMenu>
      </nav>
    </header>
  );
};

export default Navbar;

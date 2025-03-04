"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Flame, Menu, Search, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const categories = [
  { title: "Short Read", href: "/category/short-read" },
  { title: "Long Read", href: "/category/long-read" },
  { title: "News of the Month", href: "/category/news" },
  { title: "Film and Book Reviews", href: "/category/reviews" },
  { title: "Interviews", href: "/category/interviews" },
];

export function Header() {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isTop, setIsTop] = useState(true);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      setIsTop(currentScrollY === 0);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: visible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`fixed top-0 z-50 w-full transition-all ${
        isTop ? "bg-transparent" : "bg-white shadow-md"
      }`}
    >
      <div className="container mx-auto flex h-[60px] items-center justify-between px-4">
        {/* Left section with logo */}
        <div className="flex items-center gap-6">
          <Link href="/" className="items-center space-x-2">
            <span className="text-xl font-bold text-primary">
              The Green Cloister
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={`${
                    isTop
                      ? "text-white hover:bg-white/10 bg-transparent"
                      : "text-black "
                  } `}
                >
                  By Category
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-1 bg-[#0D1222] p-4">
                    {categories.map((category) => (
                      <li key={category.href}>
                        <Link
                          href={category.href}
                          className="block select-none rounded-md p-3 text-sm text-white no-underline outline-none transition-colors hover:bg-white/10"
                        >
                          {category.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <Button
            variant="ghost"
            className={`${
              isTop ? "text-white hover:bg-white/10" : "text-black "
            }`}
            asChild
          >
            <Link href="/about">About Us</Link>
          </Button>
          <Button
            variant="ghost"
            className={`${
              isTop ? "text-white hover:bg-white/10" : "text-black "
            }`}
            asChild
          >
            <Link href="/contact">Contact Us</Link>
          </Button>
        </nav>

        {/* Right section with search and trending */}
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-gray-100"
          >
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-black hover:bg-gray-100 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="top"
              className="h-screen w-full border-none bg-[#0D1222]"
            >
              <SheetHeader>
                <div className="flex justify-end">
                  <SheetTrigger asChild>
                    <Button
                      size="icon"
                      className="bg-[#9ECEC5] hover:bg-[#8BBDB4]"
                    >
                      <X className="h-5 w-5" />
                    </Button>
                  </SheetTrigger>
                </div>
              </SheetHeader>
              <nav className="mt-8 flex flex-col space-y-4 px-4">
                {/* Mobile Category Dropdown */}
                <button
                  className="flex items-center justify-between w-full text-lg text-white"
                  onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                >
                  <span>By Category</span>
                  <ChevronDown
                    className={`h-5 w-5 text-white transition-transform ${
                      isCategoryOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isCategoryOpen && (
                  <div className="space-y-3 pl-4">
                    {categories.map((category) => (
                      <Link
                        key={category.href}
                        href={category.href}
                        className="block text-sm text-white/90 hover:text-white"
                      >
                        {category.title}
                      </Link>
                    ))}
                  </div>
                )}

                <Link
                  href="/about"
                  className="text-lg text-white hover:text-white/90"
                >
                  About Us
                </Link>
                <Link
                  href="/contact"
                  className="text-lg text-white hover:text-white/90"
                >
                  Contact Us
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}

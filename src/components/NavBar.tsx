"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import HamburgerMenu from "./HamburgerMenu";

export const navLinks = [
  { title: "خانه", href: "/" },
  { title: "بلاگ‌ها", href: "/blogs" },
  { title: "نوشتن بلاگ", href: "/create-blog" },
];

const NavBar = () => {
  const pathName = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => setIsOpen((prev) => !prev);

  return (
    <nav className="flex justify-between items-center bg-slate-300 px-4 py-3 h-[70px] w-full shadow-md">
      {/* Logo */}
      <Link href="/">
        <Image
          className="cursor-pointer"
          src="/next.svg"
          alt="Logo"
          width={78}
          height={78}
        />
      </Link>

      {/* Desktop Navigation */}
      <ul className="hidden sm:flex flex-row-reverse gap-x-4">
        {navLinks.map(({ title, href }) => (
          <li key={title}>
            <Link
              href={href}
              className={`p-2 rounded-xl transition duration-300 ${
                pathName === href
                  ? "text-red-600 font-semibold"
                  : "hover:bg-gray-300"
              }`}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <div className="sm:hidden">
        {isOpen ? (
          <X
            onClick={handleMenu}
            className="cursor-pointer size-7 text-gray-700"
          />
        ) : (
          <Menu
            onClick={handleMenu}
            className="cursor-pointer size-7 text-gray-700"
          />
        )}
      </div>

      {/* Mobile Navigation */}
      {isOpen && <HamburgerMenu closeMenu={handleMenu} />}
    </nav>
  );
};

export default NavBar;

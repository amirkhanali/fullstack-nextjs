import Link from "next/link";
import { navLinks } from "./NavBar";
import { usePathname } from "next/navigation";

type HamburgerMenuPropType = {
  closeMenu: () => void;
};

const HamburgerMenu = ({ closeMenu }: HamburgerMenuPropType) => {
  const pathName = usePathname();

  return (
    <div className="fixed inset-0 bg-black/50 z-50" onClick={closeMenu}>
      <ul className="absolute right-0 top-0 w-2/3 max-w-[300px] min-h-screen bg-white shadow-lg flex flex-col p-5 gap-4 text-right z-50 ">
        {navLinks.map(({ title, href }) => (
          <li key={title}>
            <Link
              className={`block w-full p-3 rounded-lg text-lg font-medium transition duration-300 ${
                pathName === href
                  ? "text-red-600 font-bold"
                  : "hover:bg-gray-200"
              }`}
              href={href}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HamburgerMenu;

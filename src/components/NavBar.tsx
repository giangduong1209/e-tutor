import { MdComputer, MdMenu } from "react-icons/md";
import { menuData } from "../mock/data.tsx";
import Button from "./ui/Button";
import { useState } from "react";
import ResponsiveMenu from "./ResponsiveMenu";
import { motion } from "framer-motion";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div className="container flex justify-between items-center py-6">
          {/* Logo section */}
          <div className="flex items-center gap-2 font-bold text-2xl">
            <MdComputer className="text-3xl text-secondary" />
            <p>E-Tutor</p>
          </div>
          {/* Menu section */}
          <div className="hidden lg:block">
            <ul className="flex items-center gap-6">
              {menuData.map((menu) => (
                <li className="" key={menu.id}>
                  <a
                    href={menu.link}
                    className="inline-block text-gray-600 text-sm xl:text-base py-1 xl:px-3 hover:text-secondary transition-all duration-300 font-semibold"
                  >
                    {menu.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* CTA Button section */}
          <div className="hidden lg:block space-x-6">
            <Button className="text-black bg-transparent">Sign in</Button>
            <Button className="bg-secondary text-white hover:bg-secondary/80 transition-all duration-300">
              Register
            </Button>
          </div>
          {/* Mobile hamburger menu */}

          <div
            className="lg:hidden"
            onClick={() => setIsOpen((prevOpen) => !prevOpen)}
          >
            <MdMenu className="text-4xl cursor-pointer" />
          </div>
        </div>
      </motion.div>
      <ResponsiveMenu isOpen={isOpen} />
    </>
  );
};

export default NavBar;

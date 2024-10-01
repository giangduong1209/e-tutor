import { motion } from "framer-motion";
import { useState } from "react";

const NavBarBanner = ({ open }: { open: boolean }) => {
  const [isOpen, setIsOpen] = useState<boolean>(open);
  return (
    isOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="bg-primary text-sm font-semibold p-1 hidden lg:block relative text-center"
      >
        Are you university or scholl student for an online tutoring partnership?
        <a href="" className="text-secondary ml-2">
          Talk to us
        </a>
        <div
          className="absolute top-1/2 right-10 cursor-pointer -translate-y-1/2"
          onClick={() => setIsOpen((prevOpen) => !prevOpen)}
        >
          X
        </div>
      </motion.div>
    )
  );
};

export default NavBarBanner;

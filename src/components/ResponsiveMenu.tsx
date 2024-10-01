import { motion, AnimatePresence } from "framer-motion";

interface IResponsiveMenu {
  isOpen: boolean;
}
const ResponsiveMenu = ({ isOpen }: IResponsiveMenu) => {
  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          className="absolute top-20 left-0 w-full h-screen z-20 lg:hidden"
        >
          <div className="text-xl font-semibold uppercase bg-primary text-white py-10 m-6 rounded-xl">
            <ul className="flex items-center justify-center flex-col gap-10">
              <li>Home</li>
              <li>For Students</li>
              <li>About Us</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;

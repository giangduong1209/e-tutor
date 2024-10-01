import { motion } from "framer-motion";
import Button from "./ui/Button";
import { SlideUp } from "./utils/animation";

interface IBanner {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  tag: string;
  link: string;
  reverse?: boolean;
}
const Banner = ({ id, image, title, subtitle, tag, reverse }: IBanner) => {
  return (
    <div className="bg-[#f9f9f9] pb-14" key={id}>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0">
          <div
            className={`flex justify-start items-center ${
              reverse && "md:order-last"
            }`}
          >
            <motion.img
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
              src={image}
              alt={title}
              className="w-[400px] h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center text-center md:text-left space-y-4 lg:max-w-[500px]">
            <motion.p
              variants={SlideUp(0.5)}
              initial="hidden"
              whileInView="visible"
              className="text-sm text-orange-600 font-semibold capitalize"
            >
              {tag}
            </motion.p>
            <motion.p
              variants={SlideUp(0.6)}
              initial="hidden"
              whileInView="visible"
              className="text-xl lg:text-2xl font-semibold capitalize"
            >
              {title}
            </motion.p>
            <motion.p
              variants={SlideUp(0.8)}
              initial="hidden"
              whileInView="visible"
              className="text-sm text-slate-500"
            >
              {subtitle}
            </motion.p>
            <motion.div
              variants={SlideUp(1.1)}
              initial="hidden"
              whileInView="visible"
              className="flex justify-center md:justify-start"
            >
              <Button className="hover:bg-primary/80">Get Started</Button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

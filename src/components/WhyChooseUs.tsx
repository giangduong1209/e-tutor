import { motion } from "framer-motion";
import { whyChooseUsData } from "../mock/data";
import { SlideLeft } from "./utils/animation";

const WhyChooseUs = () => {
  return (
    <div className="bg-[#f9fafc]">
      <div className="container py-24">
        <div className="space-y-4 p-6 text-center max-w-[500px] mx-auto mb-5">
          <h1 className="uppercase font-semibold text-orange-600">
            Why choose us
          </h1>
          <p className="font-semibold text-3xl">
            Benefits of online tutoring services with us
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {whyChooseUsData.map((item) => (
            <motion.div
              variants={SlideLeft(item.delay)}
              initial="hidden"
              animate="visible"
              className="space-y-4 p-6 rounded-xl shadow-[0_0_22px_rgba(0,0,0,0.15)]"
            >
              <div
                style={{ backgroundColor: item.bgColor }}
                className="size-10 rounded-lg flex justify-center items-center text-white"
              >
                <div className="text-2xl">{item.icon}</div>
              </div>
              <p className="font-semibold">{item.title}</p>
              <p className="text-sm text-gray-500">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;

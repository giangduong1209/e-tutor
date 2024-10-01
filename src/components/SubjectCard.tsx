import { motion } from "framer-motion";
import { subjectCardData } from "../mock/data";

const SubjectCard = () => {
  return (
    <>
      <div className="container py-14 md:py-24">
        {/* Header section */}
        <div className="space-y-4  p-6 text-center max-w-[600px] mx-auto mb-5">
          <h1 className="uppercase font-semibold text-orange-500">
            Our tutor subjects
          </h1>
          <p className="font-semibold text-3xl">
            Find Online Tutor in Any Subject
          </p>
        </div>
        {/* Card section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {subjectCardData.map((sub) => (
            <motion.div
              key={sub.id}
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                delay: sub.delay,
              }}
              className="border rounded-lg border-secondary/20 p-4 flex justify-start items-center gap-4 hover:!scale-105 hover:!shadow-xl duration-200 cursor-pointer"
            >
              <div
                style={{ backgroundColor: sub.color + "20", color: sub.color }}
                className="size-10 rounded-md flex justify-center items-center"
              >
                {sub.icon}
              </div>
              <p>{sub.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SubjectCard;

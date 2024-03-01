import cloud from "../assets/google-cloud.png";
import typeScript from "../assets/typescript.png";
import { motion } from "framer-motion";
const Courses = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0 },
      }}
      className="border-2 border-red px-12 pb-12"
    >
      <h3 className="font-semibold text-2xl mt-10 mb-5">
        Courses & Certifications
      </h3>
      <ul className="flex flex-col gap-2">
        <li className="flex flex-row items-center">
          <img src={cloud} alt="Google Cloud" />
          Google Cloud - Generative AI Fundamentals
        </li>
        <li className="flex flex-row items-center">
          <img src={cloud} alt="Google Cloud" />
          Google Cloud - Begin with Workspace Essentials
        </li>
        <li className="flex flex-row items-center">
          {" "}
          <img src={typeScript} alt="TypeScript" />
          FEB 2024 - TypeScript course ITVDN
        </li>
        <li>JAN 2024 - IT English - English Dom </li>
      </ul>
    </motion.div>
  );
};
export default Courses;

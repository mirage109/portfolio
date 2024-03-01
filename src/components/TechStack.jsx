import javaScript from "../assets/javascript.png";
import typeScript from "../assets/typescript.png";
import react from "../assets/react.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import tailwind from "../assets/tailwind.png";
import redux from "../assets/redux.png";
import mobx from "../assets/mobx.png";
import { motion } from "framer-motion";
const TechStack = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{delay: 0.2, duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
      }}
      className="border-2 border-blue px-12"
    >
      <h3 className="font-semibold text-2xl mt-10 mb-16">Tech Stack</h3>
      <ul className="mb-5 grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-8 gap-12 font-semibold">
        <li className="flex flex-col items-center justify-center">
          <img src={javaScript} alt="JavaScript" />
          JavaScript
        </li>
        <li className="flex flex-col items-center justify-center">
          <img src={typeScript} alt="TypeScript" />
          TypeScript
        </li>
        <li className="flex flex-col items-center justify-center">
          <img src={react} alt="React" />
          React
        </li>
        <li className="flex flex-col items-center justify-center">
          <img src={html} alt="HTML" />
          HTML
        </li>
        <li className="flex flex-col items-center justify-center">
          <img src={css} alt="CSS" />
          CSS
        </li>
        <li className="flex flex-col items-center justify-center">
          <img src={tailwind} alt="Tailwind CSS" />
          Tailwind
        </li>
        <li className="flex flex-col items-center justify-center">
          <img src={redux} alt="Redux" />
          Redux
        </li>
        <li className="flex flex-col items-center justify-center">
          <img className="w-[48px]" src={mobx} alt="MobX" />
          MobX
        </li>
        
      </ul>
    </motion.div>
  );
};
export default TechStack;

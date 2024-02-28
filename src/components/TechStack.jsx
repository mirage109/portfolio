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
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
      }}
      className="border-2 border-blue px-12"
    >
      <h3 className="font-semibold text-2xl mt-10 mb-16">Tech Stack</h3>
      <ul className="mb-5 flex flex-wrap justify-around gap-12 font-semibol">
        <li>
          <img src={javaScript} alt="JavaScript" />
          JavaScript
        </li>
        <li>
          <img src={typeScript} alt="TypeScript" />
          TypeScript
        </li>
        <li>
          <img src={react} alt="React" />
          React
        </li>
        <li>
          <img src={html} alt="HTML" />
          HTML
        </li>
        <li>
          <img src={css} alt="CSS" />
          CSS
        </li>
        <li>
          <img src={tailwind} alt="Tailwind CSS" />
          Tailwind CSS
        </li>
        <li>
          <img src={redux} alt="Redux" />
          Redux
        </li>
        <li>
          <img className="w-[48px]" src={mobx} alt="MobX" />
          MobX
        </li>
        
      </ul>
    </motion.div>
  );
};
export default TechStack;

import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <section id="skills" className="pt-10 pb-24">
      <div className="md:flex flex-col justify-center md:gap-16 mt-32">
        <motion.div
          className="md:w-3/4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-5xl mb-5">
            My <span className="text-red">skills</span>
          </p>
          <LineGradient width="w-2/5" />
        </motion.div>
        <div className="flex flex-wrap justify-between gap-16">
          <div className="border-2 border-blue px-8 w-[45%]">
            <h3 className="font-semibold text-2xl mt-10 mb-5">Frontend</h3>
            <ul className="mb-5 justify-center gap-12 font-semibol">
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>React</li>
              <li>HTML</li>
              <li>CSS/SASS</li>
              <li>Tailwind CSS</li>
              <li>Redux</li>
              <li>MobX</li>
              <li>GitHub</li>
            </ul>
          </div>
          <div className="border-2 border-red px-8 w-[45%]">
            <h3 className="font-semibold text-2xl mt-10 mb-5">Education</h3>
            <div>
              Aug 2022 - Sep 2023 Frontend Web Developer Tel-Ran International
              Technological School, Berlin{" "}
            </div>
            <div>
              2008 - 2009 Masters's degree in International Economic Kyiv
              National Economic University
            </div>
            <div>
              2004 - 2008 Bachelor's degree in International Economic Kyiv
              National Economic University
            </div>
          </div>
          <div className="border-2 border-yellow px-8 w-[45%]">
            <h3 className="font-semibold text-2xl mt-10 mb-5">Languages</h3>
            <ul>
              <li>Ukranian - Native</li>
              <li>English - Advanced</li>
              <li>Italian - Advanced</li>
              <li>Russian - Advanced</li>
              <li>French - Intermediate</li>
              <li>German - Elementary</li>
            </ul>
          </div>
          <div className="border-2 border-blue px-8 w-[45%]">
            <h3 className="font-semibold text-2xl mt-10 mb-5">
              Courses and Certifications
            </h3>
            <ul>
              <li>Google Cloud  - Generative AI Fundamentals</li>
              <li>ITVDN - TypeScript course - Feb 2024</li>
              <li>Google Cloud - Begin with Workspace Essentials</li>
              <li>English Dom - IT English </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Skills;

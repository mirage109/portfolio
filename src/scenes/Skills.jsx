import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import TechStack from "../components/TechStack";
import Education from "../components/Education";
import Languages from "../components/Languages";
import Courses from "../components/Courses";
import useMediaQuery from "../hooks/useMediaQuery";

const Skills = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="skills" className="pt-5 pb-24">
      <div className="md:flex flex-col justify-center md:gap-16 mt-32 ">
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
        {isAboveMediumScreens ? (
          <div className="flex flex-col gap-16">
            <div className="flex flex-row gap-12 justify-between">
              <TechStack />
              <Courses />
            </div>
            <div className="flex justify-between gap-12 flex-row">
              <Languages />
              <Education />
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-12 mt-8">
            <TechStack />
            <Courses />
            <Education />
            <Languages />
          </div>
        )}
      </div>
    </section>
  );
};
export default Skills;

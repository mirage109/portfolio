import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
const About = () => {

  return (
    <section id="about" className="pt-10 pb-24 ">
      <div className="md:flex justify-center md:gap-16 mt-32">
        <motion.div
          className="md:w-2/3"
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
            About <span className="text-red">Me</span>
          </p>
          <LineGradient width="w-1/3" />
        </motion.div>
      </div>
      <div className="md:flex justify-center md:gap-16">
        
        <motion.div
          className="md:w-2/3 text-xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="mt-10 mb-7"> Hey there! I'm Anastasiia Zibla.</p>
          <p className="my-4">
            In 2022, I made the move to Germany. It was there that I decided to
            pivot my career and delve into the realm of IT, specifically honing
            my skills in frontend development.
          </p>
          <p className="my-4">
            {" "}
            After diving deep into the world of digital marketing, I figured it
            was time to spice things up a bit in my career. So, armed with a
            wealth of knowledge in digital marketing and shiny new frontend
            development skills, I'm ready to make waves in crafting awesome web
            applications.
          </p>
          <p className="my-4">
            My experience in data analysis and strategy optimization from my
            digital marketing days will not only help me create sleek user
            interfaces but also ensure they're truly effective. Beyond work, I'm
            fascinated by artificial intelligence and cloud technologies. Oh,
            and I'm a sucker for tabletop games and a mean player on the beach
            volleyball court.
          </p>
          <p className="my-4">
            I'm fluent in Ukrainian, English, and Italian. In short, if
            you're on the lookout for a dynamic and creative developer with a
            unique background, well, here I am – ready to take on the challenge
            and pour all my energy into your project!
          </p>
        </motion.div>
      </div>
    </section>
  );
};
export default About;

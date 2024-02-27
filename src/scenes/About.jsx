import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import {motion} from "framer-motion";
const About = () => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section id="about" className="pt-10 pb-24">
        <div className="md:flex md:justify-between md:gap-16 mt-32">
        
        </div>
      <p>
        Hey there! I'm Anastasiia Zibla. In 2022, I made the move to Germany. It
        was there that I decided to pivot my career and delve into the realm of
        IT, specifically honing my skills in frontend development.
      </p>
      <p>
        {" "}
        After diving deep into the world of digital marketing, I figured it was
        time to spice things up a bit in my career. So, armed with a wealth of
        knowledge in digital marketing and shiny new frontend development
        skills, I'm ready to make waves in crafting awesome web applications.
      </p>
      <p>
        My experience in data analysis and strategy optimization from my digital
        marketing days will not only help me create sleek user interfaces but
        also ensure they're truly effective. Beyond work, I'm fascinated by
        artificial intelligence and cloud technologies. Oh, and I'm a sucker for
        tabletop games and a mean player on the beach volleyball court.
      </p>
      <p>
        Plus, I'm fluent in Ukrainian, English, and Italian. In short, if you're
        on the lookout for a dynamic and creative developer with a unique
        background, well, here I am – ready to take on the challenge and pour
        all my energy into your project!
      </p>
    </section>
  );
};
export default About;

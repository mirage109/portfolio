import useMediaQuery from "../hooks/useMediaQuery";
const Skills = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return <section id="skills" className="pt-10 pb-24"></section>;
};
export default Skills;

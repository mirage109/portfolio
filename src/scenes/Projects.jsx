import LineGradient from "../components/LineGradient";
import ProjectItem from "../components/ProjectItem";
import projectData from "../data/projectData";
const Projects = () => {
  return (
    <section id="projects" className="pt-5 pb-28">
      <div className="md:w-3/4 mt-20">
        <p className="font-playfair font-semibold text-5xl mb-5">
          My <span className="text-red">projects</span>
        </p>
        <LineGradient width="w-2/5 " />
      </div>
      {projectData.map((project, index) => (
        <ProjectItem key={index} index={index} {...project} />
      ))}
    </section>
  );
};
export default Projects;

import LineGradient from "../components/LineGradient";
import ProjectItem from "../components/ProjectItem";
const Projects = () => {
  return (
    <section id="projects" className="pt-5 pb-28 md:w-3/4">
      <div className="md:w-3/4 mt-20">
        <p className="font-playfair font-semibold text-5xl mb-5">
          My <span className="text-red">projects</span>
        </p>
        <LineGradient width="w-2/5 " />
      </div>
      <ProjectItem
        title="Garden Online Shop"
        stack="JavaScript, React, Redux Toolkit, CSS"
        description="The project is written in JavaScript and React, using Redux Toolkit and other third-party NPM packages. It includes a product filtering system that recalculates costs based on the removal/addition of products, as well as integration with the backend and other APIs."
        img="https://i.ibb.co/0XWkYtN/zibla.png"
        link="https://zibla.netlify.app/"
        codeLink="https://github.com/mirage109/Project_gargen"
      />
    </section>
  );
};
export default Projects;

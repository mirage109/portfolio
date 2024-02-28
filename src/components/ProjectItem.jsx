const ProjectItem = ({ title, stack, description, img, link, codeLink }) => {
  return (
    <div className="flex flex-col md:flex-row gap-8 mt-16">
      <div className="md:w-1/2">
        <img src={img} alt={title} />
      </div>
      <div className="md:w-1/2">
        <h3 className="font-semibold text-4xl mb-5">{title}</h3>
        <p className="text-xl mb-5">
          <span className="font-semibold">Stack:</span> {stack}
        </p>
        <p className="text-sm mb-5">{description}</p>

        <div className="flex flex-row">
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="text-m bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold
            hover:bg-blue hoover:text-white transition duration-500 w-[50%] text-center"
          >
            View Live
          </a>
          <a
            href={codeLink}
            target="_blank"
            rel="noreferrer"
            className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5 w-[50%]"
          >
            <div className="bg-deep-blue  hover:text-red transition duration-500 w-full h-full flex items-center justify-center px-10 font-playfair"> View Code </div>
           
          </a>
        </div>
      </div>
    </div>
  );
};
export default ProjectItem;

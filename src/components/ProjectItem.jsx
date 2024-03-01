import { motion } from "framer-motion";
const ProjectItem = ({
  title,
  stack,
  description,
  img,
  link,
  codeLink,
  index,
}) => {
  const borderColorClass =
    index % 2 === 0 ? "before:border-blue" : "before:border-red";
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
      }}
      className="flex flex-col md:flex-row gap-8 mt-20 mb-24"
    >
      <div
        className={`md:w-1/2 relative z-0 ml-10 before:absolute before:-top-10 before:-left-10 before:w-full before:h-full before:border-2 before:z-[-1] ${borderColorClass}`}
      >
        <img src={img} alt={title} />
      </div>
      <div className="md:w-1/2 flex flex-col justify-between">
        <h3 className="font-semibold text-4xl mb-5">{title}</h3>
        <p className="text-xl mb-5">
          <span className="font-semibold">Stack:</span> {stack}
        </p>
        <p className="text-m mb-5">{description}</p>

        <div className="flex flex-row">
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="text-m bg-blue text-deep-blue rounded-sm py-3 px-7 font-semibold  hover:bg-red hover:text-white transition duration-500 w-[50%] text-center"
          >
            View Live
          </a>
          <a
            href={codeLink}
            target="_blank"
            rel="noreferrer"
            className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5 w-[50%]"
          >
            <div className="bg-deep-blue  hover:text-red transition duration-500 w-full h-full flex items-center justify-center px-10 font-playfair">
              {" "}
              View Code{" "}
            </div>
          </a>
        </div>
      </div>
    </motion.div>
  );
};
export default ProjectItem;

import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/anastasia-zibla"
        target="_blank"
        rel="noreferrer"
      >
        <img src={linkedin} alt="linkedin" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://github.com/mirage109"
        target="_blank"
        rel="noreferrer"
      >
        <img className="w-[30px] "src={github} alt=""/>
      </a>
    </div>
  );
};
export default SocialMediaIcons;

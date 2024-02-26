import linkedin from "../assets/linkedin.png";
const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/anastasia-zibla-20b7b421/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={linkedin} alt="linkedin" />
      </a>
    </div>
  );
};
export default SocialMediaIcons;

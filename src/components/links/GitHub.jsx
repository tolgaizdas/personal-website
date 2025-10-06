import { FaGithub } from "react-icons/fa";
import CustomLink from "./CustomLink";

const GitHub = ({ githubUrl }) => {
  return (
    <CustomLink IconComponent={FaGithub} href={githubUrl} label="GitHub" />
  );
};

export default GitHub;

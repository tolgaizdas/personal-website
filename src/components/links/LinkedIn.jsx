import { FaLinkedin } from "react-icons/fa";
import CustomLink from "./CustomLink";

const LinkedIn = ({ linkedinUrl }) => {
  return (
    <CustomLink
      IconComponent={FaLinkedin}
      href={linkedinUrl}
      label="LinkedIn"
    />
  );
};

export default LinkedIn;

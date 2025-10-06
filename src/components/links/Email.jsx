import { FaEnvelope } from "react-icons/fa";
import CustomLink from "./CustomLink";

const Email = ({ email }) => {
  return (
    <CustomLink
      IconComponent={FaEnvelope}
      href={`mailto:${email}`}
      label="Email"
    />
  );
};

export default Email;

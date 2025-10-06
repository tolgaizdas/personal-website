import { FaGoogleScholar } from "react-icons/fa6";
import CustomLink from "./CustomLink";

const Scholar = ({ scholarUrl }) => {
  return (
    <CustomLink
      IconComponent={FaGoogleScholar}
      href={scholarUrl}
      label="Scholar"
    />
  );
};

export default Scholar;

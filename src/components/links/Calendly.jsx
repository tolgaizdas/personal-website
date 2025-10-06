import { IoMdCalendar } from "react-icons/io";
import CustomLink from "./CustomLink";

const Calendly = ({ calendlyUrl }) => {
  return (
    <CustomLink
      IconComponent={IoMdCalendar}
      href={calendlyUrl}
      label="Calendly"
    />
  );
};

export default Calendly;

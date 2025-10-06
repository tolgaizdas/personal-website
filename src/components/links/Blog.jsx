import { FaBlog } from "react-icons/fa";
import CustomLink from "./CustomLink";

const Blog = ({ blogUrl }) => {
  return <CustomLink IconComponent={FaBlog} href={blogUrl} label="My Blog" />;
};

export default Blog;

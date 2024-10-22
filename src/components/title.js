// components/Title.js
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Font Awesome icons

const Title = ({ name, location, email, githubUrl, linkedinUrl }) => {
  return (
    <div className="text-center mb-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
        {name}
      </h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-2">
        {location}
      </p>
      <a href={`mailto:${email}`} className="text-blue-500 hover:underline dark:text-blue-400">
        {email}
      </a>
      <div className="flex justify-center mt-4 space-x-4">
        <a 
          href={githubUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300"
          aria-label='GitHub'
        >
          <FaGithub size={24} />
        </a>
        <a 
          href={linkedinUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300"
          aria-label='LinkedIn'
        >
          <FaLinkedin size={24} />
        </a>
      </div>
    </div>
  );
};

export default Title;

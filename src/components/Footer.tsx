import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Kevin Zhang. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="https://github.com/kevskizhang" target="_blank" rel="noopener noreferrer" 
               className="text-gray-500 hover:text-gray-700">
              <FaGithub size={20} />
            </a>
            <a href="https://linkedin.com/in/kevin-y-zhang" target="_blank" rel="noopener noreferrer"
               className="text-gray-500 hover:text-blue-600">
              <FaLinkedin size={20} />
            </a>
            <a href="https://twitter.com/kevskizhang" target="_blank" rel="noopener noreferrer"
               className="text-gray-500 hover:text-blue-400">
              <FaTwitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
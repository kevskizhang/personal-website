import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="w-full flex-1 flex items-center justify-center py-12">
      <div className="w-full max-w-4xl px-4 text-center">
        {/* Greeting */}
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
          Hi, I'm Kevin
        </h1>
        
        {/* Profile Image */}
        <div className="flex justify-center mb-10">
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gray-200 overflow-hidden border-4 border-gray-100 shadow-lg">
            {/* Replace the div below with your actual image */}
            <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500">
              Your Photo
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex justify-center space-x-6 mb-12">
          <a 
            href="https://github.com/kevskizhang" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition-colors"
            aria-label="GitHub"
          >
            <FaGithub size={24} />
          </a>
          <a 
            href="https://linkedin.com/in/kevin-y-zhang" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>
          <a 
            href="mailto:kzhan3@illinois.edu" 
            className="text-gray-600 hover:text-red-500 transition-colors"
            aria-label="Email"
          >
            <FaEnvelope size={24} />
          </a>
        </div>

        {/* Description */}
        <div className="prose prose-lg text-gray-700 max-w-2xl mx-auto mb-12">
          <p className="mb-6">
            I'm a passionate Full Stack Developer with a love for creating beautiful,
            functional web applications. I specialize in modern JavaScript frameworks
            and enjoy tackling complex problems with elegant solutions.
          </p>
          <p className="mb-8">
            When I'm not coding, you can find me exploring new technologies,
            contributing to open source, or enjoying the great outdoors.
          </p>
        </div>

        {/* Call to Action */}
        <div className="flex justify-center">
          <Link
            to="/portfolio"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-md transition-colors shadow-md hover:shadow-lg"
          >
            View My Work
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
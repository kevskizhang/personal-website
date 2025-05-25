import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="w-full flex-1 flex items-center justify-center pt-4 pb-12">
      <div className="w-full max-w-4xl px-4 text-center">
        {/* Greeting */}
        <h1 className="text-5xl md:text-6xl color-text-primary mb-8 font-family">
          <div className="inline-block">
            <span className="css-typing">
              hi, I'm Kevin
            </span>
          </div>
        </h1>
        
        {/* Hero Image */}
        <div className="flex justify-center mb-10 px-4">
            <img 
              src="/images/kevin-hero-2.jpg"
              alt="Kevin on the quad"
              className="w-full h-auto object-cover max-w-lg"
            />
        </div>

        {/* Contact Info */}
        <div className="flex justify-center space-x-8 mb-12">
          <a 
            href="https://github.com/kevskizhang" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link text-gray-400 hover:text-gray-100 transition-colors duration-300"
            aria-label="GitHub"
          >
            <FaGithub size={24} />
          </a>
          <a 
            href="https://linkedin.com/in/kevin-y-zhang" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link text-gray-400 hover:text-blue-400 transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>
          <a 
            href="mailto:kzhan3@illinois.edu" 
            className="social-link text-gray-400 hover:text-red-400 transition-colors duration-300"
            aria-label="Email"
          >
            <FaEnvelope size={24} />
          </a>
        </div>

        {/* Description */}
        <div className="prose prose-lg color-text-secondary max-w-2xl mx-auto mb-12 font-family">
          <p className="mb-6">
            I study Computer Science at the University of Illinois-Urbana Champaign, with an interest in software development and artificial intelligence.
          </p>
        </div>

        {/* Call to Action */}
        <div className="flex justify-center mt-12">
          <Link
            to="/portfolio"
            className="text-link"
          >
            View My Work
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
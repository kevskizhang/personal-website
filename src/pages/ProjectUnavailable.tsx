import { useParams, Link } from 'react-router-dom';
import { projectsData } from '../data/projects';

const ProjectUnavailable = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projectsData.find(p => p.slug === slug);

  if (!project) {
    return (
      <div className="max-w-3xl mx-auto text-center py-12">
        <h1 className="text-2xl font-family color-text-primary mb-4">Project Not Found</h1>
        <p className="text-gray-400 mb-6">The project you're looking for doesn't exist.</p>
        <Link to="/portfolio" className="text-link-back">
          Back to Portfolio
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto text-center py-12">
      {/* Back Button */}
      <Link to={`/portfolio/${project.slug}`} className="text-link-back mb-8 inline-block">
        Back to Project
      </Link>

      {/* Unavailable Message */}
      <div className="mb-8">
        <h1 className="text-3xl font-family color-text-primary mb-4">{project.title} - Not Available</h1>
        <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
          <div className="text-6xl mb-4">🔒</div>
          <h2 className="text-xl font-semibold text-white mb-4">Project Not Deployed</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            This project is currently not available for public viewing. It may be:
          </p>
          <ul className="text-left text-gray-300 space-y-2 mb-6 max-w-md mx-auto">
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              Still in development
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              Private or confidential
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              Not yet deployed to a public server
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              Taken down for maintenance
            </li>
          </ul>
          <p className="text-gray-400 text-sm">
            Check back later or contact me for more information about this project.
          </p>
        </div>
      </div>

      {/* Navigation Options */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link to="/portfolio" className="text-link-back">
          Back to Portfolio
        </Link>
        <Link to="/about" className="text-link">
          Contact Me
        </Link>
      </div>
    </div>
  );
};

export default ProjectUnavailable;
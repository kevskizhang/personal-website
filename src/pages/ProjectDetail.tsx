import { useParams, Link } from 'react-router-dom';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { projectsData } from '../data/projects';

const ProjectDetail = () => {
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
    <div className="max-w-4xl mx-auto">
      {/* Back Button */}
      <Link to="/portfolio" className="text-link-back mb-6">
        Back to Portfolio
      </Link>

      {/* Project Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-family color-text-primary mb-4">{project.title}</h1>
        <p className="text-xl text-gray-300 mb-6">{project.description}</p>
        
        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 mb-6">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <FaGithub size={16} />
              <span>View Code</span>
            </a>
          )}
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition-colors"
            >
              <FaExternalLinkAlt size={16} />
              <span>Link</span>
            </a>
          ) : (
            <Link
              to={`/portfolio/${project.slug}/unavailable`}
              className="inline-flex items-center space-x-2 bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-500 transition-colors"
            >
              <FaExternalLinkAlt size={16} />
              <span>Not Available</span>
            </Link>
          )}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="bg-gray-700 text-gray-200 px-3 py-1 rounded-full text-sm">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Project Image */}
      <div className="mb-8">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 md:h-96 object-cover rounded-lg"
        />
      </div>

      {/* Project Content */}
      <div className="grid gap-8 md:grid-cols-2">
        {/* Description */}
        <div>
          <h2 className="text-xl font-family text-white mb-4">About This Project</h2>
          <p className="text-gray-300 leading-relaxed">
            {project.fullDescription}
          </p>
        </div>

        {/* Features */}
        {project.features && (
          <div>
            <h2 className="text-xl font-family text-white mb-4">Key Features</h2>
            <ul className="space-y-2">
              {project.features.map((feature, index) => (
                <li key={index} className="text-gray-300 flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Technologies */}
      {project.technologies && (
        <div className="mt-8">
          <h2 className="text-xl font-family text-white mb-4">Technologies Used</h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span key={tech} className="bg-black text-gray-200 px-3 py-1 rounded border border-gray-700">
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;
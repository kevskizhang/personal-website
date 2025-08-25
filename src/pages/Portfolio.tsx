import { Link } from 'react-router-dom';
import { projectsData } from '../data/projects';

const Portfolio = () => {
  return (
    <div>
      <h1 className="text-3xl font-family color-text-primary mb-6">Some Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project) => (
          <div key={project.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-700">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs bg-gray-700 text-gray-200 px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                to={`/portfolio/${project.slug}`}
                className="text-link"
              >
                View Project
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
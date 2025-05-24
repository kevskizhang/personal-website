import { Link } from 'react-router-dom';

const projects = [
  {
    id: 1,
    title: 'Project One',
    description: 'A brief description of the project and what it does.',
    tags: ['React', 'Node.js', 'MongoDB'],
    image: '/project1.jpg',
    link: '#'
  },
  // Add more projects as needed
];

const Portfolio = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-8">My Work</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs bg-gray-100 px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
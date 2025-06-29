import { useState, useMemo } from 'react';


const skills = [
  { name: 'JavaScript', category: 'languages' },
  { name: 'TypeScript', category: 'languages' },
  { name: 'Python', category: 'languages' },
  { name: 'Java', category: 'languages' },
  { name: 'C++', category: 'languages' },
  { name: 'SQL', category: 'languages' },
  { name: 'C', category: 'language' },
  { name: 'C#', category: 'language' },
  { name: 'HTML/CSS', category: 'language' },
  { name: 'React', category: 'framework' },
  { name: 'Node.js', category: 'framework' },
  { name: 'Next.js', category: 'framework' },
  { name: 'Electron.js', category: 'framework' },
  { name: 'Tailwind CSS', category: 'framework' },
  { name: 'Vite', category: 'software' },
  { name: 'Git', category: 'software' },
  { name: 'Docker', category: 'software' },
  { name: 'Figma', category: 'software' },
  { name: 'Public Speaking', category: 'misc' },
  { name: 'Poker', category: 'misc' },
];

const categories = ['all', 'languages', 'framework', 'software', 'misc'];

const About = () => {
    const [activeCategory, setActiveCategory] = useState('all');

    const filteredSkills = useMemo(() => {
        if (activeCategory === 'all') {
            return skills;
        }
        return skills.filter(skill => skill.category === activeCategory);
    }, [activeCategory]);

    return (
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-family color-text-primary mb-6">About Me</h1>
        <div className="prose max-w-none">
          <p className="color-text-primary mb-4">
            I'm Kevin Zhang, a Computer Science student at the University of Illinois-Urbana Champaign.

            I'm passionate about software development and artificial intelligence, and I'm always looking for new ways to apply my skills to real-world problems. To that end, I've worked on a variety of projects and startups.

            I'm also a big fan of poker, fantasy book series, video games, and the Chicago Bears.
          </p>
          <div className="flex justify-center my-8">
            <a
              href="/resume/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              View Resume
            </a>
          </div>

          <h2 className="text-2xl font-family text-primary mt-8 mb-4">Skills</h2>

          <div className="flex flex-wrap gap-4 mb-4">
            {categories.map(category => (
              <span
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`cursor-pointer text-lg font-medium capitalize transition-colors ${
                  activeCategory === category
                    ? 'text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {category}
              </span>
            ))}
          </div>
          <hr className="border-slate-700 mb-8" />

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 mb-8">
            {filteredSkills.map((skill) => (
              <div key={skill.name} className="bg-black py-2 px-3 rounded-lg shadow-sm border border-slate-800 flex items-center justify-center shimmer-border">
                <p className="text-slate-200 text-center text-base">{skill.name}</p>
              </div>
            ))}
          </div>
          <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Experience</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium">Software Development Intern</h3>
              <p className="text-gray-600">Clarity Partners • June 2024 - August 2024</p>
              <p className="mt-2 text-gray-400">Clarity Partners, LLC is a privately held full-service management and technology consulting firm, founded in Chicago, IL in 2004 on the principle of providing big firm consulting best practices with the innovation, efficiency, and personal attention typically found in smaller firms.</p>
            </div>
          </div>
          <div className="space-y-6 mt-4">
            <div>
              <h3 className="text-lg font-medium">Software Engineer</h3>
              <p className="text-gray-600">Geni • October 2023 - May 2024</p>
              <p className="mt-2 text-gray-400">Geni is a software startup company aimed at creating personalized education tools for educators and students using AI.</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default About;
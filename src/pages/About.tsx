const About = () => {
    return (
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold color-text-primary mb-6">About Me</h1>
        <div className="prose max-w-none">
          <p className="color-text-primary mb-4">
            I'm Kevin Zhang, a Computer Science student at the University of Illinois-Urbana Champaign.

            I'm passionate about software development and artificial intelligence, and I'm always looking for new ways to apply my skills to real-world problems. To that end, I've worked on a variety of projects and startups.

            I'm also a big fan of poker, fantasy book series, video games, and the Chicago Bears.
          </p>
          <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {['JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'SQL'].map((skill) => (
              <div key={skill} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 text-slate">
                {skill}
              </div>
            ))}
          </div>
          <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Experience</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium">Software Development Intern</h3>
              <p className="text-gray-600">Clarity Partners • June 2024 - August 2024</p>
              <p className="mt-2 text-gray-700">Brief description of your role and achievements.</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default About;
const About = () => {
    return (
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">About Me</h1>
        <div className="prose max-w-none">
          <p className="text-gray-700 mb-4">
            Hello! I'm Kevin Zhang, a passionate developer with experience in building
            web applications and solving complex problems.
          </p>
          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {['JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'SQL'].map((skill) => (
              <div key={skill} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                {skill}
              </div>
            ))}
          </div>
          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Experience</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium">Software Engineer</h3>
              <p className="text-gray-600">Company Name • 2022 - Present</p>
              <p className="mt-2 text-gray-700">Brief description of your role and achievements.</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default About;
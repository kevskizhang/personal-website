const Resume = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center">
      <div className="w-full max-w-4xl flex-grow">
        <iframe
          src="/resume/resume.pdf"
          title="Kevin Zhang's Resume"
          className="w-full h-full border-none"
        />
      </div>
    </div>
  );
};

export default Resume;

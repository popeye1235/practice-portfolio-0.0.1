import GradientBackground from "../components/GradientBackground"

// src/app/projects/page.tsx
const Projects = () => {
    return (
    <GradientBackground>
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold">My Projects</h1>
        <p className="mt-4 text-lg text-gray-700">Here are some of the projects I've worked on:</p>
        {/* Add project details or cards */}
      </div>
    </GradientBackground>
    );
  };
  
  export default Projects;
  
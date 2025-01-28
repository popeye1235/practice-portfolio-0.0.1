import GradientBackground from "../components/GradientBackground";

const technologies = ["React", "Next.js", "TailwindCSS", "Firebase", "JavaScript (ES6+)", "TypeScript", "Daisy UI", "Angular 9/11/12", "Git", "Agile"];

const About = () => {
  return (
    <GradientBackground>
      <div className="container mx-auto p-8 flex flex-col items-center">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
          About Me
        </h1>
        <div className="w-full md:w-3/4 lg:w-1/2 text-center">
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            I&apos;m a <span className="font-semibold text-blue-600">web developer</span> with a passion for building dynamic, user-friendly, and visually appealing full-stack applications. 
            With experience in tools like React, Next.js, and TailwindCSS, I thrive on crafting seamless user experiences and solving complex challenges.
          </p>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            Apart from coding, I’m an avid content creator, sharing stories about historical revolutionaries and bringing history alive through digital storytelling. When not working, you’ll often find me exploring photography, improving my fitness, or enjoying the scenic beauty of Digha, West Bengal.
          </p>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            I believe in lifelong learning, and I’m constantly exploring new technologies and creative outlets to grow both personally and professionally.
          </p>
        </div>

        {/* Decorative Line */}
        <div className="w-12 h-1 bg-blue-600 mt-6 mb-6"></div>

        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Technologies I Work With</h2>
          <div className="flex flex-wrap justify-center mt-4">
            {technologies.map(tech => (
              <span key={tech} className="bg-gray-800 text-blue-300 text-sm font-medium px-4 py-1 m-2 rounded-full dark:bg-gray-900 dark:text-blue-400">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </GradientBackground>
  );
};

export default About;

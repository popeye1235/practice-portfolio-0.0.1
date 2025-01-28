import GradientBackground from "../components/GradientBackground";

const experiences = [
  {
    role: "SDE-1(Frontend) at PhysicsWallah Pvt. Ltd",
    duration: "May 2022 - Sept 2024",
    description: [
      "Developed scalable web applications using React and Node.js.",
      "Collaborated with cross-functional teams to deliver high-quality solutions.",
      "Mentored junior developers on best practices.",
    ],
  },
  {
    role: "Operation Associate at BYJUS",
    duration: "Oct 2020 - Mar 2022",
    description: [
      "Designed and implemented responsive UI components using React and Tailwind CSS.",
      "Worked closely with UX designers to enhance user experience.",
      "Optimized web performance to improve load times and scalability.",
    ],
  },
  {
    role: "Web Developer at Synprox Solutions",
    duration: "Jun 2020 - Sept 2020",
    description: [
      "Designed and implemented responsive UI components using React and Tailwind CSS.",
      "Worked closely with UX designers to enhance user experience.",
      "Optimized web performance to improve load times and scalability.",
    ],
  },
];

const Experience = () => {
  return (
    <GradientBackground>
      <div className="container mx-auto text-center pt-8">
        <h2 className="text-4xl font-bold mb-6">My Experiences</h2>
        <p className="text-gray-700 dark:text-gray-400 mb-12">
          Here's a glimpse of my professional journey and the skills I have gained.
        </p>
        <div className="space-y-8 mb-8">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="p-6 rounded-lg shadow-lg bg-gray-800 dark:bg-white dark:shadow-gray-700"
            >
              <h3 className="text-2xl font-semibold text-gray-300 dark:text-gray-800">
                {experience.role}
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                {experience.duration}
              </p>
              <ul className="list-disc list-inside mt-4 text-gray-300 dark:text-gray-800">
                {experience.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </GradientBackground>
  );
};

export default Experience;

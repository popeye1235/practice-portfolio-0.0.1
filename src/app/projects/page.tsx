/* eslint-disable @next/next/no-img-element */
import GradientBackground from "../components/GradientBackground"

interface Photo {
  id: number;
  url: string;
  title: string;
  link: string; // Add a link property for the project
}

const Projects = () => {
  const photos: Photo[] = [
    { id: 1, url: "/photo1.jpeg", title: "Boat at Assi Ghat", link: "https://your-project-link-1.com" },
    { id: 2, url: "/photo2.jpeg", title: "Kolkata tram line", link: "https://your-project-link-2.com" },
    { id: 3, url: "/photo3.jpeg", title: "Tajpur beach", link: "https://your-project-link-3.com" },
    { id: 4, url: "/photo4.jpeg", title: "Pigeons", link: "https://your-project-link-4.com" },
    { id: 5, url: "/photo5.jpeg", title: "Biswa Bangla Gate", link: "https://your-project-link-5.com" },
    { id: 6, url: "/photo6.jpeg", title: "Kolkata Street", link: "https://your-project-link-6.com" },
    { id: 7, url: "/photo7.jpeg", title: "Circus", link: "https://your-project-link-7.com" },
    { id: 8, url: "/photo8.jpeg", title: "Street", link: "https://your-project-link-8.com" },
    { id: 9, url: "/photo9.jpeg", title: "Village", link: "https://your-project-link-9.com" },
  ];
// remove all these photos and attach screenshots and links of projects
  return (
    <GradientBackground>
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold">My Projects</h1>
        <p className="mt-4 text-lg text-gray-700">Here are some of the projects I&apos;ve worked on:</p>
        
        <div className="container mx-auto p-8">          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((photo) => (
              <div
                key={photo.id}
                className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer"
              >
                <img
                  src={photo.url}
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-105"
                />
                <a
                  href={photo.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  Go to Project
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </GradientBackground>
  );
};

export default Projects;

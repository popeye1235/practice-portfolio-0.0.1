/* eslint-disable @next/next/no-img-element */
"use client";
import GradientBackground from "./components/GradientBackground";
import Typewriter from "./TypeWriter";

const Home = () => {

  // const handleDownloadCV = () => {
  //   const link = document.createElement("a");
  //   link.href = "./resume.pdf"; 
  //   link.download = "Sudip_Resume.pdf";
  //   link.click();
  // };

  

  return (
    <GradientBackground>
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-center text-black dark:text-white">
        Welcome to My Portfolio
      </h1>
      {/* <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 text-center">
        Hello! I'm a passionate developer. Here's a glimpse of my work and skills.
      </p> */}
      <Typewriter/>
    <div className="mt-8">
          <img
            src="./sudip.jpeg" // Replace with the actual path to your photo
            alt="My Photo"
            onContextMenu={(e) => e.preventDefault()} 
            className="w-72 h-72 mx-auto rounded-full border-4 border-gray-700 dark:border-gray-300 shadow-md"
          />
      </div>
      <div className="mt-6 flex justify-center space-x-4">
          {/* Link Button */}
          <a
            href="https://linktr.ee/babumosai_23?fbclid=PAZXh0bgNhZW0CMTEAAaZFW7cEmadzwhMpjvkjBbuzGGS3uV0saMA5Tb-Mu2JdCfJ_LjAWpc0tMo0_aem_owzrWKNns8Du7DpvB28RmQ" target="_blank"// Replace with your desired link
            className="px-6 py-3 text-white bg-[#202020] hover:bg-[#606060] dark:bg-slate-400 dark:hover:bg-slate-600 rounded-lg shadow-lg transform transition-transform hover:scale-105 border-2 border-yellow-500"
          >
           ← Visit My Links
          </a>

          {/* Download CV Button */}
          {/* <button
            onClick={handleDownloadCV}
            className="px-6 py-3 text-white bg-green-500 hover:bg-green-600 rounded-lg shadow-lg transform transition-transform hover:scale-105"
          >
            Download CV
          </button> */}
          <a
            href="./resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="px-6 py-3 text-white bg-green-500 hover:bg-green-600 rounded-lg shadow-lg transform transition-transform hover:scale-105 border-2 border-yellow-500"
          >
            View My CV →
          </a>
        </div>
    </div>
    </GradientBackground>
  );
};

export default Home;

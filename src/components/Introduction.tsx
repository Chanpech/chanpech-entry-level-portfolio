import { FaGithub, FaLinkedin, FaMailBulk } from "react-icons/fa";
import profilePicture from '../assets/profile.svg'

export default function Introduction() {
  return (
    <section id="about" className="mb-14">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="w-48 h-48 md:w-64 md:h-64 relative overflow-hidden rounded-full border-4 border-primary shadow-lg">
          <img
            src={profilePicture}
            alt="Chanpech Hoeng"
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4">Chanpec Hoeng</h2>
          <h3 className="text-xl text-muted-foreground mb-4">B.S. Computer Science Graduate | Cybersecurity Enthusiast</h3>
          <p className="text-lg mb-6">
          Class of 2024 Michigan Technological University graduate with a passion for developing secure and efficient software solutions. 
          Seeking opportunities to apply my skills in software development and cybersecurity to make a positive impact in the tech industry.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://github.com/Chanpech"
              target="_blank" //Open in a new tab
              rel="noopener noreferrer" // Adds security enhancement - tabnabbing
              className="bg-gray-800 text-white px-5 py-2 rounded hover:bg-gray-700 flex items-center space-x-2"
            >
              <FaGithub />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/chanpech-hoeng-2b7a351b5/"
              target="_blank" //Open in a new tab
              rel="noopener noreferrer" // Adds security enhancement - tabnabbing
              className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-500 flex items-center space-x-2"
            >
              <FaLinkedin />
              <span>LinkedIn</span>
            </a>
            <a
              href="#contact"
              className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-500 flex items-center space-x-2"
            >
              <FaMailBulk />
              <span>Contact Me</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

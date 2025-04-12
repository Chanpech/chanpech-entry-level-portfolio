import { FaGithub, FaLinkedin, FaMailBulk } from "react-icons/fa";
import { FaSquareUpwork } from "react-icons/fa6";
import profilePicture from '../assets/profile.svg';


export default function Introduction() {
  return (
    <section id="about" className="container mx-auto px-4 py-8 mb-14">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="w-48 h-48 md:w-64 md:h-64 relative overflow-hidden rounded-full border-4 border-primary shadow-lg">
          <img
            src={profilePicture} 
            alt="Damian Nul"
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-3xl font-bold ">Damian Nul</h2>
          <h2 className="text-2xl text-muted-foreground mb-4">Formerly known: Chanpech Hoeng</h2>
          <h3 className="text-xl text-muted-foreground">B.S. Computer Science Graduate | Cybersecurity Enthusiast</h3>
          <h4 className="text-l text-muted-foreground mb-4">Departmental GPA: 3.55 | Cumulative GPA: 3.71</h4>
          <p className="text-lg mb-6">
            Actively seeking I.T. and developer opportunity! I am able to relocate, pick up new skills, and put in the work! Open to freelance work, contract, and full-time position. If I peeked your interests please shoot me a message and I'm happy to chat 💬! 
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
              className="bg-gray-600 text-white px-5 py-2 rounded hover:bg-gray-500 flex items-center space-x-2"
            >
              <FaMailBulk />
              <span>Contact Me</span>
            </a>
            <a
              href="https://www.upwork.com/freelancers/~0139165d8663d72f31?mp_source=share"
              className="bg-green-900 text-white px-5 py-2 rounded hover:bg-gray-500 flex items-center space-x-2"
            >
              <FaSquareUpwork />
              <span>Freelance</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

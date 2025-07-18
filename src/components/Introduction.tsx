import { FaGithub, FaLinkedin, FaMailBulk } from "react-icons/fa";
import { FaSquareUpwork } from "react-icons/fa6";
import FlippingImage from "./FlipImage";
import frontPic from "../assets/profile.svg"
import backPic from "../assets/profile/IT_Specilist.webp"

export default function Introduction() {
  return (
    <section id="about" className="container mx-auto px-4 py-8 mb-14">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="w-48 h-48 md:w-64 md:h-64 relative overflow-hidden rounded-full border-4 border-primary shadow-lg">
          <FlippingImage
            frontImage={frontPic}
            backImage={backPic}
            flipInterval={10000}
            altFront="Damian Nul"
            altBack="Alternate Damian"
        />
        </div>
        <div className="flex-1">
          <h2 className="text-3xl font-bold ">Damian Nul</h2>
          <h2 className="text-2xl text-muted-foreground mb-4">Formerly known: Chanpech Hoeng</h2>
          <h3 className="text-xl text-muted-foreground">B.S. Computer Science Graduate | Cybersecurity Enthusiast</h3>
          <h4 className="text-l text-muted-foreground mb-4">Departmental GPA: 3.55 | Cumulative GPA: 3.71</h4>
          <p className="text-lg mb-6">
          Actively seeking opportunities in IT and software development! I'm open to freelance, contract, or full-time roles—and ready to relocate if needed. I’m a fast learner, dedicated, and always up for a challenge.

If I’ve piqued your interest, feel free to reach out—I'd love to chat! 💬
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
              href="https://www.linkedin.com/in/damian-nul-2b7a351b5/"
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

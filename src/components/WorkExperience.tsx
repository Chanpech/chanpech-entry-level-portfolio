import { GoProject } from "react-icons/go";

export default function WorkExperience() {
  const experiences = [
    {
      title: "IT Operations - Mac Shop Specialist",
      company: "Michigan Technological University",
      date: "Sept 2021 - June 2024",
      description: "This is the description",
    },
    {
      title: "Co-Leader | Full-Stack Developer",
      company: "HIDE - General Motor @MTU",
      date: "Jan 2024 - May 2024",
      description: "This is the description",
      link: "https://github.com/MTUHIDE/GM-Automotive-Car-Comparison-App",
    },
  ];

  return (
    <section id="experience">
      <h2 className="text-3xl font-bold mb-4">Work Experience</h2>
      {experiences.map((exp, index) => (
        <div key={index} className="mb-6">
          <h3 className="text-xl font-semibold">{exp.title}</h3>
          <p className="text-gray-600 dark:text-gray-400">
            {exp.company} | {exp.date}{" "}
          </p>
          <p className="mt-2">Description: {exp.description}</p>
          <div className="flex space-x-5 justify-center">
            {exp.link && (
              <a
                href={exp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-500 flex items-center space-x-2"
              >
                <GoProject />
                <span>View Project</span>
              </a>
            )}
          </div>
        </div>
      ))}
    </section>
  );
}

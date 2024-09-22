import { useState } from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import { Button } from "@/components/ui/button";

interface CourseSection {
  title: string;
  courses: string[];
}

export default function Courses() {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>(
    {}
  );

  const courseSections: CourseSection[] = [
    {
      title: "Computer Science Courses",
      courses: [
        "Data Structures",
        "Systems Programming",
        "Formal Models Of Computation",
        "Intro to Database Systems",
        "Concurrent Programming",
        "Ethical/Social Aspects of Comp",
        "Discrete Mathematics",
        "Intro. to Algorithms",
        "Programming at HW/SW Interface",
        "Programming Languages",
        "Software Model Driven Development",
        "Team Software Project",
        "Computer Organization",
        "Accel. Intro to Programming",
        "Circuits & Instrumentation CPS",
        "IS/IT Management",
      ],
    },
    {
      title: "Cybersecurity Courses",
      courses: [
        "Cybersecurity I",
        "Cybersecurity II",
        "Network Security",
        "Computer Networks",
        "Ethical Hacking",
      ],
    },

    {
      title: "Mathemathics Courses",
      courses: [
        "Introduction to Linear Algebra",
        "Statistical Methods",
        "Probability",
        "Calculus with Technology I",
        "Calculus with Technology II",
        "Exploring Number Theory",
      ],
    },

    {
      title: "General Courses",
      courses: [
        "Science Fiction",
        "Advanced Composition",
        "Composition",
        "Technical and Prof Comm",
        "US History Since 1877",
        "Introduction to Film",
        "General Biology I Laboratory",
        "General Biology I",
        "Environment and Society",
        "Introductory Astronomy",
        "Introductory Astronomy Lab",
        "Global Issues",
      ],
    },
  ];

  const toggleSection = (title: string) => {
    setOpenSections((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  return (
    <section id="courses" className="mb-12">
      <h2 className="text-3xl font-bold mb-2">Completed Michigan Technological University's Courses</h2>
      <p className="text-sm font-semibold mb-6 italic  ">* College transcript available upon request</p>
      <div className="space-y-4">
        {courseSections.map((section) => (
          <div key={section.title} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <Button
              variant="ghost"
              className="w-full flex justify-between items-center p-4 text-left"
              onClick={() => toggleSection(section.title)}
              aria-expanded={openSections[section.title]}
              aria-controls={`${section.title}-content`}
            >
              <span className="text-lg font-semibold">{section.title}</span>
              {openSections[section.title] ? (
                <FaAngleUp className="w-5 h-5" />
              ) : (
                <FaAngleDown className="w-5 h-5" />
              )}
            </Button>
            {openSections[section.title] && (
              <div
                id={`${section.title}-content`}
                className="p-4 bg-gray-50 dark:bg-gray-700 text-left"
              >
                <ul className="list-disc list-inside space-y-2">
                  {section.courses.map((course, index) => (
                    <li key={index}>{course}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

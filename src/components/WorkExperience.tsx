import { GoProject } from "react-icons/go";

export default function WorkExperience() {
  const experiences = [
    {
      title: "Promoted - Student Mac Support Technician",
      company: "Michigan Technological University",
      date: "Sept 2022 - June 2024",
      description: "As a Mac Specialist, I configured and deployed Apple devices using MDM profiles, ensuring seamless network access and device management. I leveraged IT workflows and tools such as the Atlassian Software Suite, Jamf Pro/Composer, Slack, and Team Dynamics to support operations. I developed software installation shell scripts and packages following Agile SCRUM methodology to improve deployment efficiency. Additionally, I have hands-on experience troubleshooting and repairing computers, including disassembly, component replacement, and diagnostics using boot recovery and Linux systems. My strong technical performance led to a promotion from Classroom Operations to Mac Specialist within one year.",
      skills: "Docker, Jamf Pro, Jamf Pro APIs, MDM Profiles, Slack, Team Dynamics, Atlassian Software Suite, Jira, Confluence - Documentation, Device Diagnostic, Backup and Recovery, Software Scripting, Software Packaging, Software Deployment, Computer's Component Replacement, and SSH/Remote Desktop"
    },
    {
      title: "Student IT Lab Maintenance",
      company: "Michigan Technological University",
      date: "Sept 2021 - Sep 2022",
      description: "As a Student IT Lab Maintenance Specialist, I provided technical support by diagnosing and resolving printer and network connectivity issues, ensuring smooth lab operations. I was responsible for maintaining and recycling equipment, along with handling customer service inquiries. My role involved troubleshooting and repairing hardware and software issues across a range of devices. Through hands-on experience, I developed strong problem-solving skills, technical expertise in maintaining lab environments, and excellent customer service.",
      skills: "Printer Diagnostics and Repair, Network Connectivitiy Troubleshooting, Equipment Maintenace and Recycling, Customer Service, Calling and Scheduling Customer's Supports, and Salvaging Valuable Parts"
    },
    {
      title: "Production Team Member",
      company: "Gentex",
      date: "May 2022 - Aug 2022",
      description: "As a Production Team Member at Gentex, I contributed to the manufacturing process by assembling and inspecting products to ensure quality and adherence to production standards. I collaborated with team members to meet daily production goals while maintaining a safe and efficient work environment. My role involved operating machinery, performing quality control checks, and troubleshooting minor issues to keep the production line running smoothly. This experience honed my attention to detail, teamwork, and ability to work in a fast-paced, high-demand environment.",
      skills: "Assembly, Quality Assurance, Fast-pace environment, and Manufacturing Process"
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
          <p className="mt-2">{exp.description}</p>
          <div className="mt-2">
            {exp.skills && (
              <div className="flex gap-2">
                <div className="font-semibold">
                  Skills: 
                </div>
                <div>
                  {exp.skills}
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </section>
  );
}

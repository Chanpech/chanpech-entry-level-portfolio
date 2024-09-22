import { GoProject } from "react-icons/go";
import { FaRegCalendar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";

interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  date: string;
  description: string[];
  skills: string;
}

const experiences: Experience[] = [
  {
    id: "1",
    title: "Promoted - Student Mac Support Technician",
    company: "Michigan Technological University",
    location: "Townsend Dr, Houghton, MI 49931",
    date: "Sept 2022 - June 2024",
    description: [
      "Configured and deployed over 30 Apple devices using MDM profiles, ensuring seamless network access and secure device management across the university campus.",
      "Leveraged IT workflows and tools such as the Atlassian Software Suite, Jamf Pro/Composer, Slack, and Team Dynamics to support operations.",
      "Developed and automated Jamf Pro's installation scripts by developing consistent Bash structure to streamline software deployment, making it seemless to update to newer version in the future",
      "Hands-on experience troubleshooting and repairing computers, including disassembly, component replacement, and diagnostics using boot recovery and Linux systems.",
      "Provided exceptional customer support and technical expertise, contributing to the promotion from Classroom Ops to Mac Specialist within one year.",
    ],
    skills:
      "Docker, Jamf Pro, Jamf Pro APIs, MDM Profiles, Slack, Team Dynamics, Atlassian Software Suite, Jira, Confluence - Documentation, Device Diagnostic, Backup and Recovery, Software Scripting, Software Packaging, Software Deployment, Computer's Component Replacement, and SSH/Remote Desktop",
  },
  {
    id: "2",
    title: "Student IT Lab Maintenance",
    company: "Michigan Technological University",
    location: "Townsend Dr, Houghton, MI 49931",
    date: "Sept 2021 - Sep 2022",
    description: [
      "Diagnosed and resolved hardware, software, printer, and network connectivity issues, ensuring uninterrupted lab operations for students and staff.",
      "Maintained, recycled, and updated lab equipment to meet university standards, extending the lifespan of devices and minimizing disruptions.",
      "Delivered excellent customer service by addressing student and faculty inquiries promptly, enhancing overall lab experience and operational efficiency.",
      "Documented and escalated unresolved issues to senior IT staff, ensuring complex problems were addressed while maintaining smooth lab workflows.",
    ],
    skills:
      "Printer Diagnostics and Repair, Network Connectivitiy Troubleshooting, Equipment Maintenace and Recycling, Customer Service, Calling and Scheduling Customer's Supports, and Salvaging Valuable Parts",
  },
  // {
  //   id: "3",
  //   title: "Production Team Member",
  //   company: "Gentex",
  //   location: "James Street Holland, MI 49464",
  //   date: "May 2022 - Aug 2022",
  //   description: [
  //     "Assembled and inspected products to ensure compliance with stringent quality and production standards, contributing to the consistent delivery of high-quality goods.",
  //     "Collaborated effectively with team members to meet or exceed daily production targets, consistently contributing to an efficient and safe work environment.",
  //   ],
  //   skills:
  //     "Assembly, Quality Assurance, Fast-pace environment, and Manufacturing Process",
  // },
];

export default function WorkExperience() {
  return (
    <section id="experience" className="mb-12">
      <h2 className="text-3xl font-bold mb-4">Work Experience</h2>
      <div className="relative">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Card className="mb-6 relative z-10">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-l-lg" />
                <CardHeader>
                  <CardTitle className="text-xl font-semibold">{exp.title}</CardTitle>
                  <CardDescription  className="font-medium text-primary">
                    {exp.company}
                  </CardDescription>
                  <CardContent>
                    <div className="flex items-center text-sm text-muted-foreground mb-2">
                      <FaRegCalendar className="w-4 h-4 mr-2"/>
                      {exp.date}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground mb-1">
                      <FaLocationDot className="w-4 h-4 mr-2"/>
                      {exp.location}
                    </div>
                  </CardContent>
                  <ul className="list-disc list-inside space-y-1">
                    {exp.description.map((item, itemIndex) => (
                      <motion.li
                        key={itemIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 + itemIndex * 0.1 }}
                      >
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </CardHeader>
            </Card>       
          </motion.div>
        ))}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border rounded-full"></div>
      </div>
    </section>
  );
}

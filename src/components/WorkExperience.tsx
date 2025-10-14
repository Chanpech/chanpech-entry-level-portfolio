import { FaRegCalendar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { useState } from "react";
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
}

const experiences: Experience[] = [
  {
    id: "1",
    title: "System Operator",
    company: "Walmart Inc.",
    location: "Matteson, IL",
    date: "Sept 2021 - Sep 2022",
    description: [
      "Monitor and maintain enterprise-scale system hardware and software infrastructure across high-availability retail and logistics operations, ensuring consistent uptime and reliability.",
      "Respond to and troubleshoot critical incidents impacting system performance, network connectivity, or user access; coordinate with cross-functional IT and engineering teams to restore services within SLA.",
      "Install, configure, and repair hardware, software, and peripheral equipment following established specifications and standards.",
      "Collaborate in a fast-paced, 24/7 enterprise environment, ensuring compliance with Walmart’s IT governance, integrity, and security standards.",

    ],
  },
  {
    id: "2",
    title: "Support Technician - Mac Specialist",
    company: "Michigan Technological University",
    location: "Houghton, MI",
    date: "Sept 2021 - June 2024",
    description: [
      "Configured and deployed over 30 Apple devices using MDM profiles, ensuring seamless network access and secure device management across the university campus.",
      "Leveraged IT workflows and tools such as the Atlassian Software Suite, Jamf Pro/Composer, Slack, and Team Dynamics to support operations.",
      "Developed and automated Jamf Pro's installation scripts by developing consistent Bash structure to streamline software deployment, making it seemless to update to newer version in the future",
      "Hands-on experience troubleshooting and repairing computers, including disassembly, component replacement, and diagnostics using boot recovery and Linux systems.",
      "Provided exceptional customer support and technical expertise, contributing to the promotion from Classroom Ops to Mac Specialist within one year.",
      "Diagnosed and resolved hardware, software, printer, and network connectivity issues, ensuring uninterrupted lab operations for students and staff.",
      "Maintained, recycled, and updated lab equipment to meet university standards, extending the lifespan of devices and minimizing disruptions.",
      "Delivered excellent customer service by addressing student and faculty inquiries promptly, enhancing overall lab experience and operational efficiency.",
      "Documented and escalated unresolved issues to senior IT staff, ensuring complex problems were addressed while maintaining smooth lab workflows.",
    ],
  },

];

export default function WorkExperience() {
  const [expanded, setExpanded] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpanded((prev) => (prev === id ? null : id));
  }


  return (
    <section id="experience" className="mb-12">
      <h2 className="text-3xl font-bold mb-4">Work Experience</h2>
      <div className="relative">
        {experiences.map((exp, index) => {
          const isExpanded = expanded === exp.id;
          const displayedDescriptions = isExpanded
            ? exp.description
            : exp.description.slice(0, 3);

          return (
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
                  <CardDescription className="font-medium text-primary">
                    <span> {exp.company}</span>
                  </CardDescription>
                  <CardContent>
                    <div className="flex items-center text-sm text-muted-foreground mb-2">
                      <FaRegCalendar className="w-4 h-4 mr-2" />
                      {exp.date}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground mb-1">
                      <FaLocationDot className="w-4 h-4 mr-2" />
                      {exp.location}
                    </div>
                  </CardContent>
                  <ul className="list-disc list-inside space-y-1">
                    {displayedDescriptions.map((item, itemIndex) => (
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
                  {exp.description.length > 3 && (
                    <button
                      onClick={() => toggleExpand(exp.id)}
                      className="text-primary mt-2 text-sm font-medium hover:underline"
                    >
                      {isExpanded ? "Show less" : "Show more"}
                    </button>
                  )}
                </CardHeader>
              </Card>
            </motion.div>
          )
        })}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border rounded-full" />
      </div>
    </section>
  );
}

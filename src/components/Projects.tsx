import { ChevronDown, ChevronUp } from "lucide-react";
import ProjectCard from "./ProjectCard";
import { Button } from "./ui/button";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Projects(){
    const projects = [
        {
            title: "Jayden Brian Bakery Website [Maintain]",
            type: "Volunteer Project",
            role:"Solo Developer",
            description:"Volunteered to create a website for a family’s local bakery business with a focus on attracting more clients. Employed React, Next.js, Tailwind CSS to develop a responsive website.",
            technologies:["React","Next.js", "Shadcn.UI", "MongoDB", "Canva", "Figma", "Motion Framer"],
            githubLink:"https://github.com/Chanpech/bakery-website-dev-public-version",
            webLink:"https://jaydenbrianbakery.vercel.app/"
        }, 
        {
            title: "AirBnb Clone [Working on new features]",
            type: "Tutorial Project",
            role:"Learner",
            description:"Learned and implemented a home booking web application with the aimed of understanding the basics fundmental between frontend, backend, and server side development. The application is built on MERN stack and is currently running on Vercel.",
            technologies:["React","Next.js", "MongoDB", "TailWind", "PrismaDB", "NextAuth Login - GitHub & Google", "Vercel", "TypeScript",],
            githubLink:"https://github.com/Chanpech/Home-Booking-App",
            webLink: "https://my-home-booking-clone-app.vercel.app/"
        },
        {
            title: "General Motors - Cars Comparison App",
            type: "Human Interface Design Enterprise",
            role:"Co-Leader | Full-Stack Developer",
            description:"As a lead developer on the Cars Comparison App project for General Motors, I designed and developed a web application that enables users to compare various car models. The project utilized a tech stack including React, Vite.js, Django, Selenium, and Beautiful Soup. I managed the backend, implementing a MySQL database containerized with Docker Compose to streamline development and deployment. I also worked on cost-saving solutions using AWS services like Elastic Beanstalk and LightSail for deployment. My role involved full-stack development, automated testing, and integrating data scraping tools, resulting in an efficient and user-friendly application.",
            technologies:["React","Vite.js", "Django", "Python: Beautiful Soup", "Python: Selenium", "Docker", "AWS", "Postgres", "Figma"],
            githubLink:"https://github.com/MTUHIDE/GM-Automotive-Car-Comparison-App",
            webLink: ""
        },
        {
            title: "Password Manager | Azure Cloud Deployment",
            type: "Personal Project",
            role:"Solo Developer",
            description:"Implemented a temporary password manager that was designed on RESTful API principles. Leveraged free-tier Azure Service, Container registry, and App Service Plan to deploy the application to the cloud. Utilized Node.js and implemented server-side password hashing for the backend.",
            technologies:["React","Vite.js", "Azure Cloud Services", "bcrypt", "Figma", "Express.js", "UseState"],
            githubLink:"https://github.com/Chanpech/password-manager-dockerized-to-azure-cloud",
            webLink: ""
        },
        {
            title: "Projects Manager | MERN Stack + GraphQL",
            type: "Tutorial Project",
            role:"Learner",
            description:"Learned and implemented a project manager web application that would help me track all of my projects. Utilized Apollo GraphQL client to build appropriate schema for the client side to execute queries and mutation from the integrated MongoDB database.",
            technologies:["React","Vite.js", "Express-GraphQL ", "MongoDB", "Express", "Docker", "GraphQL-HTTP"],
            githubLink:"https://github.com/Chanpech/project-management-app",
            webLink: ""
        },
        {
            title:"Little Brothers - Friends of the Elderly",
            type: "Human Interface Design Enterprise",
            role:"Full-Stack Developer",
            description:"As a Fullstack Developer for Little Brothers - Friends of the Elderly, I collaborated on building an administration website and mobile tracking application to support the organization's mission of aiding the elderly in Houghton, MI. I designed and implemented a comprehensive backend database, creating ER and UML diagrams to map out key entities and their relationships. I developed and integrated API functions using Laravel, ensuring seamless data interactions. I rigorously tested and validated API functionalities using Postman and Microsoft SQL Server, delivering reliable and accurate service for the non-profit's operations.",
            technologies:["Vue","Trello", "Laravel", "MVC", "GitHub", "Entitiy Relationship Diagram", "Prototype", "MySQL", "Microsoft SQL Server", "Postman", "Laravel-jest - Client Side Testing"],
            githubLink:"https://github.com/MTUHIDE/little-brothers",
            webLink: ""
        },
    ];
    const [showAll, setShowAll] = useState(false);
    const visibleProjects = showAll ? projects: projects.slice(0,2);

    return (
        <section id="projects" className="mb-14">
            <h2 className="text-3xl font-bold mb-4">Projects</h2>
            <motion.div 
                className="grid grid-cols-1 md:grind-cols-2 lg:grind-cols-3 gap-6"
                initial={false}
                animate={{height: showAll ? "auto" : "auto"}}
                transition={{duration: 0.5, ease: "easeInOut"}}
            >
                <AnimatePresence initial={false}>
                    {visibleProjects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <ProjectCard key={index} {...project} />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
            {projects.length > 2 && ( 
                <motion.div 
                    className="mt-8 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    
                >
                    <Button
                        onClick={() => setShowAll(!showAll)}
                        variant="outline"
                        className="group"
                    >
                        {showAll ? (
                            <>
                                Show Less
                                <ChevronUp className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-1"/>
                            
                            </>
                        ) :
                        (
                            <>
                                Show More
                                <ChevronDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1"/>
                            </>   
                        )}

                    </Button>
                </motion.div>
            )}
        </section>
    );
}

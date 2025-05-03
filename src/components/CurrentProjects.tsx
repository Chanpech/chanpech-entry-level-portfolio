import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { FaExternalLinkAlt } from "react-icons/fa";
import { 
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
 } from "./ui/card";
import { Link } from "react-router-dom";

interface Project { 
    id: string
    title: string
    description: string
    image: string
    link: string
    isInternal?: boolean
}

const projects: Project[] = [
    {
        id: "1", 
        title:"CompTia Security+ Certification",
        description: "Prep to get certified through DionTraining Udemy course. Plan to take exam by the end of April!",
        image:"/CompTIA_Security_Logo.png",
        link: "https://www.udemy.com/course/securityplus/?couponCode=JUST4U02223",
        isInternal: false
    }, 
    {
        id: "2", 
        title:"Homelab Server",
        description: "Powered by a Mac Mini and a Raspberry Pi, my home server is capible of centralized NAS service, Pihole, and more. Want to know more? Check out this dedicated page!",
        image:"/home-server.jpg",  
        link: "/homelabserver", // internal route
        isInternal: true
    }, 
    {
        id: "3", 
        title:"Ollama",
        description: "Learn to locally host LLM models and integrates web APIs",
        image:"/ollama.webp",
        link: "https://github.com/ollama/ollama",
        isInternal: false
    }, 
]

export default function CurrentProjects(){
    const [hoverId, setHoverId] = useState<string | null>(null);

    return (
        <section id="current_projects" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Currently Learning</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {projects.map((project, index) => (
                    <motion.div key={index} >
                        <Card 
                            key={project.id}
                            className="overflow-hidden h-full"
                            onMouseEnter={ () => setHoverId(project.id)}
                            onMouseLeave={ () => setHoverId(null)}
                            // The logic behind the footer animation
                        >
                            <CardHeader className="p-0">
                                <div className="relative overflow-hidden">
                                    <img 
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-60 object-contain transition-transform duration-300 ease-in-out transform hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                                        <Button  variant="secondary" asChild > 
                                            {project.isInternal?(
                                                <Link to={project.link} className="flex items-center">
                                                    View Task
                                                    <FaExternalLinkAlt className="ml-2 h-4 w-4"/>
                                                </Link>
                                            ):(
                                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center">
                                                View Task 
                                                <FaExternalLinkAlt className="ml-2 h-4 w-4"/>
                                                </a>
                                            )}
                                        </Button>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="p-4">
                                <CardTitle className="text-xl mb-2">
                                    {project.title}
                                </CardTitle>
                                <CardDescription>
                                    {project.description}
                                </CardDescription>
                            </CardContent>
                            <CardFooter className="p-4">
                                {/* The little bar animation under the card */}
                                <motion.div 
                                    initial={{width: '0%'}}
                                    animate={{width: hoverId === project.id ? '100%' : '0%'}}
                                    transition={{duration: 0.3}}
                                    className="h-0.5 bg-primary"
                                />
                            </CardFooter>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
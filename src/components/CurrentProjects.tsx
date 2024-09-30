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

interface Project { 
    id: string
    title: string
    description: string
    image: string
    link: string
}

const projects: Project[] = [
    {
        id: "1", 
        title:"CompTia Security+ Certification",
        description: "This is my description",
        image:"/CompTIA_Security_Logo.png",
        link: "https://www.udemy.com/course/securityplus/?couponCode=JUST4U02223"
    }, 
    {
        id: "2", 
        title:"Swift Programming | Mood Tracker",
        description: "This is my description",
        image:"/swift_logo.png",
        link: "https://www.youtube.com/watch?v=8Xg7E9shq0U&ab_channel=freeCodeCamp.org"
    }, 
    {
        id: "3", 
        title:"Embedded Programming with Arduino",
        description: "This is my description",
        image:"/courserameta.jpg",
        link: "https://www.coursera.org/professional-certificates/meta-front-end-developer?"
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
                                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center">
                                                View Task 
                                                <FaExternalLinkAlt className="ml-2 h-4 w-4"/>
                                            </a>
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
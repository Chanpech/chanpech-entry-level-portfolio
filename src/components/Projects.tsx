import ProjectCard from "./ProjectCard";

export default function Projects(){
    const projects = [
        {
            title:"General Motor - Cars Comparison App",
            description:"Some Descriptions",
            technologies:["React","Vite.js", "Django", "Python: Beautiful Soup", "Python: Selenium", "Docker", "AWS", "Postgres", "Figma"],
            githubLink:"https://github.com/MTUHIDE/GM-Automotive-Car-Comparison-App"
        },
        {
            title:"General Motor - Cars Comparison App",
            description:"Some Descriptions",
            technologies:["React","Vite.js", "Django", "Python: Beautiful Soup", "Python: Selenium", "Docker", "AWS", "Postgres", "Figma"],
            githubLink:"https://github.com/MTUHIDE/GM-Automotive-Car-Comparison-App"
        },
    ];
    
    return (
        <section id="projects" className="mb-14">
            <h2 className="text-3xl font-bold mb-4">Projects</h2>
            <div className="grid grid-cols-1 md:grind-cols-2 lg:grind-cols-3 gap-6 ">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </section>
    );
}
import ProjectCard from "./ProjectCard";

export default function Projects(){
    const projects = [
        {
            title:"HIDE: General Motor - Cars Comparison App",
            role:"Co-Leader | Full-Stack Developer",
            description:"As a lead developer on the Cars Comparison App project for General Motors, I designed and developed a web application that enables users to compare various car models. The project utilized a tech stack including React, Vite.js, Django, Selenium, and Beautiful Soup. I managed the backend, implementing a MySQL database containerized with Docker Compose to streamline development and deployment. I also worked on cost-saving solutions using AWS services like Elastic Beanstalk and LightSail for deployment. My role involved full-stack development, automated testing, and integrating data scraping tools, resulting in an efficient and user-friendly application.",
            technologies:["React","Vite.js", "Django", "Python: Beautiful Soup", "Python: Selenium", "Docker", "AWS", "Postgres", "Figma"],
            githubLink:"https://github.com/MTUHIDE/GM-Automotive-Car-Comparison-App"
        },
        {
            title:"HIDE: Little Brother - Friends of the Elderly",
            role:"Full-Stack Developer",
            description:"As a Fullstack Developer for Little Brothers - Friends of the Elderly, I collaborated on building an administration website and mobile tracking application to support the organization's mission of aiding the elderly in Houghton, MI. I designed and implemented a comprehensive backend database, creating ER and UML diagrams to map out key entities and their relationships. I developed and integrated API functions using Laravel, ensuring seamless data interactions. I rigorously tested and validated API functionalities using Postman and Microsoft SQL Server, delivering reliable and accurate service for the non-profit's operations.",
            technologies:["Vue","Trello", "Laravel", "MVC", "GitHub", "Entitiy Relationship Diagram", "Prototype", "MySQL", "Microsoft SQL Server", "Postman", "Laravel-jest - Client Side Testing"],
            githubLink:"https://github.com/MTUHIDE/little-brothers"
        },
        {
            title:"CS3141: Habit Builder App",
            role:"Front-end Developer",
            description:"As an entry-level developer gaining experience with Agile SCRUM methodology and the associated development processes, my primary objective for this project was to familiarize myself with web development within a team environment, closely mirroring professional practices. By the end of the course, our team successfully presented a user-friendly application that operated locally and encompassed essential features for a habit-building app. These features included creating and managing habit cards, logging habits, deleting habit cards, and viewing user profiles.",
            technologies:["React","ER Diagram", "Agile-SCRUM", "GitHub", "Prisma", "Material UI", "UI/UX"],
            githubLink:"https://github.com/MTU-CS3141-Team15/CS3141-R02-team15"
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
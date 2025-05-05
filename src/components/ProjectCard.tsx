import { FaGithub } from "react-icons/fa";
import { GrArticle } from "react-icons/gr";
import { FaSquareShareNodes } from "react-icons/fa6";
import { Button } from "./ui/button";

interface ProjectCardProps {
  title: string;
  type: string;
  role: string;
  description: string;
  technologies: string[];
  githubLink?: string | null;
  webLink?: string | null;
  article?: string | null;
}

export default function ProjectCard({
  title,
  type,
  role,
  description,
  technologies,
  githubLink,
  webLink,
  article,
}: ProjectCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md pd-6 px-4 py-4">
      <h3 className="text-xl font-semibold mb-1">{title}</h3>
      <div className="flex item-cols space-x-2 mb-2">
        <h4 className="text-primary font-semibold font-medium">{type}</h4>
        <h4 className="text-primary text-muted-foreground">{role}</h4>
      </div>
      <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
      <div className="mb-4">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-300 mr-2 mb-2"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 justify-center">
        {githubLink && (
          <Button
          variant="outline"
          size="sm"
          className="w-full sm:w-auto"
          asChild
        >
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-blue-500 hover:text-blue-600 justify-center space-x-1"
          >
            <FaGithub />
            <span>View On GitHub</span>
          </a>
        </Button>
        )}
        {webLink && (
          <Button
            variant="outline"
            size="sm"
            className="w-full sm:w-auto"
            asChild
          >
            <a
              href={webLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-500 hover:text-blue-600 justify-center space-x-1"
            >
              <FaSquareShareNodes />
              <span>View Website</span>
            </a>
          </Button>
        )}
        {article && (
          <Button
            variant="outline"
            size="sm"
            className="w-full sm:w-auto"
            asChild
          >
            <a
              href={article}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-500 hover:text-blue-600 justify-center space-x-1"
            >
              <GrArticle />
              <span>Read the blog</span>
            </a>
          </Button>
        )}
      </div>
    </div>
  );
}

import {motion} from "framer-motion";
import { ExternalLink } from "lucide-react";

interface DocumentationLinkProps{
    index: number,
    icon: string,
    title: string,
    description: string,
    url: string,
}

const DocumentationLink = ( { index, icon, title, description, url } :DocumentationLinkProps) => {

    return (
        <motion.a
            href={url}
            target="_blank"
            rel="noopener noreferer"
            initial={{}}
            whileInView={{}}
            viewport={{}}
            transition={{}}
            whileHover={{}}
            className="flex items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-200 group"
        >
            <div className="text-2xl mr-4">{icon}</div>
            <div className="flex-1">
                <h4 className="font-semibold text-gray-800 dark:text-white group-hover">
                    {title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300"
                >{description}</p>
            </div>
            <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"/>
        </motion.a>
    )
};

export default DocumentationLink;
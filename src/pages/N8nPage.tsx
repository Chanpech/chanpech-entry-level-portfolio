
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { BiArrowBack } from "react-icons/bi";
import ServiceBadge from "../components/ServiceBadge";
import DocumentationLink from "../components/DocumentationLink";
import { ArrowLeft, Zap, Database } from "lucide-react";
import HardwareCard from "@/components/hardwareCard/HardwareCardV4";
import BlogPost  from "@/components/blogCard/BlogPostV2";

const documentationLinks = [
    {
        title: "N8n Official Documentation",
        description: "Comprehensive guide to building automation workflows",
        url: "https://docs.n8n.io/",
        icon: "📚",
    },
    {
        title: "Ollama Setup Guide",
        description: "Local LLM deployment and configuration",
        url: "https://ollama.ai/",
        icon: "🦙",
    },
    {
        title: "Docker Compose Configuration",
        description: "Container orchestration for the entire stack",
        url: "https://docs.docker.com/compose/",
        icon: "🐳",
    },
    {
        title: "Google Cloud Integration",
        description: "Cloud services and API integration patterns",
        url: "https://cloud.google.com/docs",
        icon: "☁️",
    },
    {
        title: "Llama 3.2 Model Guide",
        description: "Understanding and optimizing the AI model",
        url: "https://llama.meta.com/",
        icon: "🤖",
    },
];

const buildJourney = [
  {
    title: "Setting Up the Local Environment",
    date: "Week 1 - July 2025",
    content:
      "Started by containerizing N8n using Docker and setting up the initial workflow environment. " +
      "Configured Ollama for local LLM inference and established the foundational automation framework. " +
      "Downloaded a powerful yet lightweight model, such as LLaMA 3.2 (3B). Feel free to experiment with different models and share your recommendations with the community for the most reliable and efficient options.",
    image: "/containerized.png?height=400&width=400",
    tags: ["Docker", "Setup", "Infrastructure"],
  },
  {
    title: "Setting Up Google Cloud Console",
    date: "Week 2 - July 2025",
    content:
      "In Google Cloud Console, start by configuring your OAuth consent screen under APIs & Services. " +
      "Next, navigate to the Library and enable the following services: Google Sheets API, Google Tasks API, Google Calendar API, Google Drive API, and Gmail API. " +
      "For each service, be sure to save the generated Client ID and Client Secret, which can be found under APIs & Services > Credentials.",
    image: "/cloudtolocal.png?height=200&width=400",
    tags: ["Google Cloud", "API Setup", "Integration"],
  },
  {
    title: "Integrating with N8n",
    date: "Week 3 - July 2025",
    content:
      "To integrate everything with N8n, begin by creating a simple AI Agent as shown in the reference image. " +
      "For Google services, you'll need to input the Client ID and Client Secret you saved earlier. " +
      "For Ollama, since N8n is running in a Docker container, use `http://host.docker.internal:11434` as the connection URL. If you're running locally without Docker, use `http://127.0.0.1:11434` instead.",
    image: "/N8nWorkFlow.png?height=200&width=400",
    tags: ["AI", "LLaMA", "Integration"],
  }
];


const hardwareStack = [
    {
        title: "Main Server",
        description: "Primary workstation running the N8n automation stack",
        specs: ["AMD Ryzen 5 3600", "16GB DDR4 RAM (3200 MHz)", "1TB NVMe SSD", "6GB NVIDIA Gefore GTX 1660 Super"],
        icon: "🖥️",
    },
];

const N8nPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-4 md:p-8">
            <div className="relative z-10 max-w-6xl mx-auto">
                {/* Hero Section */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-16 text-center"
                >
                    <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} transition={{ delay: 0.2 }} className="mb-6">
                        <div className="inline-flex items-center gap-3 bg-white dark:bg-gray-800 px-6 py-3 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 mb-6">
                            <Zap className="w-5 h-5 text-yellow-500" />
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">AI-Powered Automation (In Progress)</span>
                        </div>
                    </motion.div>
                    <h1 className="relative text-6xl md:text-7xl font-extrabold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text mb-6 px-1 py-2 leading-[1.15]">
                        N8n AI Agent Automation
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
                        A self-hosted ecosystem powered locally by your computer and Google Cloud Console, creating intelligent
                        workflows that adapt and learn from your data.
                    </p>
                </motion.section>

                {/* Hardware Showcase */}
                <section className="mb-20">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
                            Hardware Stack
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                            My computer specifications used for this AI automation project. Great for any model up to 3B.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8">
                        {hardwareStack.map((hardware, index) => (
                            <HardwareCard key={index} {...hardware} index={index} />
                        ))}
                    </div>
                </section>

                {/* Software Stack */}
                <section className="mb-16">
                    <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-6">
                        Software & Services
                    </h2>
                    <div className="flex flex-wrap gap-3">
                        <ServiceBadge name="Docker" color="blue" />
                        <ServiceBadge name="Ollama" color="purple" />
                        <ServiceBadge name="Git" color="orange" />
                        <ServiceBadge name="Google Cloud Console" color="blue" />
                        <ServiceBadge name="Llama3.2 " color="purple" />
                    </div>

                </section>


                {/* Build Journey */}
                <section className="">
                    <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-6">
                        Build Journey
                    </h2>
                    <p>Follow the step-by-step process of building this AI-powered automation ecosystem from concept to production.</p>
                    <div>
                        {buildJourney.map((post, index) => (
                            <BlogPost
                            key={index}
                            title={post.title}
                            date={post.date}
                            content={post.content}
                            image={post.image}
                            index={index}
                            />
                        ))}
                    </div>
                </section>

                {/* Supporting Documentation */}
                <section className="mb-5">
                    <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-6">
                        Supporting Documentation
                    </h2>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
                    >
                        <p className="text-gray-600 dark:text-gray-300 mb-6">
                            These resources helped me build and maintain my homelab.
                        </p>
                        <div>
                            {documentationLinks.map((link, index) => (
                                <DocumentationLink key={index} {...link} index={index} />
                            ))}
                        </div>
                    </motion.div>
                </section>

                {/* Back Button */}
                <section className="mb-16 flex justify-center">
                    <Button asChild>
                        <Link to="/">
                            <BiArrowBack />
                            Go Back
                        </Link>
                    </Button>
                </section>
            </div>
        </div>
    )
}

export default N8nPage;
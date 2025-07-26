import { BlogPost } from "@/components/blogCard/BlogPost";
import { motion } from "framer-motion";
import ServiceBadge from "@/components/ServiceBadge";
import HardwareCardV3 from "@/components/hardwareCard/HardwareCardV3";
import jbbakery from '../assets/JBBakery.png';

const buildJourney = [
    {
        title: "Proposal",
        date: "",
        content: `
            I proactively reached out to a small bakery business with a proposal aimed at boosting their online presence and increasing sales through greater digital visibility. The goal was to create a modern and engaging website that reflects the bakery’s brand and story.

            To demonstrate my vision, I developed a prototype using Figma. The design emphasized their passion for authentic New Zealand-style pies and highlighted the rich history behind the business. I also created a mock-up menu in Canva to showcase product offerings in a visually appealing way. The initial prototype featured clean UI elements, strong visual hierarchy, and web components designed to give a contemporary feel to the brand’s digital identity.
        `,
        image: "/memoji/TakeALook.PNG",
        animation: {
            initial: { opacity: 0, x: -50 },
            animate: { opacity: 1, x: 0, transition: { duration: 0.7 } }
        }
    },
    {
        title: "Development",
        date: "",
        content: `
            The website was built using a modern front-end tech stack: Next.js, TypeScript, and Tailwind CSS.

            I implemented a multi-page architecture using Next.js routing, making it easy to scale and manage different sections like the homepage, menu, and contact. For an improved user experience, I added subtle animations with Framer Motion to bring life to key interactions—such as hover effects on menu items and animated transitions in the hero and featured sweets sections.

            To localize the customer experience, I integrated Leaflet.js to embed a dynamic map showing the location of the bakery’s estate. As part of performance optimization and SEO best practices, I implemented image preloading and page prefetching to reduce load times and enhance responsiveness across devices.
        `,
        image: "/memoji/Questioned.PNG",
        animation: {
            initial: { opacity: 0, x: -50 },
            animate: { opacity: 1, x: 0, transition: { duration: 0.7 } }
        }
    },
    {
        title: "Launch",
        date: "",
        content: `
            After thorough testing and client feedback, the website was deployed via Vercel for optimal performance and seamless CI/CD.

            I configured environment settings for production, optimized static assets, and ensured compatibility across browsers and devices. The final site reflected the bakery’s identity, from visual storytelling to product accessibility. I also provided the client with a short training session on how to request updates or add new items.
        `,
        image: "/memoji/TakeALook.PNG",
        animation: {
            initial: { opacity: 0, x: -50 },
            animate: { opacity: 1, x: 0, transition: { duration: 0.7 } }
        }
    },
    {
        title: "Maintenance",
        date: "Present",
        content: `
            Post-launch, the client retained me to continue maintaining and improving their site.

            I implemented several backend integrations to support marketing and performance tracking:
            - Google Analytics
            - Vercel Analytics
            - Vercel Speed Insights

            Additionally, I acquired a custom domain from Namecheap and migrated the website under this new domain via Vercel. The old domain was configured to redirect properly. I also submitted the new domain to Google for indexing and updated the business location on Google Maps.

            Ongoing maintenance includes content updates, performance tuning, and strategic enhancements based on traffic data and user feedback.
        `,
        image: "/memoji/Waving.PNG",
        animation: {
            initial: { opacity: 0, x: -50 },
            animate: { opacity: 1, x: 0, transition: { duration: 0.7 } }
        }
    },
];
// Add this to your constants near buildJourney
const documentationResources = [
    {
        title: "Next.js Routing",
        url: "https://nextjs.org/docs/app/building-your-application/routing",
        category: "Framework",
        note: "Used for multi-page support and page prefetching."
    },
    {
        title: "Tailwind CSS",
        url: "https://tailwindcss.com/docs",
        category: "CSS Framework",
        note: "Used for styling with utility classes."
    },
    {
        title: "Framer Motion",
        url: "https://www.framer.com/motion/",
        category: "Animation Library",
        note: "Used for scroll animations and interactive transitions."
    },
    {
        title: "Leaflet.js",
        url: "https://leafletjs.com/",
        category: "Map Library",
        note: "Used to display bakery's estate location on a map."
    },
    {
        title: "Figma",
        url: "https://www.figma.com/",
        category: "UI/UX Design",
        note: "Used to prototype the initial layout and brand identity."
    },
    {
        title: "Canva",
        url: "https://www.canva.com/",
        category: "Design Tool",
        note: "Used for menu creation and visual mockups."
    },
    {
        title: "Vercel",
        url: "https://vercel.com/",
        category: "Deployment Platform",
        note: "Used for continuous deployment, analytics, and domain configuration."
    }
];


const SurfaceAndroid = () => {

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4 md:p-8">
            {/* Hero Section with enhanced animation */}
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-12 text-center"
            >
                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-4xl font-bold text-gray-800 dark:text-white mb-4"
                >
                    Jayden Brian Bakery
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
                >
                    Developed, deployed, and continue to maintain a website for a bakery business
                </motion.p>
            </motion.section>

            {/* Hardware Showcase */}
            <section className="mb-16">
                <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-6">See what's new with this app</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                        <HardwareCardV3
                            title={`New domain just launched!`}
                            role="www.jaydenbrianbakery.social"
                            specs={[
                                "Acquired through name.com",
                                "Managed and configured in Vercel's Domains",
                                "Redirected old domain to new domain",
                            ]}
                            date="March 28th"
                            image={jbbakery}
                        />
                    </div>
                </div>
            </section>

            {/* Software Stack with staggered animation */}
            <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
                className="mb-16"
            >
                <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-6">
                    Tech's Stack
                </h2>
                <div className="flex flex-wrap gap-3">
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                        <ServiceBadge name="NextJS" color="blue" />
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                        <ServiceBadge name="ReactJS" color="purple" />
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                        <ServiceBadge name="Typescript" color="orange" />
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                        <ServiceBadge name="TailwindCSS" color="blue" />
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                        <ServiceBadge name="Canva" color="purple" />
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
                        <ServiceBadge name="Figma" color="orange" />
                    </motion.div>
                </div>
            </motion.section>

            {/* Build Journey with enhanced animations */}
            <section className="mb-16">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-6"
                >
                    The Process
                </motion.h2>
                <div>
                    {buildJourney.map((post, index) => (
                        <motion.div
                            key={index}
                            initial={post.animation.initial}
                            whileInView={post.animation.animate}
                            viewport={{ once: true }}
                        >
                            <BlogPost
                                title={post.title}
                                date={post.date}
                                content={post.content}
                                image={post.image}
                                index={index}
                            />
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Supporting Documentation with enhanced animations */}
            <section className="mb-16">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-6"
                >
                    Resources & Components Used
                </motion.h2>

                <motion.div
                    className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
                >
                    <div className="space-y-4">
                        {documentationResources.map((doc, index) => (
                            <motion.div
                                key={index}
                                className="flex items-start gap-4 hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded-lg transition-colors"
                            >
                                <div className="flex-shrink-0 mt-1">
                                    <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                                    </svg>
                                </div>
                                <div>
                                    <a
                                        href={doc.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                                    >
                                        {doc.title}
                                    </a>
                                    <div className="flex items-center gap-2 mt-1">
                                        <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full">
                                            {doc.category}
                                        </span>
                                        {doc.note && (
                                            <span className="text-xs text-gray-500 dark:text-gray-400">
                                                {doc.note}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>

        </div>
    );
};

export default SurfaceAndroid;
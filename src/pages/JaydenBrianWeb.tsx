import { Link } from "react-router-dom";
import { BlogPost } from "@/components/BlogPost";
import { motion } from "framer-motion";
import ServiceBadge from "@/components/ServiceBadge";
import HardwareCardV2 from "@/components/HardwareCardV2";
import surfacepro from '../assets/surface-pro.webp';
import { Button } from "@/components/ui/button";
import { BiArrowBack } from "react-icons/bi";
import { useState } from "react";

const buildJourney = [
    {
        title: "The Research",
        date: "December 2024",
        content: `With Microsoft ending Windows 10 support for the Surface Pro 3 in October of 2025, the Surface Pro 3 could potentially faces other problems on top of its slow and nonresponsive UIs from the Microsoft's blaotware.
        Thus, I started digging into alternative OS, that will allows us to do the following:

            1. Optimal touchscreen features for drawing and notes taking
            2. OS must still be suppported or have a LTS
            3. Have a centralized app store

        Several threads and documentation showed that Android could be installed on the Surface Pro 3 with relatively good hardware compatibility. 
        The touchscreen, which is crucial for my intended use, was reported to work well with certain Android distributions.
        I spent weeks browsing forums, Reddit threads, and YouTube videos to find the most stable Android OS that would support pressure sensitivity for the stylus - a must-have feature for digital drawing.`,
        image: "/memoji/TakeALook.PNG", // Changed from Questioned to better match research phase
        animation: {
            initial: { opacity: 0, x: -50 },
            animate: { opacity: 1, x: 0, transition: { duration: 0.7 } }
        }
    },
    {
        title: "Hardware Acquisition",
        date: "January 2025",
        content: `With my research complete, I made a list of all the components I needed to transform my Surface Pro 3 into the perfect Android tablet:
    
        1. A compatible stylus with pressure sensitivity 
        2. A paper-like screen protector to improve the drawing experience - this was crucial to reduce the slippery glass feel when drawing
        3. A keyboard with trackpad for those times when I need more precise input
        
        Below are the parts which I have acquired with respect to my list: 
        Stylus:
        Screen Protector:
        Keyboard:
        `,
        image: "/memoji/HappySmile.PNG", // Kept the same as it fits well with acquisition phase
        animation: {
            initial: { opacity: 0, y: 50 },
            animate: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.2 } }
        }
    },
    {
        title: "Initial Setup",
        date: "March 2025",
        content: `While waiting for this to arrived, I began the technical process of experimenting with several OSs (Ubuntu Touch, PrimeOS, Andriod-x86) on my Surface Pro 3. 
        I found that BlissOS works best and suited the requirement that I initially listed. 
        
        A simple step to installing any of the mentioned O.S. on your device: 
        
        1. Created a bootable USB drive with the Android image
        
        2. Backed up any remaining important data from the Surface
        
        3. Modified the UEFI settings to allow booting from USB
        
        4. Installed Blissify OS following the community guide
        
        The installation wasn't without challenges - I had to troubleshoot driver issues for the touchscreen calibration and spent hours figuring out how to properly map the Surface buttons. 
        But seeing Android boot up for the first time on my old Surface was incredibly satisfying!`,
        image: "/memoji/Questioned.PNG", // Changed from TakeALook to show the problem-solving aspect
        animation: {
            initial: { opacity: 0, scale: 0.8 },
            animate: { opacity: 1, scale: 1, transition: { duration: 0.7, delay: 0.4 } }
        }
    },
    {
        title: "Current Status",
        date: "Present",
        content: `My Android-powered Surface Pro 3 has become my go-to device for note-taking and digital art. Here's what I've accomplished:
        
        • Favorite drawing apps: ibisPaintX, and Pixeilart
        • Favorite notes taking apps: OneNote, and Noteshelf3
        • Favorite reading apps: Kindle, and Libby
        • Set up Google Drive sync to backup my artwork and notes automatically
        • Optimized battery life by tweaking system settings (though I still can't get it to properly sleep)
        • Utilized Termux to run simple C and C++ codes (especially for running leetcodes)
        
        The only remaining issue is the sleep function - the device doesn't seem to properly enter sleep mode, which affects battery life. 
        Despite this limitation, I'm extremely happy with how this project turned out. What was once an obsolete device is now a dedicated creative tool that I use daily.`,
        image: "/memoji/Bye.PNG", // Kept as is since it works well for conclusion
        animation: {
            initial: { opacity: 0, rotate: 5 },
            animate: { opacity: 1, rotate: 0, transition: { duration: 0.7, delay: 0.6 } }
        }
    }
];

// Add this to your constants near buildJourney
const documentationResources = [
    {
        title: "Blissify OS",
        url: "https://blissos.org/index.html#download",
        category: "Andriod OS",
        note: "Recommended for this build, but be aware that the device may unable to go to sleep."
    },
    {
        title: "Andriodx84",
        url: "https://www.android-x86.org/download",
        category: "Andriod OS",
        note: "OS Option #2 "
    },
    {
        title: "Andriodx84",
        url: "https://chromeos.google/products/chromeos-flex/#osflex-signup",
        category: "Chrome OS",
        note: "OS Option #3 with end of support in 2026 "
    },
    {
        title: "Stylus Pen - Support pressure sensitivity",
        url: "http://aliexpress.us/item/3256805375123853.html?spm=a2g0o.productlist.main.1.7b6fz5Xrz5XrF4&algo_pvid=00680be2-310e-4ad3-80b3-73fcdd763496&algo_exp_id=00680be2-310e-4ad3-80b3-73fcdd763496-0&pdp_ext_f=%7B%22order%22%3A%222803%22%2C%22eval%22%3A%221%22%7D&pdp_npi=4%40dis%21USD%2135.58%218.58%21%21%21257.46%2162.08%21%402103244417436442477761174e301b%2112000034346695734%21sea%21US%210%21ABX&curPageLogUid=FrEzVajkAwlY&utparam-url=scene%3Asearch%7Cquery_from%3A",
        category: "Accessories"
    },
    {
        title: "Paper Like - Screen Protector",
        url: "https://www.aliexpress.us/item/3256805522441328.html?spm=a2g0o.productlist.main.3.11012236shZjFc&algo_pvid=6a79728b-7785-4c29-9aa2-06a712f39a66&algo_exp_id=6a79728b-7785-4c29-9aa2-06a712f39a66-1&pdp_ext_f=%7B%22order%22%3A%22239%22%2C%22eval%22%3A%221%22%7D&pdp_npi=4%40dis%21USD%213.91%210.99%21%21%213.91%210.99%21%402103247017436443988644942e0795%2112000034079194102%21sea%21US%210%21ABX&curPageLogUid=yt4ov9hbKgQk&utparam-url=scene%3Asearch%7Cquery_from%3A",
        category: "Accessories"
    },
    {
        title: "Keyboard + Trackpad (Support Bluetooth)",
        url: "https://www.aliexpress.us/item/3256805676615975.html?spm=a2g0o.productlist.main.1.44de240ez71n8j&algo_pvid=3300ac2f-caaf-4bd8-aaf6-e1bce3b87b2e&algo_exp_id=3300ac2f-caaf-4bd8-aaf6-e1bce3b87b2e-0&pdp_ext_f=%7B%22order%22%3A%221435%22%2C%22eval%22%3A%221%22%7D&pdp_npi=4%40dis%21USD%2161.92%2123.08%21%21%21448.05%21167.01%21%402103244617436445821032719e1a36%2112000034647101136%21sea%21US%210%21ABX&curPageLogUid=ZoRrzpRaIeaC&utparam-url=scene%3Asearch%7Cquery_from%3A",
        category: "Accessories"
    },
];

// Updated animation for the documentation resources section
const documentationAnimation = {
    initial: { opacity: 0, y: 20 },
    whileInView: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            staggerChildren: 0.1
        }
    },
    viewport: { once: true }
};


const SurfaceAndroid = () => {
    const [isHovering, setIsHovering] = useState(false)

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
                    Surface Pro 3 Reborn with Android!
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
                >
                    Transforming an old tablet into a powerful drawing and note-taking device
                </motion.p>
            </motion.section>

            {/* Hardware Showcase */}
            <section className="mb-16">
                <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-6">The Hardware</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)} className="relative">
                        <HardwareCardV2
                            title="Surface Pro 3"
                            role="Android Tablet"
                            specs={[
                                "Intel Core i5",
                                "4GB RAM",
                                "128GB SSD",
                                "12-inch 2160x1440 touchscreen",
                                "Running Blissify OS (Android)",
                            ]}
                            image={surfacepro}
                        />
                    </div>
                    <div className="flex items-start h-full">
                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            animate={{
                                opacity: isHovering ? 1 : 0,
                                x: isHovering ? 0 : -100,
                                scale: isHovering ? 1 : 0.95,
                            }}
                            transition={{
                                duration: 0.5,
                                ease: [0.25, 1, 0.5, 1], // Custom easing for a spring-like effect
                            }}
                            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-5 overflow-hidden w-fit max-w-full origin-left"
                        >
                            <motion.div
                                animate={{
                                    opacity: isHovering ? 1 : 0,
                                    x: isHovering ? 0 : -20,
                                }}
                                transition={{
                                    duration: 0.4,
                                    delay: isHovering ? 0.1 : 0,
                                }}
                            >
                                <h3 className="text-xl font-semibold mb-3">Why This Project?</h3>
                                <p className="text-gray-600 dark:text-gray-300 text-sm">
                                    Instead of letting old tech go to waste, this project gives new life to a Surface Pro 3 by
                                    transforming it into a specialized drawing and note-taking device. Android offers better touch
                                    optimization and a wider range of creative apps than the aging Windows installation it replaced.
                                </p>
                            </motion.div>
                        </motion.div>
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
                    Apps & Software
                </h2>
                <div className="flex flex-wrap gap-3">
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                        <ServiceBadge name="Blissify OS" color="blue" />
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                        <ServiceBadge name="Concepts" color="purple" />
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                        <ServiceBadge name="Infinite Painter" color="orange" />
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                        <ServiceBadge name="Sketchbook" color="blue" />
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                        <ServiceBadge name="Google Keep" color="purple" />
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
                        <ServiceBadge name="Nova Launcher" color="orange" />
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
                    The Build Journey
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
                    initial={documentationAnimation.initial}
                    whileInView={documentationAnimation.whileInView}
                    viewport={documentationAnimation.viewport}
                    className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
                >
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                        These are the key resources and components that made this conversion possible.
                    </p>

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

            {/* Final results section - new addition */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="mb-16"
            >
                <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-6">
                    Final Results
                </h2>
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-semibold mb-4">What Worked Well</h3>
                    <ul className="list-disc list-inside mb-6 space-y-2 text-gray-600 dark:text-gray-300">
                        <li>Touchscreen responsiveness with the new stylus is excellent</li>
                        <li>Paper-like screen protector provides a natural drawing feel</li>
                        <li>Battery life is decent for drawing sessions (3-4 hours)</li>
                        <li>Android drawing apps provide more features than expected</li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-4">Remaining Challenges</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                        <li>Sleep mode issues affect standby battery life</li>
                        <li>Occasional touch calibration drift requires a restart</li>
                        <li>Some Android apps don't scale perfectly to the 3:2 aspect ratio</li>
                    </ul>
                </div>
            </motion.section>

            {/* Back Button with subtle animation */}
            <section className="mb-8 flex justify-center">
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Button asChild>
                        <Link to="/">
                            <BiArrowBack className="mr-2" />
                            Back to Projects
                        </Link>
                    </Button>
                </motion.div>
            </section>
        </div>
    );
};

export default SurfaceAndroid;
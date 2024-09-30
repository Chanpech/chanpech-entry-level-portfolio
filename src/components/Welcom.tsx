import { useState, useEffect } from 'react' 
import { motion, AnimatePresence } from 'framer-motion'

const messages = [
    "Hello, I'm Chanpech",
    "I'm a full-stack developer!",
    "Actively seeking to understand and master new frameworks!"
]

export default function Welcome() {
    const [currentIndex, setCurrentIndex] = useState(0);
    
    useEffect(()=> {
        const interval = setInterval (() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1 ) % messages.length)
        }, 3000)
        return () => clearInterval(interval)
    },[])

    return(
        <section id='welcome'>
            <div className='relative h-screen flex items-center justify-center overflow-hidden'>
                {/* Backdrop here */}
                <div className='absolute inset-0 bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 animate-gradient-x'> </div>

                {/* Animated circles */}
                <motion.div 
                    className='absolute w-64 h-64 bg-white rounded-full opacity-10'
                    animate={{
                        scale: [1,2,2,1,1],
                        rotate:[0,0,270,270,0],
                        borderRadius:["20%", "20%", "50%", "50%", "20%"],
                    }}
                    transition={{
                        duration: 18,
                        ease: "easeInOut",
                        times: [0, 0.2, 0.5, 0.8, 1],
                        repeat: Infinity,
                        repeatDelay:1
                    }}
                />
                <motion.div 
                    className='absolute w-72 h-72 bg-white rounded-full opacity-10'
                    animate={{
                        scale:[1,2,2,1,1],
                        rotate:[270, 270, 0,0, 270],
                        borderRadius:["50%", "50%", "20%", "20%", "50%"],
                    }}
                    transition={{
                        duration:18,
                        ease: "easeInOut",
                        times: [0, 0.2, 0.5, 0.8, 1],
                        repeat: Infinity,
                        repeatDelay: 1
                    }}
                />
                <div className='relative z-10 text-white text-center'>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, y: 20}}
                            animate={{ opacity: 1, y: 0}}
                            exit={{ opacity: 0, y: -20}}
                            transition={{ duration: 0.5}}
                            className='text-4xl md:text-6xl font-bold-mb-4'
                        >
                            {messages[currentIndex]}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
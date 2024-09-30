import  {useState, useEffect} from 'react';
import { motion, AnimatePresence } from "framer-motion";
import Welcome from "./Welcom";
import Introduction from "./Introduction";

export default function WelcomeIntroContainer(){
    const [showIntroduction, setShowIntroduction] = useState(false);


    useEffect(() => {
        const timer = setTimeout(() => {
            setShowIntroduction(true)
        }, 9000) //Show introduction after 9 seconds (3 cycles of Welcome messages)
        return () => clearTimeout(timer)
    }, [])

    useEffect(() => {
        const handleScroll = () =>{
            if( window.scrollY > window.innerHeight / 2){
                setShowIntroduction(true)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className='relative'>
            <AnimatePresence>
                {!showIntroduction && (
                    <motion.div
                        initial={{ opacity: 1}}
                        exit={{ opacity: 0}}
                        transition={{ duration: 1}}
                    >
                        <Welcome />
                    </motion.div>
                )}
            </AnimatePresence>
            <motion.div 
                initial={{ opacity: 0}}
                animate={{ opacity: showIntroduction ? 1 : 0 }}
                transition={{ duration: 1}}
            >
                <Introduction />
            </motion.div>
            {!showIntroduction && (
                <motion.div
                    className='absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-center'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 7, duration:1 }}
                >
                    <p className='text-lg mb-2'>Scroll down to learn more!</p>
                    <motion.div
                        className="w-6 h-10 border-2 border-white rounded-full mx-auto"
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                        <motion.div 
                           className="w-1 h-2 bg-white rounded-full mx-auto mt-2"
                           animate={{ y: [0, 16, 0] }}
                           transition={{ repeat: Infinity, duration: 1.5 }}
                        />
                    </motion.div>
                </motion.div>
            )}
        </div>
    );
}
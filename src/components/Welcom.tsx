"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const messages = [
    "Hello, I'm Peck",
    "I'm a full-stack developer!",
    "Actively seeking to understand and master new frameworks!",
    "I create pixel art & code!",
]

const skills = [
    { name: "React", color: "bg-blue-500" },
    { name: "Next.js", color: "bg-gray-800" },
    { name: "TypeScript", color: "bg-blue-600" },
    { name: "Pixel Art", color: "bg-pink-500" },
    { name: "Aseprite", color: "bg-purple-500" },
]

export default function Welcome() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length)
        }, 3500)
        return () => clearInterval(interval)
    }, [])

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY })
        }
        window.addEventListener("mousemove", handleMouseMove)
        return () => window.removeEventListener("mousemove", handleMouseMove)
    }, [])

    return (
        <section id="welcome" className="relative">
            <div className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-900">
                {/* Enhanced gradient backdrop */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
                    <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-transparent to-yellow-500/20 animate-pulse" />
                </div>

                {/* Floating particles */}
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full opacity-60"
                        animate={{
                            x: [0, Math.random() * 100 - 50],
                            y: [0, Math.random() * 100 - 50],
                            opacity: [0.6, 0.1, 0.6],
                        }}
                        transition={{
                            duration: Math.random() * 3 + 2,
                            repeat: Number.POSITIVE_INFINITY,
                            repeatType: "reverse",
                        }}
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                    />
                ))}

                {/* Interactive cursor follower */}
                <motion.div
                    className="absolute w-32 h-32 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-full blur-xl pointer-events-none"
                    animate={{
                        x: mousePosition.x - 64,
                        y: mousePosition.y - 64,
                    }}
                    transition={{ type: "spring", stiffness: 50, damping: 10 }}
                />

                {/* Enhanced animated shapes */}
                <motion.div
                    className="absolute w-80 h-80 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full"
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 180, 360],
                        borderRadius: ["50%", "30%", "50%"],
                    }}
                    transition={{
                        duration: 20,
                        ease: "easeInOut",
                        repeat: Number.POSITIVE_INFINITY,
                    }}
                />

                <motion.div
                    className="absolute w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full"
                    animate={{
                        scale: [1.2, 1, 1.2],
                        rotate: [360, 180, 0],
                        borderRadius: ["30%", "50%", "30%"],
                    }}
                    transition={{
                        duration: 25,
                        ease: "easeInOut",
                        repeat: Number.POSITIVE_INFINITY,
                    }}
                />

                {/* Main content container */}
                <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
                    {/* Sprite showcase area */}
                    <div className="flex justify-center items-center mb-8 space-x-8">
                        {/* Left sprite placeholder */}
                        <motion.div
                            className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg shadow-lg border-2 border-white/20"
                            animate={{
                                y: [0, -10, 0],
                                rotateY: [0, 10, 0],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut",
                            }}
                        >
                            <img
                                src="/sprites/SideWalk.gif"
                                alt="Sprite walk animation"
                                className="w-full h-full object-contain"
                            />
                        </motion.div>

                        {/* Center character sprite */}
                        <motion.div
                            className="w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl shadow-xl border-2 border-white/30"
                            animate={{
                                scale: [1, 1.05, 1],
                                rotateZ: [0, 2, -2, 0],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut",
                            }}
                        >
                           <img
                                src="/sprites/DokkaebiAnimation.gif"
                                alt="Sprite walk animation"
                                className="w-full h-full object-contain"
                            />
                        </motion.div>

                        {/* Right sprite placeholder */}
                        <motion.div
                            className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg shadow-lg border-2 border-white/20"
                            animate={{
                                y: [0, -10, 0],
                                rotateY: [0, -10, 0],
                            }}
                            transition={{
                                duration: 2.5,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut",
                            }}
                        >
                            <img
                                src="/sprites/SupraAnimation.gif"
                                alt="Sprite walk animation"
                                className="w-full h-full object-contain"
                            />
                        </motion.div>
                    </div>

                    {/* Enhanced text animation */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, y: 30, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -30, scale: 0.9 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="text-4xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent"
                        >
                            {messages[currentIndex]}
                        </motion.div>
                    </AnimatePresence>

                    {/* Skills showcase */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="flex flex-wrap justify-center gap-3 mb-8"
                    >
                        {skills.map((skill, index) => (
                            <motion.div
                                key={skill.name}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                                whileHover={{ scale: 1.1, y: -2 }}
                                className={`px-4 py-2 ${skill.color} text-white rounded-full text-sm font-semibold shadow-lg border border-white/20`}
                            >
                                {skill.name}
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Pixel art inspired decorative elements */}
                    <div className="flex justify-center space-x-4 mt-8">
                        {[...Array(5)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="w-3 h-3 bg-cyan-400 rounded-sm"
                                animate={{
                                    opacity: [0.3, 1, 0.3],
                                    scale: [1, 1.2, 1],
                                }}
                                transition={{
                                    duration: 1.5,
                                    delay: i * 0.2,
                                    repeat: Number.POSITIVE_INFINITY,
                                }}
                            />
                        ))}
                    </div>

                    {/* Call to action */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2, duration: 0.8 }}
                        className="mt-12"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0,0,0,0.3)" }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold rounded-full shadow-xl border border-white/20 hover:from-cyan-400 hover:to-purple-400 transition-all duration-300"
                        >
                            Loading my work...
                        </motion.button>
                    </motion.div>
                </div>

                {/* Corner decorative elements */}
                <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-cyan-400 opacity-60" />
                <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-purple-400 opacity-60" />
                <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-pink-400 opacity-60" />
                <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-yellow-400 opacity-60" />
            </div>
        </section>
    )
}

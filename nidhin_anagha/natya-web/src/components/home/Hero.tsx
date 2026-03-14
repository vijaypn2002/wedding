'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
    return (
        <section className="relative min-h-screen bg-[#faf9f6] flex flex-col lg:flex-row items-stretch overflow-hidden">
            
            {/* MOBILE HERO (VISIBLE ONLY ON MOBILE) */}
            <div className="lg:hidden flex flex-col w-full min-h-screen relative bg-white">
                {/* Image Section (Color) */}
                <motion.div 
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5 }}
                    className="relative w-full h-[55vh] overflow-hidden"
                >
                    <Image
                        src="/img/real_image.jpeg"
                        alt="Nidhin & Anagha"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent" />
                </motion.div>

                {/* Text Content */}
                <div className="flex-1 flex flex-col items-center justify-start -mt-16 px-6 relative z-10 text-center pb-20">
                    <motion.div 
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        className="mb-6 flex flex-col items-center gap-2"
                    >
                        <div className="w-10 h-10 rounded-full border border-natya-gold/20 flex items-center justify-center text-natya-gold text-[10px] font-serif bg-white shadow-sm">
                            N&A
                        </div>
                        <span className="text-natya-gold text-[8px] font-bold uppercase tracking-[0.5em]">The Union</span>
                    </motion.div>

                    <div className="relative mb-12">
                        <motion.h1 
                            initial={{ x: -20, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="text-6xl font-serif font-bold text-gray-900 leading-none tracking-tighter"
                        >
                            Nidhin
                        </motion.h1>
                        <motion.div 
                            initial={{ scale: 0, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 0.15 }}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl font-serif italic text-natya-gold"
                        >
                            &
                        </motion.div>
                        <motion.h1 
                            initial={{ x: 20, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="text-6xl font-serif font-bold text-gray-900 leading-none tracking-tighter mt-2"
                        >
                            Anagha
                        </motion.h1>
                    </div>

                    <motion.div 
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="space-y-6"
                    >
                        <div className="space-y-1">
                            <p className="text-gray-900 font-serif italic text-2xl">April 06, 2026</p>
                            <p className="text-gray-400 text-[9px] uppercase tracking-[0.3em]">Makkyad, Wayanad</p>
                        </div>

                        <div className="flex gap-4 pt-4">
                            <Link href="#about">
                                <button className="px-8 py-4 bg-gray-900 text-white font-bold text-[9px] uppercase tracking-[0.3em] rounded-sm shadow-xl">
                                    The Story
                                </button>
                            </Link>
                            <Link href="#map">
                                <button className="px-8 py-4 border border-gray-200 text-gray-400 font-bold text-[9px] uppercase tracking-[0.3em] rounded-sm">
                                    The Venue
                                </button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* DESKTOP HERO (Gold Accents & Color Image) */}
            <div className="hidden lg:flex flex-row w-full min-h-screen">
                <div className="w-[45%] flex flex-col justify-center px-12 md:px-24 bg-white relative z-20 overflow-hidden">
                    <span className="absolute top-1/2 left-0 -translate-y-1/2 text-[35vw] font-serif font-bold text-gray-50/80 pointer-events-none select-none z-0 tracking-tighter">
                        N&A
                    </span>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5 }}
                        className="relative z-10 w-full max-w-lg"
                    >
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3, duration: 1 }}
                            className="mb-12 flex items-center gap-4"
                        >
                            <div className="w-8 h-[1px] bg-natya-gold/40" />
                            <span className="text-natya-gold text-[9px] font-bold uppercase tracking-[0.5em]">
                                Our Eternal Journey
                            </span>
                        </motion.div>

                        <div className="relative mb-20">
                            <motion.h1 
                                initial={{ opacity: 0, x: -30, filter: "blur(10px)" }}
                                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                                transition={{ delay: 0.6, duration: 1 }}
                                className="text-7xl md:text-8xl xl:text-[120px] font-serif font-bold text-gray-900 leading-none tracking-tighter"
                            >
                                Nidhin
                            </motion.h1>
                            
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 0.15, scale: 1 }}
                                transition={{ delay: 0.9 }}
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[180px] font-serif italic text-natya-gold pointer-events-none"
                            >
                                &
                            </motion.div>

                            <motion.h1 
                                initial={{ opacity: 0, x: 30, filter: "blur(10px)" }}
                                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                                transition={{ delay: 0.8, duration: 1 }}
                                className="text-7xl md:text-8xl xl:text-[120px] font-serif font-bold text-gray-900 leading-none tracking-tighter text-right mt-4"
                            >
                                Anagha
                            </motion.h1>
                        </div>

                        <div className="flex items-center gap-8">
                            <div className="space-y-1">
                                <p className="text-gray-900 font-serif italic text-3xl">April 06, 2026</p>
                                <p className="text-gray-400 text-[10px] uppercase tracking-[0.3em]">Monday Morning</p>
                            </div>
                            <div className="w-[1px] h-12 bg-gray-100" />
                            <div className="space-y-1">
                                <p className="text-gray-900 font-serif italic text-3xl">Makkyad</p>
                                <p className="text-gray-400 text-[10px] uppercase tracking-[0.3em]">Wayanad, Kerala</p>
                            </div>
                        </div>

                        <div className="flex gap-6 mt-12">
                            <Link href="#about">
                                <button className="px-12 py-5 bg-gray-900 text-white font-bold text-[10px] uppercase tracking-[0.4em] hover:bg-natya-gold transition-all duration-500 rounded-sm">
                                    Our Story
                                </button>
                            </Link>
                            <Link href="#map">
                                <button className="px-12 py-5 border border-gray-200 text-gray-400 font-bold text-[10px] uppercase tracking-[0.4em] hover:border-gray-900 hover:text-gray-900 transition-all duration-500 rounded-sm">
                                    The Venue
                                </button>
                            </Link>
                        </div>
                    </motion.div>
                </div>

                {/* RIGHT SIDE (Color Image) */}
                <div className="w-[55%] relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 2 }}
                        className="absolute inset-0"
                    >
                        <Image
                            src="/img/real_image.jpeg"
                            alt="Nidhin & Anagha"
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent" />
                    </motion.div>

                    <div className="absolute bottom-12 right-12 flex flex-col items-center gap-4">
                        <span className="text-[10px] uppercase tracking-[0.6em] text-white/50 mix-blend-difference [writing-mode:vertical-lr] rotate-180">Scroll to Explore</span>
                        <div className="w-[1px] h-24 bg-gradient-to-b from-white to-transparent opacity-30" />
                    </div>
                </div>
            </div>
        </section>
    );
}

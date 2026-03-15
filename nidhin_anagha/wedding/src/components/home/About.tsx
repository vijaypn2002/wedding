'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function About() {
    return (
        <section id="about" className="py-40 bg-[#fffcf9] overflow-hidden relative border-t border-gray-50">
            {/* Artistic Gold Watermark */}
            <div className="absolute top-0 right-0 p-20 opacity-5 pointer-events-none select-none">
                <span className="text-[20vw] font-serif italic text-natya-gold">Union</span>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-24 lg:gap-32">

                    {/* Image Presentation - Grayscale Couture (As requested) */}
                    <div className="w-full lg:w-1/2 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, ease: [0.33, 1, 0.68, 1] }}
                            className="relative aspect-[4/5] rounded-sm overflow-hidden shadow-2xl border-[15px] border-white ring-1 ring-black/5 z-20 grayscale"
                        >
                            <Image
                                 src="/img/real_image.jpeg"
                                 alt="Nidhin & Anagha"
                                 fill
                                 className="object-cover"
                             />
                        </motion.div>
                        <div className="absolute -top-10 -left-10 w-64 h-64 bg-natya-gold/5 rounded-full -z-10 blur-3xl animate-pulse" />
                        <div className="absolute -bottom-8 -right-8 w-40 h-40 border-r border-b border-natya-gold/20 -z-10" />
                    </div>

                    {/* Story Content */}
                    <div className="w-full lg:w-1/2 space-y-12">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="space-y-8"
                        >
                            <div className="space-y-4">
                                <span className="text-natya-gold text-[10px] font-bold tracking-[0.6em] uppercase block">
                                    Our Eternal Promise
                                </span>
                                <h2 className="text-5xl md:text-7xl font-serif font-bold text-gray-900 leading-[0.9] tracking-tighter">
                                    A Journey Built <br /> 
                                    <span className="italic text-natya-gold font-light">on Pure Love</span>
                                </h2>
                            </div>

                            <div className="w-12 h-[1px] bg-natya-gold/40" />

                            <div className="space-y-6">
                                <p className="text-gray-500 font-light text-xl leading-relaxed italic">
                                    "When we found each other, we found the missing piece of our hearts. Today, we step forward to weave our lives into one beautiful story."
                                </p>
                                <p className="text-gray-400 font-light text-lg leading-relaxed">
                                    We are delighted to invite you to celebrate the beginning of our new chapter. Your presence and blessings mean the world to us as we exchange our vows and embark on this beautiful adventure together at Makkyad.
                                </p>
                            </div>

                            {/* Details Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 pt-4">
                                <div className="space-y-3">
                                    <h4 className="text-3xl font-serif font-bold text-gray-900">April 06</h4>
                                    <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold border-t border-gray-100 pt-3">Monday Ceremony</p>
                                </div>
                                <div className="space-y-3">
                                    <h4 className="text-3xl font-serif font-bold text-gray-900">Makkyad</h4>
                                    <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold border-t border-gray-100 pt-3">Wayanad, Kerala</p>
                                </div>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="pt-8"
                            >
                                <Link href="#programs">
                                    <button className="px-14 py-6 bg-gray-900 text-white font-bold uppercase tracking-[0.4em] text-[10px] rounded-sm hover:bg-natya-gold transition-all duration-500 shadow-xl">
                                        The Schedule
                                    </button>
                                </Link>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}

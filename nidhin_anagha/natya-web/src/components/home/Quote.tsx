'use client';

import { motion } from 'framer-motion';

export default function Quote() {
    return (
        <section className="py-24 bg-white text-center">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="max-w-4xl mx-auto space-y-8"
                >
                    <div className="text-natya-gold mb-4">
                        <svg className="w-12 h-12 mx-auto animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C15.4647 8 15.017 8.44772 15.017 9V12C15.017 12.5523 14.5693 13 14.017 13H13.017V21H14.017ZM6.017 21L6.017 18C6.017 16.8954 6.91243 16 8.017 16H11.017C11.5693 16 12.017 15.5523 12.017 15V9C12.017 8.44772 11.5693 8 11.017 8H8.017C7.46472 8 7.017 8.44772 7.017 9V12C7.017 12.5523 6.56929 13 6.017 13H5.017V21H6.017Z" />
                        </svg>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-serif font-light italic text-gray-800 leading-relaxed">
                        "Loved you yesterday, love you still, always have, always will."
                    </h2>
                    <div className="flex items-center justify-center gap-4 pt-4">
                        <div className="w-12 h-[1px] bg-natya-gold/30"></div>
                        <span className="text-natya-gold text-xs font-bold uppercase tracking-widest">– Nidhin & Anagha</span>
                        <div className="w-12 h-[1px] bg-natya-gold/30"></div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

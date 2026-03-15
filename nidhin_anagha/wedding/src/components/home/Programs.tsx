'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const events = [
    {
        time: "10:30 AM",
        title: "The Ceremony",
        description: "Witness the sacred union of Nidhin & Anagha as we exchange our vows and begin our journey of a thousand miles.",
        image: "/img/wedding/ceremony.png",
        align: "left"
    },
    {
        time: "12:30 PM",
        title: "Traditional Sadhya",
        description: "Savor the rich flavors of a traditional Kerala wedding feast, served with love and local traditions.",
        image: "/img/wedding/feast.png",
        align: "right"
    },
    {
        time: "02:30 PM",
        title: "The Reception",
        description: "An afternoon of joy, celebration, and heartfelt greetings as we embark on our path together.",
        image: "/img/wedding/reception.png",
        align: "left"
    }
];

export default function Programs() {
    return (
        <section id="programs" className="py-32 bg-white relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/natural-paper.png')` }} />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-32 space-y-4">
                    <motion.span 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-natya-gold text-[10px] font-bold uppercase tracking-[0.6em] block"
                    >
                        The Day's Journey
                    </motion.span>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-serif font-bold text-gray-900 tracking-tighter"
                    >
                        Schedule of <span className="italic font-light text-natya-gold">Events</span>
                    </motion.h2>
                    <div className="w-16 h-[1px] bg-natya-gold/30 mx-auto" />
                </div>

                <div className="max-w-6xl mx-auto space-y-40">
                    {events.map((event, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
                            className={`flex flex-col ${event.align === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-24`}
                        >
                            {/* Image Frame */}
                            <div className="w-full md:w-1/2 group">
                                <div className="relative aspect-[4/3] rounded-sm overflow-hidden border-[15px] border-white shadow-2xl ring-1 ring-black/5 transform transition-transform duration-700 group-hover:scale-[1.02]">
                                    <Image
                                        src={event.image}
                                        alt={event.title}
                                        fill
                                        className="object-cover transition-all duration-700"
                                    />
                                    <div className="absolute inset-x-0 bottom-0 bg-white/10 backdrop-blur-md h-0 group-hover:h-full transition-all duration-700 pointer-events-none opacity-0 group-hover:opacity-100" />
                                </div>
                            </div>

                            {/* Text Content */}
                            <div className={`w-full md:w-1/2 space-y-6 ${event.align === 'right' ? 'md:text-left' : 'md:text-left'}`}>
                                <div className="flex items-center gap-6">
                                    <span className="text-natya-gold font-serif italic text-3xl">{event.time}</span>
                                    <div className="flex-1 h-[1px] bg-natya-gold/10" />
                                </div>
                                <h3 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 leading-none">
                                    {event.title}
                                </h3>
                                <p className="text-gray-500 font-light text-xl leading-relaxed max-w-md">
                                    {event.description}
                                </p>
                                <div className="pt-4">
                                    <div className="w-8 h-8 rounded-full border border-natya-gold/20 flex items-center justify-center text-natya-gold text-[10px] font-bold italic">
                                        {index + 1}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

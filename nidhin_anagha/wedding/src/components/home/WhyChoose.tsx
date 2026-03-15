'use client';

import { motion } from 'framer-motion';
import { Heart, Sparkles, MessageCircleHeart, Infinity as InfinityIcon } from 'lucide-react';

const sentiments = [
    {
        title: "With Your Blessings",
        description: "Your presence is the most cherished gift we could ask for on this sacred day.",
        icon: Heart,
    },
    {
        title: "Traditional Roots",
        description: "A celebration honoring our deep cultural heritage and shared values.",
        icon: Sparkles,
    },
    {
        title: "Pure Celebration",
        description: "An afternoon dedicated to joy, laughter, and the beginning of forever.",
        icon: MessageCircleHeart,
    },
    {
        title: "Eternal Union",
        description: "Witnessing the beautiful promise of a lifetime spent in each other's arms.",
        icon: InfinityIcon,
    }
];

export default function WhyChoose() {
    return (
        <section id="why" className="py-40 bg-[#fffcf9] relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/natural-paper.png')` }} />

            <div className="container mx-auto px-10 relative z-10">
                <div className="text-center mb-32 space-y-4">
                    <motion.span 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-natya-gold text-[10px] font-bold uppercase tracking-[0.6em] block"
                    >
                        Our Journey Forward
                    </motion.span>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-serif font-bold text-gray-900 tracking-tighter"
                    >
                        The Heart of <span className="italic font-light text-natya-gold">Our Union</span>
                    </motion.h2>
                    <div className="w-16 h-[1px] bg-natya-gold/30 mx-auto" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto">
                    {sentiments.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.15, duration: 1 }}
                            className="group flex flex-col items-center text-center space-y-8"
                        >
                            {/* Icon Frame */}
                            <div className="relative">
                                <div className="w-20 h-20 rounded-full border border-natya-gold/10 flex items-center justify-center bg-white shadow-xl transition-all duration-500 group-hover:bg-natya-gold group-hover:text-white">
                                    <item.icon size={28} className="text-natya-gold group-hover:text-white transition-colors duration-500" />
                                </div>
                                <div className="absolute inset-[-8px] border border-natya-gold/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-700" />
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-2xl font-serif font-bold text-gray-900 leading-tight">
                                    {item.title}
                                </h3>
                                <p className="text-gray-400 font-light leading-relaxed text-sm max-w-[200px] mx-auto">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
            
            {/* Elegant Floral Side Marker (Abstract) */}
            <div className="absolute right-0 bottom-1/2 translate-y-1/2 w-32 h-64 border-l border-y border-natya-gold/10 rounded-l-full pointer-events-none opacity-20" />
        </section>
    );
}

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
        <section id="why" className="py-48 bg-[#fafafa] relative overflow-hidden">
            
            {/* Abstract Decorative Shapes */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-natya-gold/5 rounded-full blur-[120px] -translate-y-1/2 -z-10" />
                <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-gray-100 rounded-full blur-[100px] -translate-y-1/2 -z-10" />
            </div>

            <div className="container mx-auto px-10 relative z-10">
                <div className="text-center mb-36 space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block"
                    >
                        <span className="text-natya-gold text-[10px] font-bold uppercase tracking-[0.8em] border-b border-natya-gold/20 pb-4">
                            Our Journey Forward
                        </span>
                    </motion.div>
                    
                    <motion.h2 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                        className="text-6xl md:text-9xl font-serif font-bold text-gray-900 tracking-tighter"
                    >
                        Foundation of <br />
                        <span className="text-luxury-gold italic">Our Life</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-8xl mx-auto">
                    {sentiments.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                            className="group relative"
                        >
                            {/* Card Background with Glassmorphism */}
                            <div className="absolute inset-0 bg-white/40 backdrop-blur-subtle border border-white/50 rounded-sm group-hover:bg-white group-hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] transition-all duration-700 -z-10" />
                            
                            <div className="p-12 flex flex-col items-center text-center space-y-10">
                                {/* Icon Interaction */}
                                <div className="relative">
                                    <div className="w-24 h-24 rounded-full border border-gray-100 flex items-center justify-center bg-white shadow-sm transition-all duration-700 group-hover:scale-110 group-hover:border-natya-gold/30">
                                        <item.icon size={32} strokeWidth={1.5} className="text-gray-900 group-hover:text-natya-gold transition-colors duration-700" />
                                    </div>
                                    <motion.div 
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                        className="absolute inset-[-12px] border border-dashed border-natya-gold/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                                    />
                                </div>

                                <div className="space-y-4">
                                    <h3 className="text-3xl font-serif font-bold text-gray-900 leading-tight">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-400 font-light leading-relaxed text-lg max-w-[240px]">
                                        {item.description}
                                    </p>
                                </div>

                                {/* Luxury Detail Line */}
                                <div className="w-0 h-[1px] bg-natya-gold/50 group-hover:w-16 transition-all duration-700" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
            
            {/* Elegance Marker */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center gap-4 opacity-20 rotate-90 origin-left ml-10">
                <div className="w-12 h-[1px] bg-natya-gold" />
                <span className="text-natya-gold text-[9px] uppercase tracking-[1em]">Our Path</span>
            </div>
        </section>
    );
}

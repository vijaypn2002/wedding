'use client';

import { motion } from 'framer-motion';
import { MapPin, Navigation } from 'lucide-react';

export default function MapSection() {
    return (
        <section id="map" className="py-48 bg-black relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

            <div className="container max-w-7xl mx-auto px-6 relative z-10">
                
                <div className="text-center mb-16 md:mb-32 space-y-6 md:space-y-8">
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-accent uppercase tracking-[0.5em] md:tracking-[0.8em] text-[8px] md:text-[10px]"
                    >
                        Directions
                    </motion.p>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-7xl lg:text-9xl font-serif text-white tracking-tighter"
                    >
                        The <span className="title-shimmer italic font-light">Destination</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-center max-w-6xl mx-auto">
                    {/* Map Frame with Glassmorphism */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5 }}
                        className="relative aspect-video md:aspect-square lg:aspect-video rounded-sm overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,1)] border border-white/10 group"
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15629.697410057032!2d75.9321566!3d11.6644026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba6734e3e3e3e3e%3A0x3e3e3e3e3e3e3e3e!2sMakkyad%2C%20Kerala!5e0!3m2!1sen!2sin!4v1710430000000!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(0.7) contrast(1.2)' }}
                            allowFullScreen
                            loading="lazy"
                        ></iframe>
                        <div className="absolute inset-0 pointer-events-none border-[10px] md:border-[15px] border-black/20" />
                    </motion.div>

                    <div className="space-y-8 md:space-y-12">
                        <div className="space-y-6 md:space-y-8">
                            <div className="flex items-start md:items-center gap-4 md:gap-6">
                                <div className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0 rounded-full glass-gold flex items-center justify-center text-accent">
                                    <MapPin size={20} className="md:w-6 md:h-6" />
                                </div>
                                <h3 className="text-2xl md:text-4xl font-serif text-white italic leading-tight">Makkiyad HOLY FACE auditorium, Wayanad</h3>
                            </div>
                            
                            <p className="text-gray-400 text-base md:text-xl font-light leading-relaxed">
                                Our reception is located in the scenic beauty of Wayanad. Follow the path to a night of celebration under the stars.
                            </p>
                        </div>

                        <div className="pt-10 flex flex-wrap gap-6">
                            <a 
                                href="https://www.google.com/maps/search/?api=1&query=Makkiyad+HOLY+FACE+auditorium+Wayanad"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative px-12 py-5 overflow-hidden border border-accent/40 rounded-sm inline-flex items-center gap-4"
                            >
                                <span className="relative z-10 text-accent group-hover:text-black text-[10px] font-bold uppercase tracking-widest transition-colors duration-500">
                                    Navigate Now
                                </span>
                                <Navigation size={14} className="relative z-10 text-accent group-hover:text-black transition-colors duration-500" />
                                <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                            </a>
                        </div>
                    </div>
                </div>

            </div>
            
            {/* Background Label Decor */}
            <div className="absolute -right-20 bottom-10 opacity-5 pointer-events-none select-none">
                <h3 className="text-[20vw] font-serif font-black text-white italic">WAYANAD</h3>
            </div>
        </section>
    );
}

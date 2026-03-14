'use client';

import { motion } from 'framer-motion';
import { MapPin, Navigation } from 'lucide-react';

export default function MapSection() {
    return (
        <section id="map" className="py-32 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16 space-y-4">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-natya-gold text-[10px] font-bold uppercase tracking-[0.6em] block"
                    >
                        The Destination
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="text-5xl md:text-7xl font-serif font-bold text-gray-900 tracking-tighter"
                    >
                        Makkyad, <span className="italic font-light text-natya-gold">Wayanad</span>
                    </motion.h2>
                    <div className="w-16 h-[1px] bg-natya-gold/30 mx-auto pt-4" />
                </div>

                <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: [0.33, 1, 0.68, 1] }}
                    className="max-w-6xl mx-auto"
                >
                    <div className="relative aspect-video md:aspect-[21/9] rounded-sm overflow-hidden shadow-2xl border-[12px] border-white ring-1 ring-black/5">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15629.697410057032!2d75.9321566!3d11.6644026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba6734e3e3e3e3e%3A0x3e3e3e3e3e3e3e3e!2sMakkyad%2C%20Kerala!5e0!3m2!1sen!2sin!4v1710430000000!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>

                    <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-8 px-10">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-natya-gold">
                                <MapPin size={20} />
                            </div>
                            <div className="text-left">
                                <p className="text-gray-900 font-serif text-lg font-bold">The Wedding Venue</p>
                                <p className="text-gray-400 text-sm font-light">Makyad, Wayanand, Kerala 670731</p>
                            </div>
                        </div>

                        <a 
                            href="https://www.google.com/maps/search/?api=1&query=Makkyad+Wayanad+Kerala" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-12 py-5 bg-gray-900 text-white font-bold uppercase tracking-widest text-[10px] rounded-sm hover:bg-natya-gold transition-all duration-300 shadow-xl"
                        >
                            <Navigation size={14} />
                            Open In Google Maps
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

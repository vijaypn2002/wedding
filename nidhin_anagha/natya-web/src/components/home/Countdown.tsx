'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

export default function Countdown() {
    const targetDate = new Date('2026-04-06T10:30:00').getTime();
    
    const [timeLeft, setTimeLeft] = useState<TimeLeft>({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance < 0) {
                clearInterval(interval);
                return;
            }

            setTimeLeft({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((distance % (1000 * 60)) / 1000)
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [targetDate]);

    return (
        <section className="relative py-32 bg-black overflow-hidden">
            {/* Banner Image Background */}
            <div className="absolute inset-0 opacity-40">
                <Image
                    src="/img/wedding/venue_neutral.png"
                    alt="Wedding Banner"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-black" />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center text-white">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    <span className="text-natya-gold text-xs font-bold uppercase tracking-[0.4em] block">
                        Counting Down To The Big Day
                    </span>
                    <h2 className="text-4xl md:text-6xl font-serif font-bold tracking-tight">
                        See You In
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-4xl mx-auto pt-10">
                        {Object.entries(timeLeft).map(([label, value], idx) => (
                            <div key={idx} className="space-y-2">
                                <motion.div 
                                    key={value}
                                    initial={{ scale: 1.1, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    className="text-5xl md:text-8xl font-serif font-bold text-natya-gold"
                                >
                                    {String(value).padStart(2, '0')}
                                </motion.div>
                                <div className="text-xs uppercase tracking-[0.2em] text-white/50 font-bold">
                                    {label}
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Particles() {
    const [particles, setParticles] = useState<any[]>([]);

    useEffect(() => {
        const p = Array.from({ length: 40 }).map((_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 2 + 1,
            duration: Math.random() * 10 + 20,
            delay: Math.random() * 5,
        }));
        setParticles(p);
    }, []);

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-[1]">
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    className="absolute rounded-full bg-accent/20 blur-[1px]"
                    style={{
                        left: `${p.x}%`,
                        top: `${p.y}%`,
                        width: p.size,
                        height: p.size,
                    }}
                    animate={{
                        y: [-20, 20, -20],
                        x: [-20, 20, -20],
                        opacity: [0, 0.4, 0],
                        scale: [1, 1.5, 1],
                    }}
                    transition={{
                        duration: p.duration,
                        repeat: Infinity,
                        delay: p.delay,
                        ease: "easeInOut",
                    }}
                />
            ))}
        </div>
    );
}

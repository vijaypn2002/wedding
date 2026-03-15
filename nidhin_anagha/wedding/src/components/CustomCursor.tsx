'use client';

import { motion, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function CustomCursor() {
    const [isHovered, setIsHovered] = useState(false);
    const [hidden, setHidden] = useState(true);

    const cursorX = useSpring(0, { damping: 20, stiffness: 200 });
    const cursorY = useSpring(0, { damping: 20, stiffness: 200 });

    const innerX = useSpring(0, { damping: 40, stiffness: 400 });
    const innerY = useSpring(0, { damping: 40, stiffness: 400 });

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
            innerX.set(e.clientX);
            innerY.set(e.clientY);
            if (hidden) setHidden(false);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const isClickable = target.tagName === 'A' || 
                               target.tagName === 'BUTTON' || 
                               target.closest('a') || 
                               target.closest('button') ||
                               target.getAttribute('role') === 'button';
            setIsHovered(!!isClickable);
        };

        const handleMouseLeave = () => setHidden(true);
        const handleMouseEnter = () => setHidden(false);

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mouseover', handleMouseOver);
        document.addEventListener('mouseleave', handleMouseLeave);
        document.addEventListener('mouseenter', handleMouseEnter);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseover', handleMouseOver);
            document.removeEventListener('mouseleave', handleMouseLeave);
            document.removeEventListener('mouseenter', handleMouseEnter);
        };
    }, [cursorX, cursorY, innerX, innerY, hidden]);

    return (
        <div className="fixed inset-0 pointer-events-none z-[9999] mix-blend-difference hidden md:block">
            {/* Main Precision Dot */}
            <motion.div
                style={{
                    translateX: innerX,
                    translateY: innerY,
                    left: -4,
                    top: -4,
                }}
                className="absolute w-2 h-2 bg-white rounded-full"
                animate={{
                    scale: isHovered ? 0.5 : 1,
                    opacity: hidden ? 0 : 1
                }}
            />
            
            {/* Outer Cinematic Ring */}
            <motion.div
                style={{
                    translateX: cursorX,
                    translateY: cursorY,
                    left: -20,
                    top: -20,
                }}
                className="absolute w-10 h-10 border border-white/30 rounded-full"
                animate={{
                    scale: isHovered ? 2 : 1,
                    opacity: hidden ? 0 : 1,
                    borderColor: isHovered ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.3)"
                }}
                transition={{ duration: 0.3 }}
            />

            {/* Trailing Flare */}
            {isHovered && (
                <motion.div
                    style={{
                        translateX: innerX,
                        translateY: innerY,
                        left: -40,
                        top: -40,
                    }}
                    className="absolute w-20 h-20 bg-accent/20 rounded-full blur-[30px]"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                />
            )}
        </div>
    );
}

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const MiningBackground = ({ particleCount = 20 }) => {
    const [particles, setParticles] = useState([]);

    useEffect(() => {
        const newParticles = Array.from({ length: particleCount }).map((_, i) => ({
            id: i,
            x: Math.random() * 100, // random percentage
            y: Math.random() * 100,
            size: Math.random() * 6 + 2, // size between 2 and 8px
            duration: Math.random() * 20 + 10, // slow movement
            delay: Math.random() * 5,
        }));
        setParticles(newParticles);
    }, [particleCount]);

    return (
        <div
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                overflow: 'hidden',
                zIndex: 0,
                pointerEvents: 'none',
            }}
        >
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    style={{
                        position: 'absolute',
                        left: `${p.x}%`,
                        top: `${p.y}%`,
                        width: p.size,
                        height: p.size,
                        borderRadius: '50%',
                        backgroundColor: 'rgba(243, 156, 18, 0.4)', // Accent color (orange) transparent
                        boxShadow: '0 0 10px rgba(243, 156, 18, 0.6)',
                    }}
                    animate={{
                        y: [0, -100, 0], // Float up and down slightly
                        x: [0, 50, -50, 0], // Float sideways
                        opacity: [0, 0.8, 0], // Fade in/out
                    }}
                    transition={{
                        duration: p.duration,
                        repeat: Infinity,
                        delay: p.delay,
                        ease: 'linear',
                    }}
                />
            ))}
            {/* Overlay gradient for atmosphere */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.3) 100%)',
                    zIndex: 1
                }}
            />
        </div>
    );
};

export default MiningBackground;

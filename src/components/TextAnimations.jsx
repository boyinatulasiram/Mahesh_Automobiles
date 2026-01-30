import React from 'react';
import { motion } from 'framer-motion';

// FadeContent: Reveals content with a blur and fade-up effect
export const FadeContent = ({ children, blur = true, duration = 1, delay = 0, yOffset = 20 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: yOffset, filter: blur ? 'blur(10px)' : 'none' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration, delay, ease: 'easeOut' }}
        >
            {children}
        </motion.div>
    );
};

// CircularText: Rotates text around a circle
export const CircularText = ({ text, radius = 70, fontSize = '1rem', letterSpacing = 5, color = '#fff' }) => {
    const characters = text.split('');
    const degree = 360 / characters.length;

    return (
        <motion.div
            className="circular-text-container"
            style={{
                width: radius * 2,
                height: radius * 2,
                position: 'relative',
                borderRadius: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: color,
                fontWeight: 'bold',
                textTransform: 'uppercase',
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 20, ease: 'linear', repeat: Infinity }}
        >
            {characters.map((char, i) => (
                <span
                    key={i}
                    style={{
                        position: 'absolute',
                        transform: `rotate(${i * degree}deg) translate(${radius}px) rotate(90deg)`,
                        transformOrigin: 'center',
                        fontSize: fontSize,
                        height: `${fontSize}`,
                        lineHeight: 1,
                    }}
                >
                    {char}
                </span>
            ))}
        </motion.div>
    );
};

// components/MotionDiv.tsx
import React from 'react';
import { motion } from 'framer-motion';

const MotionDiv = ({ children, direction = 'right' }) => {
    const variants = {
        hidden: { opacity: 0, x: direction === 'right' ? 50 : direction === 'left' ? 50 : 0, y: direction === 'bottom' ? 50 : 0 },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: { delay: 1.0, duration: 1 }
        }
    };

    return (
        <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
        >
            {children}
        </motion.div>
    );
};

export default MotionDiv;

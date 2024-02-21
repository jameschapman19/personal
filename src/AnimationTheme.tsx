import React, { ReactNode, useEffect, useRef, useState } from 'react';
import { motion, Variants } from 'framer-motion';

interface AnimationThemeProps {
    children: ReactNode | ReactNode[];
    variant: string;
}

const AnimationTheme: React.FC<AnimationThemeProps> = ({ children, variant }) => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.3, // Adjust this threshold as needed
            }
        );

        const currentRef = sectionRef.current; // Save the current ref value

        if (currentRef) {
            observer.observe(currentRef); // Observe the current ref value
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef); // Unobserve the current ref value
            }
        };
    }, []);

    const variants: Variants = {
        hiddenLeft: {
            opacity: 0,
            x: -50,
            y: 0,
        },
        hiddenRight: {
            opacity: 0,
            x: 50,
            y: 0,
        },
        hiddenUp: {
            opacity: 0,
            x: 0,
            y: -50,
        },
        hiddenDown: {
            opacity: 0,
            x: 0,
            y: 50,
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
        },
    };

    // Convert children to an array if it's a single child
    const childrenArray = Array.isArray(children) ? children : [children];

    return (
        <div ref={sectionRef}>
            {childrenArray.map((child, index) => (
                <motion.div
                    key={index}
                    initial={variant} // Initial state (hidden)
                    animate={isVisible ? 'visible' : variant} // Animate when visible
                    variants={variants}
                    transition={{ delay: index * 0.1 }} // Add a delay for cascade effect
                >
                    {child}
                </motion.div>
            ))}
        </div>
    );
};

export default AnimationTheme;

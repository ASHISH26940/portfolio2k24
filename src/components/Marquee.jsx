import React, { useState, useEffect } from 'react';
import '../styles/Marquee.css';
import { motion } from 'framer-motion';

const Marquee = () => {
    const [scrollDirection, setScrollDirection] = useState('up');

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrollDirection('down');
            } else {
                setScrollDirection('up');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='marquee'>
            <motion.h1
                initial={{ x: 0 }}
                animate={{ x: scrollDirection === 'up' ? '100%' : '-100%' }}
                transition={{ ease: 'linear', duration: 4, repeat: Infinity }}
            >
                THE END
            </motion.h1>
            <motion.h1
                initial={{ x: 0 }}
                animate={{ x: scrollDirection === 'up' ? '100%' : '-100%' }}
                transition={{ ease: 'linear', duration: 4, repeat: Infinity }}
            >
                THE END
            </motion.h1>
            <motion.h1
                initial={{ x: 0 }}
                animate={{ x: scrollDirection === 'up' ? '100%' : '-100%' }}
                transition={{ ease: 'linear', duration: 4, repeat: Infinity }}
            >
                THE END
            </motion.h1>
            <motion.h1
                initial={{ x: 0 }}
                animate={{ x: scrollDirection === 'up' ? '100%' : '-100%' }}
                transition={{ ease: 'linear', duration: 4, repeat: Infinity }}
            >
                THE END
            </motion.h1>
            <motion.h1
                initial={{ x: 0 }}
                animate={{ x: scrollDirection === 'up' ? '100%' : '-100%' }}
                transition={{ ease: 'linear', duration: 4, repeat: Infinity }}
            >
                THE END
            </motion.h1>
        </div>
    );
};

export default Marquee;

'use client';

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
    return (
        <motion.div
    className="relative flex items-center justify-center w-[500px] h-[670px] sm:w-[300px] sm:h-[300px] mb-5 ml-5"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.3, duration: 0.5 }}
>
    {/* SVG circle for background */}
    <motion.svg
        className="absolute top-0 left-0 w-full h-full"
        viewBox="0 0 506 506"
        xmlns="http://www.w3.org/2000/svg"
        fill="transparent"
        animate={{ scale: 0.9 }} // Optional zoom-out effect for the circle
        transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
        }}
    >
        <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#08FF99"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{
                strokeDasharray: "24 10 0 0"
            }}
            animate={{
                strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                rotate: [120, 360],
            }}
            transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse",
            }}
        />
    </motion.svg>
    <div className="relative duration-[2000ms] w-[350px] h-[350px] rounded-full overflow-hidden">
        <Image
            src="/images/portrait.webp"
            alt="Portrait"
            priority
            quality={100}
            width={300}
            height={310}
            className="ml-8"
        />
    </div>
</motion.div>

    );
};

export default Photo;

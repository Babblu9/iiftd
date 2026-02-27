"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface FadeInProps {
    children: ReactNode;
    delay?: number;
    direction?: "up" | "down" | "left" | "right" | "none";
    className?: string;
    duration?: number;
}

export default function FadeIn({
    children,
    delay = 0,
    direction = "up",
    className,
    duration = 0.6,
}: FadeInProps) {
    const directionOffset = 40;

    const getHiddenState = () => {
        switch (direction) {
            case "up":
                return { opacity: 0, y: directionOffset };
            case "down":
                return { opacity: 0, y: -directionOffset };
            case "left":
                return { opacity: 0, x: -directionOffset };
            case "right":
                return { opacity: 0, x: directionOffset };
            case "none":
            default:
                return { opacity: 0 };
        }
    };

    return (
        <motion.div
            initial={getHiddenState()}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{
                duration,
                delay,
                ease: [0.21, 0.47, 0.32, 0.98], // Custom easeOutCubic
            }}
            className={cn(className)}
        >
            {children}
        </motion.div>
    );
}

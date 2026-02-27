"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function TypewriterText({ texts }: { texts: string[] }) {
    const [displayText, setDisplayText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentText = texts[currentIndex];

        // Determine typing speed
        let typingSpeed = isDeleting ? 40 : 100;

        // Pause when full text is typed before deleting
        if (!isDeleting && displayText === currentText) {
            typingSpeed = 2500; // Pause for 2.5 seconds at the end of typing
        } else if (isDeleting && displayText === "") {
            typingSpeed = 500;  // Pause for 0.5 seconds before typing new word
        }

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                if (displayText !== currentText) {
                    setDisplayText(currentText.slice(0, displayText.length + 1));
                } else {
                    setIsDeleting(true);
                }
            } else {
                if (displayText !== "") {
                    setDisplayText(currentText.slice(0, displayText.length - 1));
                } else {
                    setIsDeleting(false);
                    setCurrentIndex((prev) => (prev + 1) % texts.length);
                }
            }
        }, typingSpeed);

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, currentIndex, texts]);

    return (
        <span className="inline-block">
            {displayText}
            <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                className="inline-block font-light ml-1 md:-translate-y-1 text-black/40"
            >
                |
            </motion.span>
        </span>
    );
}

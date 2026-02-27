import React from 'react';
import Image from 'next/image';

export default function Logo({ className = "h-16 w-auto" }: { className?: string }) {
    return (
        <div className={`flex items-center ${className}`}>
            <img
                src="/logo-cropped.png"
                alt="IIFTD Logo"
                className="h-full w-auto object-contain origin-left"
            />
        </div>
    );
}

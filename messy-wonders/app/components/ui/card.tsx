'use client';

import React from 'react';

interface CardProps {
    children: React.ReactNode;
    color?: string;
    rotate?: string;
    className?: string;
}

export default function Card({
    children,
    color = "bg-white",
    rotate = "0deg",
    className = ""
}: CardProps) {
    return (
        <div
            className={`border-[3px] border-black rounded-[24px] shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] ${color} ${className}`}
            style={{ transform: `rotate(${rotate})` }}
        >
            {children}
        </div>
    );
}

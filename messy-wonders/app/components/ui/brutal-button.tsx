'use client';

import React from 'react';
import Link from 'next/link';

interface BrutalButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    href?: string;
    variant?: 'primary' | 'secondary' | 'outline' | 'dark';
    className?: string;
}

export default function BrutalButton({
                                         children,
                                         onClick,
                                         href,
                                         variant = 'primary',
                                         className = ""
                                     }: BrutalButtonProps) {
    const variants = {
        primary: "bg-[#FFD600] text-black hover:bg-[#FFE033]",
        secondary: "bg-primary text-white hover:bg-primary/75",
        outline: "bg-white text-black hover:bg-slate-50",
        dark: "bg-black text-white hover:bg-slate-800"
    };

    const baseStyles = `px-4 py-2 md:px-6 md:py-3 rounded-xl border-[3px] border-black font-black text-sm md:text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px] transition-all flex items-center justify-center gap-2 ${variants[variant]} ${className}`;

    // Nếu có href thì render Link, không thì render button
    if (href) {
        return (
            <Link href={href} className={baseStyles}>
                {children}
            </Link>
        );
    }

    return (
        <button onClick={onClick} className={baseStyles}>
            {children}
        </button>
    );
}
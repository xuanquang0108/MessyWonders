'use client';

import React from 'react';

interface SectionTitleProps {
    children: React.ReactNode;
    subtitle?: string;
}

export default function SectionTitle({ children, subtitle }: SectionTitleProps) {
    return (
        <div className="text-center mb-10 md:mb-16 px-4">
            <h2 className="text-3xl md:text-6xl font-black mb-4 uppercase tracking-tight leading-none">{children}</h2>
            {subtitle && <p className="text-base md:text-xl text-slate-600 font-bold max-w-2xl mx-auto">{subtitle}</p>}
            <div className="w-16 md:w-24 h-2 md:h-3 bg-primary mx-auto mt-6 border-2 border-black rounded-full"></div>
        </div>
    );
}

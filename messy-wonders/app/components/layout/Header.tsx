'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Sparkles, ShoppingBag } from 'lucide-react';
import BrutalButton from '../ui/brutal-button';

export default function Header() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    const navItems = [
        { href: '/', label: 'Home' },
        { href: '/games', label: 'Games' },
        { href: '/gallery', label: 'Gallery' },
        { href: '/reviews', label: 'Reviews' },
    ];

    const isActive = (href: string) => {
        if (href === '/') return pathname === '/';
        return pathname.startsWith(href);
    };

    return (
        <>
            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${isMenuOpen ? 'visible' : 'invisible pointer-events-none'}`}
                role="dialog"
                aria-modal="true"
            >
                <div
                    className={`absolute inset-0 bg-[#FFD600] transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}
                />

                <div
                    className={`relative h-full flex flex-col items-center justify-center gap-6 transition-all duration-300 ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
                >
                    {navItems.map((item, index) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsMenuOpen(false)}
                            className={`text-3xl sm:text-4xl font-black uppercase tracking-tighter text-black hover:text-black/70 transition-all duration-300`}
                            style={{
                                transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms'
                            }}
                        >
                            {item.label}
                            {isActive(item.href) && (
                                <span className="block h-1 bg-black mt-1 rounded-full" />
                            )}
                        </Link>
                    ))}

                    <div
                        className={`mt-6 transition-all duration-300 ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                        style={{
                            transitionDelay: isMenuOpen ? `${navItems.length * 50}ms` : '0ms'
                        }}
                    >
                        <BrutalButton href="/shop" variant="secondary" className="text-lg sm:text-xl px-8 sm:px-12">
                            Shop Now <ShoppingBag className="ml-2 w-5 h-5" />
                        </BrutalButton>
                    </div>
                </div>
            </div>

            {/* NAV BAR */}
            <nav className={`fixed w-full top-0 z-50 px-4 md:px-8 py-4 transition-all duration-300 ${scrolled && !isMenuOpen ? 'bg-white/95 backdrop-blur-sm border-b-4 border-black' : 'bg-transparent'}`}>
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="flex items-center gap-2 md:gap-3 group"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <div className="bg-pink-400 p-1.5 md:p-2 rounded-lg border-2 border-black -rotate-6 group-hover:rotate-0 transition-transform shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                            <Sparkles className="text-white w-5 h-5 md:w-6 md:h-6" />
                        </div>
                        <span className="text-lg md:text-2xl font-black uppercase tracking-tighter text-black">
                            Messy Wonders
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="text-black hidden md:flex items-center gap-8">
                        {navItems.map(item => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="font-bold uppercase text-sm tracking-widest hover:text-pink-500 transition-colors relative group"
                            >
                                {item.label}
                                <span className={`absolute -bottom-1 left-0 w-full h-1 bg-pink-400 transform origin-left transition-transform duration-300 ${isActive(item.href) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-50'}`} />
                            </Link>
                        ))}
                        <BrutalButton href="/shop" variant="secondary" className="py-2 text-sm px-4">
                            Shop Now
                        </BrutalButton>
                    </div>

                    {/* Mobile Toggle Button */}
                    <button
                        className="md:hidden border-2 border-black p-2 rounded-xl bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={isMenuOpen}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>
        </>
    );
}
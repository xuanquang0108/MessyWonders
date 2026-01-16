import React from 'react';
import { Home, ArrowLeft, Search, Sparkles } from 'lucide-react';
import BrutalButton from './components/ui/brutal-button';
import Card from './components/ui/card';

export default function NotFound() {
    return (
        <div className="min-h-[80vh] flex items-center justify-center px-4 py-20">
            <div className="max-w-2xl mx-auto text-center">
                {/* 404 Number */}
                <div className="relative inline-block mb-8">
                    <h1 className="text-[120px] sm:text-[180px] md:text-[220px] font-black leading-none text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary select-none">
                        404
                    </h1>

                    {/* Floating decorations */}
                    <div className="absolute -top-4 -right-4 md:-top-8 md:-right-8 bg-yellow-300 border-3 border-black p-3 md:p-4 rounded-full animate-bounce shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                        <Sparkles className="w-5 h-5 md:w-8 md:h-8 text-black" />
                    </div>
                    <div className="absolute -bottom-2 -left-4 md:-bottom-4 md:-left-8 bg-pink-400 border-3 border-black p-2 md:p-3 rounded-full animate-pulse shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                        <Search className="w-4 h-4 md:w-6 md:h-6 text-white" />
                    </div>
                </div>

                {/* Message Card */}
                <Card color="bg-white" className="p-6 md:p-10 mb-8">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase mb-4">
                        Oops! Page Not Found
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl font-bold text-slate-600 mb-2">
                        Looks like this page went on an adventure!
                    </p>
                    <p className="text-sm md:text-base text-slate-500">
                        The page you're looking for doesn't exist or has been moved.
                    </p>
                </Card>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <BrutalButton href="/" variant="primary" className="w-full sm:w-auto">
                        <Home className="w-5 h-5 mr-2" />
                        Back to Home
                    </BrutalButton>
                    <BrutalButton href="/shop" variant="outline" className="w-full sm:w-auto">
                        <ArrowLeft className="w-5 h-5 mr-2" />
                        Visit Shop
                    </BrutalButton>
                </div>

                {/* Fun suggestions */}
                <div className="mt-12 pt-8 border-t-2 border-dashed border-slate-200">
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">
                        Maybe try these instead?
                    </p>
                    <div className="flex flex-wrap justify-center gap-3">
                        {[
                            { label: 'Games', href: '/games' },
                            { label: 'Gallery', href: '/gallery' },
                            { label: 'Reviews', href: '/reviews' },
                            { label: 'Shop', href: '/shop' },
                        ].map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="px-4 py-2 bg-slate-100 border-2 border-black rounded-xl font-bold text-sm hover:bg-yellow-200 hover:-translate-y-1 transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_4px_0px_0px_rgba(0,0,0,1)]"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
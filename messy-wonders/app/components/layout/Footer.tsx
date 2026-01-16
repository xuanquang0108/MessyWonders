'use client';

import React from 'react';
import { Sparkles, Globe, Music, Camera } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-black text-white pt-20 pb-10 px-6 mt-20">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                <div className="space-y-6 col-span-1 lg:col-span-2">
                    <div className="flex items-center gap-2">
                        <div className="bg-pink-400 p-2 rounded-lg border-2 border-white">
                            <Sparkles className="w-6 h-6" />
                        </div>
                        <span className="text-3xl font-black uppercase tracking-tighter">Messy Wonders</span>
                    </div>
                    <p className="font-bold text-slate-400 text-lg max-w-sm leading-relaxed">
                        Project initiated by a love for art and a desire to bring joy to children everywhere.
                    </p>
                </div>
                <div className="space-y-6">
                    <h4 className="text-xl font-black uppercase text-white">Links</h4>
                    <ul className="space-y-4 font-bold text-slate-400 text-lg">
                        <li className="hover:text-white cursor-pointer transition-colors">About Us</li>
                        <li className="hover:text-white cursor-pointer transition-colors">Name Me Game</li>
                        <li className="hover:text-white cursor-pointer transition-colors">Contact</li>
                    </ul>
                </div>
                <div className="space-y-6">
                    <h4 className="text-xl font-black uppercase text-white">Support</h4>
                    <ul className="space-y-4 font-bold text-slate-400 text-lg">
                        <li className="hover:text-white cursor-pointer">Game Guide</li>
                        <li className="hover:text-white cursor-pointer">Shipping Policy</li>
                        <li className="hover:text-white cursor-pointer">FAQs</li>
                    </ul>
                </div>
            </div>
            <div className="max-w-7xl flex items-center justify-center mt-20 pt-8 border-t-2 border-slate-800 flex-col md:flex-row gap-4 text-slate-500 uppercase text-xs">
                <p>© 2024 MESSY WONDERS. MADE WITH LOVE AND A BIT OF MESS.</p>
            </div>
        </footer>
    );
}

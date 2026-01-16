import React from 'react';
import {
    Heart, Star, Play, Palette, Rocket, Gift, ArrowRight,
    Smile, Zap, Quote, Users, PartyPopper, Sparkles, Send, CheckCircle2
} from 'lucide-react';
import Link from 'next/link';
import BrutalButton from './components/ui/brutal-button';
import Card from './components/ui/card';
import SectionTitle from './components/ui/section-title';

export default function HomePage() {
    const stats = { sold: 100, raised: 600, goal: 1000 };

    const howItWorks = [
        {
            icon: <Palette className="w-10 h-10"/>,
            title: "1. Brainstorm",
            desc: "Kids collaborate to sketch and invent the most unique game ideas.",
            color: "bg-orange-100"
        },
        {
            icon: <Rocket className="w-10 h-10"/>,
            title: "2. Produce",
            desc: "Each product is handcrafted with care, attention, and love.",
            color: "bg-purple-100"
        },
        {
            icon: <Gift className="w-10 h-10"/>,
            title: "3. Fundraising",
            desc: "Profits are used to buy art supplies for remote schools.",
            color: "bg-green-100"
        },
    ];

    const reviews = [
        {
            name: "Lan Anh",
            text: "My kid loves the NameMe game! We play it every single night. Such a meaningful project!",
            color: "bg-blue-50"
        },
        {
            name: "Minh Tuan",
            text: "Beautifully packaged. Happy to support a project with such a wonderful community goal.",
            color: "bg-pink-50"
        },
        {
            name: "Thu Ha",
            text: "Great for developing language and creative thinking. 10/10 for creativity!",
            color: "bg-yellow-50"
        }
    ];

    const gameFeatures = [
        {
            icon: <Smile size={28} className="text-black" />,
            text: "Simple rule, learn in 1 minute",
            color: "bg-green-400"
        },
        {
            icon: <Users size={28} className="text-black" />,
            text: "For aged 8+",
            color: "bg-yellow-400"
        },
        {
            icon: <PartyPopper size={28} className="text-black" />,
            text: "Party Game, family game night",
            color: "bg-pink-400"
        },
    ];

    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">

            {/* ==================== HERO SECTION ==================== */}
            <section className="max-w-7xl mx-auto px-6 py-10 md:py-20 grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 md:space-y-10 text-center lg:text-left">
                    <h1 className="text-5xl md:text-7xl lg:text-[100px] font-black leading-[0.85] uppercase tracking-tighter">
                        Get <span className="text-primary inline-block hover:scale-110 transition-transform cursor-default">Messy</span>
                        <br/>
                        See <span className="text-secondary inline-block -rotate-2">Wonders!</span>
                    </h1>
                    <p className="text-lg md:text-2xl font-bold text-slate-700 max-w-xl mx-auto lg:mx-0 leading-tight">
                        A creative platform for kids, starting with games that help raise funds for schools in need.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <BrutalButton href="/games" className="w-full sm:w-auto">
                            Explore Games
                        </BrutalButton>
                        <BrutalButton href="/shop" variant="outline" className="w-full sm:w-auto">
                            Limited Edition
                        </BrutalButton>
                    </div>
                    <div className="flex items-center justify-center lg:justify-start gap-3 text-sm md:text-base font-black text-slate-500">
                        <div className="flex -space-x-2">
                            {[1, 2, 3].map(i => (
                                <div
                                    key={i}
                                    className="w-8 h-8 rounded-full border-2 border-black bg-slate-200 flex items-center justify-center text-[10px]"
                                >
                                    U{i}
                                </div>
                            ))}
                        </div>
                        <span>Join 100+ parents supporting us</span>
                    </div>
                </div>

                <div className="relative mt-12 lg:mt-0">
                    <Card color="bg-blue-100" rotate="3deg" className="p-2 md:p-3 overflow-hidden group">
                        <div className="bg-white border-2 border-black rounded-xl p-4 aspect-video flex items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-slate-200 flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
                                <Play className="w-16 h-16 md:w-24 md:h-24 text-white fill-black drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]" />
                            </div>
                        </div>
                    </Card>
                    <div className="hidden md:block absolute -top-10 -right-10 bg-yellow-300 border-3 border-black p-5 rounded-full animate-bounce shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                        <Zap className="w-8 h-8 fill-black" />
                    </div>
                    <div className="absolute -bottom-6 -left-6 md:-left-12 bg-primary border-3 border-black px-4 py-2 md:px-8 md:py-4 rounded-2xl rotate-[-8deg] font-black text-sm md:text-xl text-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                        100% CREATIVE
                    </div>
                </div>
            </section>

            {/* ==================== MARQUEE ==================== */}
            <div className="bg-black py-4 border-y-4 border-black overflow-hidden">
                <div className="flex animate-marquee whitespace-nowrap">
                    {[1, 2, 3, 4, 5].map(i => (
                        <div key={i} className="flex gap-8 items-center text-white font-black uppercase text-xl md:text-3xl mx-4">
                            <span>Infinite Imagination</span>
                            <Star className="fill-yellow-400 text-yellow-400 w-6 h-6 md:w-8 md:h-8" />
                            <span>Play to Learn</span>
                            <Heart className="fill-primary text-primary w-6 h-6 md:w-8 md:h-8" />
                            <span>School Fundraising</span>
                            <Sparkles className="text-secondary w-6 h-6 md:w-8 md:h-8" />
                        </div>
                    ))}
                </div>
            </div>

            {/* ==================== HOW IT WORKS ==================== */}
            <section className="bg-white py-20 md:py-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <SectionTitle subtitle="Simple process, massive impact">
                        How We Do It?
                    </SectionTitle>
                    <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                        {howItWorks.map((item, i) => (
                            <Card
                                key={i}
                                color={item.color}
                                className="p-8 md:p-12 text-center space-y-6 hover:-translate-y-4 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-300"
                            >
                                <div className="w-20 h-20 bg-white border-3 border-black rounded-3xl mx-auto flex items-center justify-center shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] -rotate-6">
                                    {item.icon}
                                </div>
                                <h3 className="text-2xl md:text-3xl font-black uppercase">{item.title}</h3>
                                <p className="font-bold text-slate-600 text-lg leading-snug">{item.desc}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* ==================== PROGRESS TRACKER ==================== */}
            <section className="py-20 px-4 md:px-6 max-w-6xl mx-auto">
                <div className="bg-primary border-4 border-black rounded-[40px] p-8 md:p-16 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">
                    {/* Background Decoration */}
                    <div className="absolute -bottom-10 -right-10 p-4 rotate-12 opacity-10">
                        <Heart className="w-64 h-64 fill-white text-white" />
                    </div>

                    <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center text-center lg:text-left">
                        {/* Left Content */}
                        <div className="text-white space-y-8">
                            <h2 className="text-5xl md:text-7xl font-black leading-none uppercase">
                                Fundraising <br/> Goal
                            </h2>
                            <p className="text-xl md:text-2xl font-bold opacity-90">
                                Every game set you buy provides a child with more crayons and drawing paper.
                            </p>
                            <div className="flex flex-wrap justify-center lg:justify-start gap-8 md:gap-16">
                                <div>
                                    <div className="text-5xl md:text-6xl font-black">{stats.sold}</div>
                                    <div className="text-sm uppercase font-black opacity-80 tracking-widest">Sets Sold</div>
                                </div>
                            </div>
                        </div>

                        {/* Right - Progress Card */}
                        <div className="bg-white border-4 border-black p-8 md:p-12 rounded-[32px] space-y-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)]">
                            <div className="flex justify-between items-end">
                                <span className="font-black text-3xl md:text-4xl">${stats.raised}</span>
                                <span className="font-black text-slate-400">GOAL: ${stats.goal}</span>
                            </div>
                            <div className="w-full bg-slate-100 border-4 border-black h-14 md:h-16 rounded-[20px] overflow-hidden relative">
                                <div
                                    className="bg-yellow-400 h-full border-r-4 border-black transition-all duration-1000 ease-out relative"
                                    style={{ width: `${(stats.raised / stats.goal) * 100}%` }}
                                >
                                    <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                                </div>
                            </div>
                            <BrutalButton href="/shop" variant="secondary" className="w-full py-5 text-xl">
                                Donate Now <ArrowRight className="ml-2" />
                            </BrutalButton>
                        </div>
                    </div>
                </div>
            </section>

            {/* ==================== GALLERY / GAME SHOWCASE ==================== */}
            <section className="bg-white overflow-hidden py-20 px-4 md:px-6 mx-auto border-t-4 border-black border-b-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                        {/* Left - Image Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            {['pink', 'yellow', 'green', 'blue'].map((color, i) => (
                                <div
                                    key={i}
                                    className={`aspect-square bg-${color}-200 border-4 border-black rounded-3xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] overflow-hidden hover:-translate-y-1 hover:shadow-[6px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 flex items-center justify-center`}
                                >
                                    <span className="text-4xl">🎮</span>
                                </div>
                            ))}
                        </div>

                        {/* Right - Content */}
                        <div className="flex flex-col items-start">
                            <SectionTitle subtitle="A fun party game for the whole family">
                                NAME ME GAME
                            </SectionTitle>

                            {/* Features List */}
                            <div className="flex flex-col gap-5 mt-6 w-full">
                                {gameFeatures.map((feature, i) => (
                                    <div key={i} className="flex items-center gap-4">
                                        <div className={`${feature.color} p-2 rounded-xl border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]`}>
                                            {feature.icon}
                                        </div>
                                        <p className="text-slate-800 font-bold text-lg">{feature.text}</p>
                                    </div>
                                ))}
                            </div>

                            <BrutalButton href="/gallery" variant="primary" className="mt-8 py-4 px-8">
                                View Details <ArrowRight className="ml-2" />
                            </BrutalButton>
                        </div>
                    </div>
                </div>
            </section>

            {/* ==================== TESTIMONIALS ==================== */}
            <section className="bg-[#FFFDF5] py-24 px-6 overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <SectionTitle subtitle="Kind words from our community">
                        Wishes from Parents
                    </SectionTitle>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {reviews.map((review, i) => (
                            <Card
                                key={i}
                                color={review.color}
                                rotate={i % 2 === 0 ? "1deg" : "-1deg"}
                                className="p-8 space-y-4"
                            >
                                <Quote className="w-10 h-10 text-black opacity-20" />
                                <p className="font-bold text-lg italic leading-relaxed">"{review.text}"</p>
                                <div className="pt-4 border-t-2 border-black/10 flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-black" />
                                    <span className="font-black uppercase text-sm">{review.name}</span>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* ==================== NEWSLETTER ==================== */}
            <section className="py-20 px-4 md:px-6 max-w-6xl mx-auto">
                <div className="bg-secondary border-4 border-black rounded-[40px] p-8 md:p-16 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">
                    {/* Background Decoration */}
                    <div className="absolute -top-20 -right-20 opacity-10">
                        <Sparkles className="w-64 h-64 text-white" />
                    </div>

                    <div className="relative z-10 flex flex-col items-center justify-center text-center">
                        {/* Text Content */}
                        <div className="text-white mb-8">
                            <h2 className="text-3xl md:text-5xl font-black uppercase mb-4">
                                Sign up for goodnews!
                            </h2>
                            <p className="text-lg md:text-xl font-normal opacity-90 max-w-xl mx-auto">
                                Don't miss out on new creative projects and fundraising reports from Messy Wonders.
                            </p>
                        </div>

                        {/* Input & Button */}
                        <div className="w-full max-w-2xl flex flex-col md:flex-row items-stretch gap-4">
                            <input
                                type="email"
                                className="flex-1 bg-white border-4 border-black rounded-2xl px-6 py-4 font-bold text-lg placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-pink-300 transition-all"
                                placeholder="Your Email..."
                            />
                            <BrutalButton variant="primary" className="py-4 px-8 text-lg md:text-xl whitespace-nowrap">
                                Subscribe <ArrowRight className="ml-2 w-5 h-5" />
                            </BrutalButton>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
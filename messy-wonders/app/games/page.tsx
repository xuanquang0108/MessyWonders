import { Palette } from 'lucide-react';
import BrutalButton from '../components/ui/brutal-button';

export default function GamesPage() {
    return (
        <div className="bg-white py-24 md:py-40 text-center px-6">
            <div className="inline-block p-8 border-4 border-black border-dashed rounded-full mb-8 animate-spin-slow">
                <Palette size={64} className="text-pink-400" />
            </div>
            <h2 className="text-black text-4xl md:text-6xl font-black uppercase mb-4 italic">
                Games Coming Soon...
            </h2>
            <p className="text-xl font-bold text-slate-500 mb-12">
                Our young artists are working on something amazing!
            </p>
            <BrutalButton href="/" variant="outline" className="mx-auto">
                Back to Home
            </BrutalButton>
        </div>
    );
}
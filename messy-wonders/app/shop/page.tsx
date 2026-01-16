import { Send, CheckCircle2 } from 'lucide-react';
import BrutalButton from '../components/ui/brutal-button';
import Card from '../components/ui/card';
import SectionTitle from '../components/ui/section-title';

export default function ShopPage() {
    return (
        <div className="max-w-4xl mx-auto px-6 py-10 md:py-20 animate-in zoom-in-95 duration-500">
            <SectionTitle subtitle="Your order will be confirmed via Email">
                Order NameMe Game
            </SectionTitle>
            <Card color="bg-white" className="p-8 md:p-16 relative">
                <div className="absolute -top-6 -right-6 bg-orange-400 text-white border-3 border-black px-4 py-2 font-black rounded-xl rotate-12 hidden md:block">
                    ONLY $10 / SET
                </div>
                <form className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-2">
                            <label className="font-black uppercase text-sm tracking-widest block">Your Name</label>
                            <input
                                type="text"
                                className="w-full p-4 border-4 border-black rounded-2xl font-bold bg-slate-50 focus:bg-white outline-none transition-all focus:ring-4 ring-pink-200"
                                placeholder="John Doe"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="font-black uppercase text-sm tracking-widest block">Email Address</label>
                            <input
                                type="email"
                                className="w-full p-4 border-4 border-black rounded-2xl font-bold bg-slate-50 focus:bg-white outline-none transition-all focus:ring-4 ring-pink-200"
                                placeholder="example@email.com"
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="font-black uppercase text-sm tracking-widest block">Quantity</label>
                        <select className="w-full p-4 border-4 border-black rounded-2xl font-bold bg-slate-50 outline-none appearance-none cursor-pointer">
                            <option>1 set - $10</option>
                            <option>2 sets - $20</option>
                            <option>5 sets - $45 (Save!)</option>
                            <option>School Partnership (10+ sets)</option>
                        </select>
                    </div>
                    <div className="space-y-2">
                        <label className="font-black uppercase text-sm tracking-widest block">Message (Optional)</label>
                        <textarea
                            rows={4}
                            className="w-full p-4 border-4 border-black rounded-2xl font-bold bg-slate-50 outline-none focus:bg-white transition-all"
                            placeholder="Any wishes for the children?"
                        />
                    </div>
                    <div className="flex items-center gap-3 bg-blue-50 p-4 rounded-xl border-2 border-blue-200">
                        <CheckCircle2 className="text-secondary" />
                        <p className="text-sm font-bold text-blue-700">
                            We will contact you within 24 hours to confirm delivery details.
                        </p>
                    </div>
                    <BrutalButton variant="secondary" className="w-full py-6 text-2xl uppercase tracking-tighter">
                        Send Order Request <Send />
                    </BrutalButton>
                </form>
            </Card>
        </div>
    );
}
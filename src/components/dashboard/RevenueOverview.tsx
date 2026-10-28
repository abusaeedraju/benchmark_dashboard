import Link from "next/link";
import { ArrowRight, TrendingUp } from "lucide-react";

// মাসিক রেভিনিউ ডেটা এবং বারের উইডথ পার্সেন্টেজ
const monthlyData = [
    { month: "February", amount: "$48,454", percentage: 85 },
    { month: "January", amount: "$28,454", percentage: 55 },
    { month: "December", amount: "$28,454", percentage: 55 },
    { month: "November", amount: "$28,454", percentage: 95 },
    { month: "October", amount: "$28,454", percentage: 35 },
];

export default function RevenueOverview() {
    return (
        <div className="p-6 rounded-2xl bg-[#111726] border border-[#1e293b] flex flex-col justify-between">
            {/* ১. হেডার রো */}
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-base font-semibold text-white">Revenue Overview</h3>
                <Link
                    href="/revenue"
                    className="text-xs text-blue-400 hover:text-blue-300 flex items-center gap-1 transition-colors"
                >
                    See all
                    <ArrowRight className="w-3.5 h-3.5" />
                </Link>
            </div>

            {/* ২. বড় রেভিনিউ স্ট্যাটাস সেকশন */}
            <div className="flex flex-wrap items-baseline gap-3 mb-6">
                <span className="text-2xl font-bold text-white tracking-tight">$123,000</span>
                <span className="text-xs text-gray-400">Total revenue</span>
                <span className="text-xs text-emerald-400 font-medium flex items-center gap-1">
                    <TrendingUp className="w-3.5 h-3.5" />
                    +12% this month
                </span>
            </div>

            {/* ৩. মাসিক হরাইজন্টাল বার চার্ট */}
            <div className="space-y-4">
                {monthlyData.map((item) => (
                    <div key={item.month} className="space-y-1.5">
                        {/* মাসের নাম এবং টাকার পরিমাণ */}
                        <div className="flex justify-between items-center text-xs">
                            <span className="text-gray-300 font-medium">{item.month}</span>
                            <span className="text-gray-300 font-medium">{item.amount}</span>
                        </div>

                        {/* গ্রিন প্রগ্রেস বার */}
                        <div className="w-full h-2 rounded-full bg-[#182338] overflow-hidden">
                            <div
                                className="h-full bg-emerald-500 rounded-full transition-all duration-500"
                                style={{ width: `${item.percentage}%` }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

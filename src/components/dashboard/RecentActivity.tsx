import Link from "next/link";
import { User, ArrowRight } from "lucide-react";

// অ্যাক্টিভিটির মক ডেটা লিস্ট
const activities = [
    { id: 1, user: "Benchmark", action: "requested a project report.", time: "2 min ago" },
    { id: 2, user: "Benchmark", action: "requested a project report.", time: "2 min ago" },
    { id: 3, user: "Benchmark", action: "requested a project report.", time: "2 min ago" },
    { id: 4, user: "Benchmark", action: "requested a project report.", time: "2 min ago" },
    { id: 5, user: "Benchmark", action: "requested a project report.", time: "2 min ago" },
];

export default function RecentActivity() {
    return (
        <div className="p-6 rounded-2xl bg-[#111726] border border-[#1e293b] flex flex-col justify-between">
            {/* হেডার রো */}
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-base font-semibold text-white">Recent Activity</h3>
                <Link
                    href="/reports"
                    className="text-xs text-blue-400 hover:text-blue-300 flex items-center gap-1 transition-colors"
                >
                    See all
                    <ArrowRight className="w-3.5 h-3.5" />
                </Link>
            </div>

            {/* অ্যাক্টিভিটি তালিকা */}
            <div className="space-y-4">
                {activities.map((item) => (
                    <div key={item.id} className="flex items-center gap-3">
                        {/* ইউজার আইকন সার্কেল */}
                        <div className="w-8 h-8 rounded-full bg-[#182338] border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                            <User className="w-4 h-4" />
                        </div>

                        {/* বর্ণনা ও সময় */}
                        <div className="flex-1 min-w-0">
                            <p className="text-xs text-gray-300">
                                <span className="font-semibold text-white">{item.user}</span>{" "}
                                {item.action}
                            </p>
                            <p className="text-[11px] text-gray-400 mt-0.5">{item.time}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

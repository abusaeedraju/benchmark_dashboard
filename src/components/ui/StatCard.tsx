import { LucideIcon } from "lucide-react";

interface StatCardProps {
    title: string;
    value: string | number;
    subtitle?: string;
    badgeText?: string;
    badgeType?: "positive" | "neutral";
    icon: LucideIcon;
}

export default function StatCard({
    title,
    value,
    subtitle,
    badgeText,
    badgeType = "positive",
    icon: Icon,
}: StatCardProps) {
    return (
        <div className="p-5 rounded-2xl bg-[#111726] border border-[#1e293b] flex flex-col justify-between hover:border-slate-700 transition-colors">
            {/* টপ রো: আইকন ও টাইটেল */}
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#182338] border border-blue-500/20 flex items-center justify-center text-blue-400">
                    <Icon className="w-5 h-5" />
                </div>
                <span className="text-sm text-gray-400 font-medium">{title}</span>
            </div>

            {/* বটম রো: বড় সংখ্যা ও সাবটাইটেল/ব্যাজ */}
            <div className="mt-5">
                <h3 className="text-2xl font-bold text-white tracking-tight">{value}</h3>

                {badgeText && (
                    <p className="text-xs text-emerald-400 mt-1 font-medium flex items-center gap-1">
                        {badgeText}
                    </p>
                )}

                {subtitle && (
                    <p className="text-xs text-gray-400 mt-1">
                        {subtitle}
                    </p>
                )}
            </div>
        </div>
    );
}

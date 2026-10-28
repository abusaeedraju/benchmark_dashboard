"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    LayoutDashboard,
    Users,
    FolderGit2,
    FileText,
    DollarSign,
    Settings,
    ChevronDown
} from "lucide-react";

// নেভিগেশন মেনু আইটেমগুলোর লিস্ট
const navigationItems = [
    { name: "Dashboard", href: "/", icon: LayoutDashboard },
    { name: "Users", href: "/users", icon: Users },
    { name: "Projects", href: "/projects", icon: FolderGit2 },
    { name: "Reports", href: "/reports", icon: FileText },
    { name: "Revenue", href: "/revenue", icon: DollarSign },
    { name: "Settings", href: "/settings", icon: Settings },
];

export default function Sidebar() {
    // usePathname() দিয়ে বর্তমান URL পাওয়া যায় (যেমন: "/" অথবা "/users")
    const pathname = usePathname();

    return (
        <aside className="w-64 bg-[#0d131f] border-r border-[#1e293b] flex flex-col justify-between h-screen sticky top-0 px-4 py-6">
            <div>
                {/* ১. লোগো ও ব্র্যান্ড নাম (Figma ডিজাইন অনুসারে) */}
                <div className="flex items-center gap-3 px-3 mb-8">
                    <div className="w-8 h-8 rounded bg-blue-600/20 border border-blue-500/30 flex items-center justify-center font-bold text-blue-400">
                        ▲
                    </div>
                    <div>
                        <h1 className="text-sm font-bold tracking-wider text-white">BENCHMARK</h1>
                        <p className="text-[9px] text-gray-400 tracking-tight">SITE ENGINEERING SERVICES LTD</p>
                    </div>
                </div>

                {/* ২. নেভিগেশন মেনু সেকশন */}
                <div>
                    <p className="text-[11px] font-semibold text-gray-500 uppercase px-3 mb-3 tracking-wider">
                        Navigation
                    </p>
                    <nav className="flex flex-col gap-1.5">
                        {navigationItems.map((item) => {
                            const Icon = item.icon;
                            // চেক করছি ইউজার কি বর্তমানে এই পেজে আছেন?
                            const isActive = pathname === item.href;

                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-sm font-medium transition-all ${isActive
                                            ? "bg-[#182338] text-white border border-blue-500/50 shadow-sm shadow-blue-500/10"
                                            : "text-gray-400 hover:text-gray-200 hover:bg-[#131c2d]"
                                        }`}
                                >
                                    <Icon className={`w-4 h-4 ${isActive ? "text-blue-400" : "text-gray-400"}`} />
                                    {item.name}
                                </Link>
                            );
                        })}
                    </nav>
                </div>
            </div>

            {/* ৩. সাইডবারের নিচের অ্যাডমিন ইউজার প্রোফাইল কার্ড */}
            <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#111927] border border-[#1e293b]">
                <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-xs text-blue-300 font-semibold">
                        AD
                    </div>
                    <div>
                        <p className="text-xs font-semibold text-white">Admin User</p>
                        <p className="text-[10px] text-gray-400">Super Admin</p>
                    </div>
                </div>
                <ChevronDown className="w-4 h-4 text-gray-400 cursor-pointer" />
            </div>
        </aside>
    );
}

import { Users, FolderGit2, FileText, DollarSign } from "lucide-react";
import StatCard from "@/components/ui/StatCard";
import RecentActivity from "@/components/dashboard/RecentActivity";
import RevenueOverview from "@/components/dashboard/RevenueOverview";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* ১. পেজ হেডার */}
      <div>
        <h1 className="text-2xl font-bold text-white tracking-tight">
          Movement Monitoring & Reporting System
        </h1>
        <p className="text-sm text-gray-400 mt-1">
          Platform overview and project management
        </p>
      </div>

      {/* ২. ৪টি Stat Cards গ্রিড */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <StatCard
          title="Total Active Users"
          value="1,454"
          badgeText="+12% from last month"
          icon={Users}
        />
        <StatCard
          title="Total Projects"
          value="546"
          subtitle="142 live • 14 archived"
          icon={FolderGit2}
        />
        <StatCard
          title="Total Reports Generated"
          value="1,245"
          badgeText="+12% from last month"
          icon={FileText}
        />
        <StatCard
          title="Total Revenue"
          value="$123k"
          badgeText="+12% from last month"
          icon={DollarSign}
        />
      </div>

      {/* ৩. নিচের দুটি কার্ড (Recent Activity ও Revenue Overview) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecentActivity />
        <RevenueOverview />
      </div>
    </div>
  );
}

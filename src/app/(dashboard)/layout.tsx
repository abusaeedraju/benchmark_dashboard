import Sidebar from "@/components/layout/Sidebar";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen bg-[#0b0f17] text-white">
            {/* বামে ফিক্সড সাইডবার */}
            <Sidebar />

            {/* ডানে মূল কনটেন্ট এরিয়া (স্ক্রলেবল) */}
            <main className="flex-1 p-8 overflow-y-auto max-h-screen">
                {children}
            </main>
        </div>
    );
}

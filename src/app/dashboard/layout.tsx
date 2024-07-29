export default function DashboardLayout({
    children,
    users,
    revenue,
    notifications,
}: {
    children: React.ReactNode,
    users: React.ReactNode,
    revenue: React.ReactNode,
    notifications: React.ReactNode,
}) {
    return (
        <main>
            {children}
            <div className="flex gap-4 justify-around items-center  h-40 bg-blue-200">
                <div className="flex gap-y-10 flex-col">
                    {users}
                    {revenue}
                </div>
                {notifications}
            </div>
        </main>
    );
}

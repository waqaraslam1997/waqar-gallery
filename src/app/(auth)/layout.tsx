'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";


const mainLink = [
    { name: 'Login', href: '/login' },
    { name: 'Register', href: '/register' },
    { name: 'Forgot Password', href: '/forgot-password' },
]

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const path = usePathname();
    return (
        <div>
            {mainLink.map((link) => {
                const isActive = path.startsWith(link.href);
                console.log(path.startsWith)
                return (
                    <Link href={link.href}
                        key={link.name} 
                        className={isActive? "font-bold underline mx-4" : "text-blue-400 mx-4"}>
                        {link.name}
                    </Link>
                )
            })}
            {children}
        </div>
    )
}

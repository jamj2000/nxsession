'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";


const menu = [
    {
        text: 'Página principal',
        href: '/'
    },
    {
        text: 'Dashboard',
        href: '/dashboard'
    }
]

function Header() {
    const pathname = usePathname()

    return (
        <div className="font-bold h-14 px-10 mb-5 flex gap-4 justify-end items-center bg-blue-200 text-blue-500">

            {menu.map(item =>
                <Link
                    key={item.href}
                    href={item.href}
                    className={`hover:underline ${pathname == item.href && 'text-black no-underline'}`}>

                    {item.text}
                </Link>
            )}

        </div>
    );
}

export default Header;
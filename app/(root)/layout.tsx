import MobileNav from "@/components/MobileNav";
import SideBar from "@/components/Sidebar";
import { getLoggedInUser } from "@/lib/action/users.action";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const loggedIn = await getLoggedInUser()
    if(!loggedIn) redirect('/sign-in')
    return (
        <main className="flex h-screen w-full font-inter">
            <SideBar user={loggedIn} />
            <div className="flex size-full flex-col">
                <div className="root-layout">
                    <Image
                        alt="logo"
                        src='/icons/logo.svg'
                        width={30}
                        height={30}
                    />
                    <div>
                        <MobileNav user={loggedIn} />
                    </div>
                </div>
                {children}
            </div>
        </main>
    );
}

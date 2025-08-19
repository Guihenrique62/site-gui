import Image from "next/image"
import Link from "next/link"
import { Logo } from "../logo"

// Footer Component
export const Footer = ( ) => {


    return (
        <footer className="border-t border-white/10">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between md:flex-row  gap-8 py-8">
                    
                    <Logo />
                    
                    <nav className="flex flex-col md:flex-row items-center gap-4 text-sm text-muted-foreground">
                        <Link href={"/terms-of-use"} className="hover:text-primary">Terms of use</Link>
                        <Link href={"/privacy-police"} className="hover:text-primary">Privacy police</Link>
                        <Link href={"/feedback"} className="hover:text-primary">Feedback</Link>
                    </nav>
                </div>
            </div>
        </footer>
    )
}
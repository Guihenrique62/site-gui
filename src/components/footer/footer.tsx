import Image from "next/image"
import Link from "next/link"
import { Logo } from "../logo"

// Footer Component
export const Footer = ( ) => {


    return (
        <footer className="bg-gray-500">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between md:flex-row  gap-8 py-8">
                    
                    <Logo />
                    
                    <nav className="flex flex-col md:flex-row items-center gap-4 text-sm text-blue-100">
                        <Link href={"/terms-of-use"} className="hover:text-blue-200">Terms of use</Link>
                        <Link href={"/privacy-police"} className="hover:text-blue-200">Privacy police</Link>
                        <Link href={"/feedback"} className="hover:text-blue-200">Feedback</Link>
                    </nav>
                </div>
            </div>
        </footer>
    )
}
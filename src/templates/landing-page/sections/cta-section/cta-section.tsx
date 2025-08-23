import { Button } from "@/components/ui/button"
import { ArrowRight, Store } from "lucide-react"

import Link from "next/link"

export const CtaSection = () => {

    return (
        <section className="relative py-24 bg-gradient-to-b from-cyan-950/20 to-gray-700">
            <div className="absolute inset-0 bg-[url('/background-footer.svg')] bg-cover bg-center bg-no-repeat opacity-90" />
            <div className="container">

                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 bg-cyan-300 w-fit rounded-full">
                    <Store className="text-cyan-100" />
                </div>
                <div className="flex flex-col items-center gap-6 text-center relative">

                    <h2 className='font-sans text-gray-100 text-balance text-heading-xl'>Create an online store and start selling today</h2>

                    <Button asChild variant="primary" className="mt-4">
                        <Link href={"/create-store"}>
                            Create free store
                            <ArrowRight />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}
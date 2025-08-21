import { PT_Sans_Caption } from "next/font/google"

const ptSansCaption = PT_Sans_Caption({
    subsets: ['latin'],
    weight: '700'
})

const custumerStory = [
    {
        content: 'Creating my store with site.set was the best decision for my business. The platform is super intuitive, and I was able to put my products up for sale in just a few minutes.',
        author: {
            name: 'Annette Bones',
            role: 'CEO Anne Corp',
            avatar: '/avatar/custumer-01.png'
        }
    },
    {
        content: 'Turning my idea into an online store was quick and easy. I loved the customization options and the ease of order management. I can already see my products reaching more people!',
        author: {
            name: 'Jacob Jones',
            role: 'CEO JJ Org',
            avatar: '/avatar/custumer-02.png'
        }
    }
]

export const CustumerStorySection = () => {

    return (
        <section className="container py-8 md:py-10 ">
            <div className="flex flex-col gap-12 items-center">

                <h2 className={`${ptSansCaption.className} text-heading-xl text-gray-100 `}>Those who use it, approve!</h2>

                <div className="grid gap-8 md:grid-cols-2">

                    

                </div>
            </div>

        </section>
    )
}
import Image from "next/image"


const custumerStories = [
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

                <h2 className='font-sans text-heading-xl text-gray-100 '>Those who use it, approve!</h2>

                <div className="grid gap-8 md:grid-cols-2">
                    {custumerStories.map((custumerStory) => (
                        <div key={custumerStory.author.name} className="flex flex-col gap-6 rounded-lg bg-gray-500 p-6 md:p-12">
                            <p className="text-gray-200 text-balance">
                                {custumerStory.content}
                            </p>
                            <div className="flex items-center gap-3 ">
                                <div className="relative h-10 w-10 overflow-hidden rounded-full">
                                    <Image 
                                        src={custumerStory.author.avatar}
                                        alt={custumerStory.author.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                <div className="flex flex-col">
                                    <strong className="text-gray-200 text-sm">{custumerStory.author.name}</strong>
                                    <span className="text-xs text-gray-300">{custumerStory.author.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    )
}
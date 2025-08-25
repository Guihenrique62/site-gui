import Image from "next/image"
import Link from "next/link"

export const Postcard = () => {

    return (
        <Link href={'/blog/'}>

            {/* Post Content */}
            <div className="">
            
                {/* image Container */}
                <div className="relative">
                    <div className="absolute">
                        <span className="text-gray-300 text-body-xs ">20/12/2024</span>
                    </div>
                    <Image 
                        src={``}
                        alt=""
                        width={288}
                        height={144}
                    />
                </div>
            
            </div>
        </Link>
    )
}
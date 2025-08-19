import Image from "next/image"
import Link from "next/link"

//Site logo
export const Logo = () => {

    return (
        <Link href={'/'} title="Home Page">
            <Image
                src={"/logo.svg"}
                alt="Logo site"
                width={116}
                height={32}
            />
        </Link>
    )

}
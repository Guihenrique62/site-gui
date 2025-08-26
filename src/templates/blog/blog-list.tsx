import { Search } from "@/components/search";
import { useRouter } from "next/router";
import { Postcard } from "@/templates/blog/components/post-card";
import { PostGridCard } from "./components/post-grid-card";
import { allPosts } from "contentlayer/generated";

export function BlogList() {
    const router = useRouter()
    const query = router.query.q as string
    const pageTitle = query ? `Results of search to "${query}"` :"Tips and strategies to boost your business"

    const posts = allPosts 
    return (
        <div className="flex flex-col py-24 flex-grow h-full">

            <header className="pb-14">
                <div className="container space-y-6 flex flex-col items-start justify-between md:flex-row md:items-end lg:items-end">

                    {/* TAG */}
                    <div className="flex flex-col gap-4 md:px-0">
                        <span className="text-body-tag text-cyan-100 w-fit rounded-md text-center md:text-left py-2 px-4 bg-cyan-300">BLOG</span>


                        {/* Titulo */}
                        <h1 className="text-balance md:text-left text-heading-lg md:text-heading-xl max-w-2xl text-gray-100">
                            {pageTitle}
                        </h1>
                    </div>
                    {/* Search */}
                    <Search />
                </div>
            </header>



            {/* Lista de posts */}
            <PostGridCard>
                {posts.map((post) => (
                    <Postcard 
                    key={post._id}
                    date={new Date(post.date).toLocaleDateString("pt-BR")}
                    description={post.description}
                    image={post.image}
                    slug={post.slug}
                    title={post.title}
                    author={{
                        avatar: post.author.avatar,
                        name: post.author.name
                    }}
                />
                ))}
                
            </PostGridCard>
        </div>
    )
}
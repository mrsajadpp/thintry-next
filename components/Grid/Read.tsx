'use client'
import Link from "next/link";

function Read() {
    const blogPosts = [
        {
            id: 1,
            title: "How to use Shadcn UI in your Nextjs Project?",
            image: "/img/source/React-fetch-data.webp",
            desciption: "In this blog, we'll cover React Portals, uses cases, code examples, caveats interview questions, and more!"
        },
        {
            id: 2,
            title: "Implement login with Google in React Native",
            image: "/img/source/React-About-Portals.webp",
            desciption: "In this blog, we'll cover React Portals, uses cases, code examples, caveats interview questions, and more!"
        },
        {
            id: 3,
            title: "How to use Vercel's Geist Font in Next.js?",
            image: "/img/source/TurboRepo.webp",
            desciption: "In this blog, we'll cover React Portals, uses cases, code examples, caveats interview questions, and more!"
        },
        {
            id: 4,
            title: "What's New With Tailwind CSS v4.0?",
            image: "/img/source/tailwindcss.webp",
            desciption: "Discover what's new in Tailwind CSS v4.0! Faster builds, OKLCH colors, 3D transforms, container queries, and CSS-first config. Upgrade your CSS workflow today!"
        },
        {
            id: 5,
            title: "Everything You Need To Know About Next.js 15",
            image: "/img/source/nextjs.webp",
            desciption: "In this blog, we'll cover React Portals, uses cases, code examples, caveats interview questions, and more!"
        }
    ]

    return (
        <>
            <div className="blog-grid">
                {blogPosts.map((post) => (
                    <Link href="/" key={post.id} className='blog-card'>
                        <img src={post.image} alt={post.title} />
                        <p className="card-title">{post.title}</p>
                        <p>{post.desciption}</p>
                    </Link>
                ))}
            </div>
        </>
    );
}

export default Read;
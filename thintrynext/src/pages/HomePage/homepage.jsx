import './Homepage.css'
import React, { useState } from 'react'
import Header from '../../components/Header/Header'

function Homepage(){
    const [searchQuery, setSearchQuery] = useState("")

    const handleSearch = (e) => {
        e.preventDefault()
        console.log("Searching for: ", searchQuery)
    }

    const blogPosts = [
        {
            id: 1,
            title: "How to Fetch Data in React with useSWR",
            image: "/assets/images/React-fetch-data.webp",
            desciption: "Learn to efficiently fetch and manage data in React using SWR. Explore caching, real-time updates, and error handling for optimized API requests"
        },
        {
            id: 2,
            title: "What Are Portals in React?",
            image: "/assets/images/React-About-Portals.webp",
            desciption: "In this blog, we'll cover React Portals, uses cases, code examples, caveats interview questions, and more!"
        },
        {
            id:3,
            title: "Getting Started With Turborepo - Everything That You Need To Know",
            image: "/assets/images/TurboRepo.webp",
            desciption: "Turborepo is a build system that addresses the challenges faced in managing monorepos. Learn about Turborepo, its features, how to use Turborepo, and more."
        },
        {
            id:4,
            title: "What's New With Tailwind CSS v4.0?",
            image: "/assets/images/tailwindcss.webp",
            desciption: "Discover what's new in Tailwind CSS v4.0! Faster builds, OKLCH colors, 3D transforms, container queries, and CSS-first config. Upgrade your CSS workflow today!"
        },
        {
            id:5,
            title: "Everything You Need To Know About Next.js 15",
            image: "/assets/images/nextjs.webp",
            desciption: "What's new with Next.js 15: Async Request APIs, Improved Caching, Enhanced Hydration Errors, Form Component, Support for React 19, and more!"
        }
    ]

    return(
        <div className='homepage-master-container'>
            <div className='homepage-container'>
                { /* Left Section */ }
                <Header/>

                { /* Centre Section */ }
                <div className='centre-section'>
                    {/*<h1>-search and Articles here-</h1>
                    <p>Read Cool and Superbly Excting Articles with Alot of Joy</p> 
                    <button>Read More</button> 
                    <form className='search-bar' onSubmit={handleSearch}>
                        <input type="text"
                        placeholder='Search Articles'
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)} />
                        <button type='submit'> <img src="https://unpkg.com/@mynaui/icons/icons/search.svg" /> </button>
                    </form> */}
                    <div className='blog-grid'>
                        {blogPosts.map((post) => (
                            <div key={post.id} className='blog-card'>
                                <img src={post.image} alt={post.title} />
                                <h3>{post.title}</h3>
                                <p>{post.desciption}</p>
                            </div>
                        ))}
                    </div>
                </div>


                { /* Right Section 
                <div className='right-sidebar'>
                    <div className='search-navbar'>
                        <h3>-Search and Profile Here-</h3>
                    </div> 
                    <ul>
                        <li><a href="/category/tech"> Tech </a></li>
                        <li><a href="/category/science"> Science </a></li>
                        <li><a href="/category/design"> Design </a></li>
                        <li><a href="/category/business"> Business </a></li>
                    </ul>
                </div> */}
            </div>
        </div>
    )
}

export default Homepage
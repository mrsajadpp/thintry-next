import './Homepage.css'
import React from 'react'
import Header from '../../components/Header/Header'

function Homepage(){
    return(
        <div className='homepage-master-container'>
            <div className='homepage-container'>
                { /* Left Section */ }
                <Header/>

                { /* Centre Section */ }
                <div className='centre-section'>
                    <h1>Welcome to Thintry</h1>
                    <p>Read Cool and Superbly Excting Articles with Alot of Joy</p>
                    {/* <button>Read More</button> */}
                </div>

                { /* Right Section */ }
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
                </div>
            </div>
        </div>
    )
}

export default Homepage
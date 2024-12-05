import './Header.css'

function Header(){
    return(
        <div className='left-bar'>
                <div className='logo'>
                    <img src="/assets/icons/fire-block-thintry.png" alt="Thintry.logo" />
                </div>
                <nav>
                    <ul>
                        <div className='option-ul'>
                            <img src="/assets/icons/home.svg" /><li><a href="/"> Read </a></li>
                        </div>

                        <div className='option-ul'>
                            <img src="/assets/icons/pencil.svg" /><li><a href="/articles"> Articles </a></li>
                        </div>
                        
                        <div className='option-ul'>
                            <img src="/assets/icons/fire.svg" /><li><a href="/spotlight"> Spotlight </a></li>
                        </div>

                        {/* <div className='option-ul'>
                            <img src="https://unpkg.com/@mynaui/icons/icons/home.svg" /><li><a href="/articles"> Articles </a></li>
                        </div>

                        <div className='option-ul'>
                            <img src="https://unpkg.com/@mynaui/icons/icons/home.svg" /><li><a href="/jobs"> Jobs </a></li>
                        </div> */}
                    </ul>
                </nav>
                <button className='quick-actions'>
                    <img src="/assets/icons/lightning.svg" alt="Img" />
                    Quick Actions
                </button>
                <button className='create-article'>
                    {/* <img src="/assets/images/handwriting2.jpeg" alt="draw-image" /> */}
                    <h3>Hey, Do you Write?</h3>
                    <p>Now, Publish your Article from your Profile</p>
                    <h4>Create Article <img src="/assets/icons/arrow-right.svg" alt="" /></h4>
                </button>
            </div>
    )
}

export default Header
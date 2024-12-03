import './Header.css'

function Header(){
    return(
        <div className='left-nav'>
                <div className='logo'>
                    <img src="/assets/icons/thintry.png" alt="Thintry.logo" />
                </div>
                <nav>
                    <ul>
                        <div className='option-ul'>
                            <img src="https://unpkg.com/@mynaui/icons/icons/home.svg" /><li><a href="/"> Home </a></li>
                        </div>

                        <div className='option-ul'>
                            <img src="https://unpkg.com/@mynaui/icons/icons/home.svg" /><li><a href="/contact"> Contact </a></li>
                        </div>
                        
                        <div className='option-ul'>
                            <img src="https://unpkg.com/@mynaui/icons/icons/home.svg" /><li><a href="/about"> About </a></li>
                        </div>

                        <div className='option-ul'>
                            <img src="https://unpkg.com/@mynaui/icons/icons/home.svg" /><li><a href="/articles"> Articles </a></li>
                        </div>

                        <div className='option-ul'>
                            <img src="https://unpkg.com/@mynaui/icons/icons/home.svg" /><li><a href="/jobs"> Jobs </a></li>
                        </div>
                    </ul>
                </nav>
            </div>
    )
}

export default Header
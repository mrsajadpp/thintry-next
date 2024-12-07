import '@/components/Header/Header.css';
import Link from 'next/link';

function Header() {
    return (
        <div className='left-bar'>
            <div className='logo'>
                <Link href="/">
                    <img src="/img/green-fire-logo-black-text.png" alt="Thintry.logo" />
                </Link>
            </div>
            <nav>
                <ul>
                    <div className='option-ul'>
                        <img src="/img/icons/home.svg" /><li><a href="/"> Read </a></li>
                    </div>

                    <div className='option-ul'>
                        <img src="/img/icons/rocket.svg" /><li><a href="/articles">Spotlight</a></li>
                    </div>

                    <div className='option-ul'>
                        <img src="/img/icons/search.svg" /><li><a href="/spotlight">Search</a></li>
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
                <img src="/img/icons/pencil.svg" alt="Img" />
                New Article
            </button>
            <button className='create-article'>
            </button>
        </div>
    )
}

export default Header
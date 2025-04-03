import Logo from "./Logo";

function Header() {

    return (
        <>
            <header>
                <figure>
                    <Logo />
                </figure>
                <nav>
                    <ul>
                        <li>CHARACTERS</li>
                        <li>COMICS</li>
                        <li>MOVIES</li>
                        <li>TV</li>
                        <li>GAMES</li>
                        <li>COLLECTIBLES</li>
                        <li>VIDEOS</li>
                        <li>FANS</li>
                        <li>NEWS</li>
                        <li>SHOP</li>
                    </ul>
                </nav>
            </header>

        </>
    )
}

export default Header;
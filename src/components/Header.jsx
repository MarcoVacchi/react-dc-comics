import Logo from "./Logo";

function Header() {

    return (
        <>
            <header>
                <figure>
                    <Logo />
                </figure>
                <nav>
                    <ul className="ul-class">
                        <li className="margin hover-text">CHARACTERS</li>
                        <li className="margin t-azure hover-text">COMICS</li>
                        <li className="margin hover-text">MOVIES</li>
                        <li className="margin hover-text">TV</li>
                        <li className="margin hover-text">GAMES</li>
                        <li className="margin hover-text">COLLECTIBLES</li>
                        <li className="margin hover-text">VIDEOS</li>
                        <li className="margin hover-text">FANS</li>
                        <li className="margin hover-text">NEWS</li>
                        <li className="margin hover-text">SHOP</li>
                    </ul>
                </nav>
            </header>

        </>
    )
}

export default Header;
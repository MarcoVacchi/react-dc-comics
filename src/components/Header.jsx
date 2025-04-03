import Logo from "./Logo";

function Header() {

    return (
        <>
            <header>
                <figure>
                    <Logo />
                </figure>
                <nav>
                    <ul class="ul-class">
                        <li class="margin">CHARACTERS</li>
                        <li class="margin">COMICS</li>
                        <li class="margin">MOVIES</li>
                        <li class="margin">TV</li>
                        <li class="margin">GAMES</li>
                        <li class="margin">COLLECTIBLES</li>
                        <li class="margin">VIDEOS</li>
                        <li class="margin">FANS</li>
                        <li class="margin">NEWS</li>
                        <li class="margin">SHOP</li>
                    </ul>
                </nav>
            </header>

        </>
    )
}

export default Header;
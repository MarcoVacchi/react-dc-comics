import Logo from "./Logo";

function Header(props) {

    console.log(props.child);
    const linkChild = props.child;

    return (
        <>
            <header>
                <figure>
                    <Logo />
                </figure>
                <nav>
                    <ul className="ul-class">
                        <li className="margin hover-text"><a href="#" className="no-decore">{linkChild[0]}</a></li>
                        <li className="margin hover-text"><a href="#" className="no-decore">{linkChild[1]}</a></li>
                        <li className="margin hover-text"><a href="#" className="no-decore">{linkChild[2]}</a></li>
                        <li className="margin hover-text"><a href="#" className="no-decore">{linkChild[3]}</a></li>
                        <li className="margin hover-text"><a href="#" className="no-decore">{linkChild[4]}</a></li>
                        <li className="margin hover-text"><a href="#" className="no-decore">{linkChild[5]}</a></li>
                        <li className="margin hover-text"><a href="#" className="no-decore">{linkChild[6]}</a></li>
                        <li className="margin hover-text"><a href="#" className="no-decore">{linkChild[7]}</a></li>
                        <li className="margin hover-text"><a href="#" className="no-decore">{linkChild[8]}</a></li>
                        <li className="margin hover-text"><a href="#" className="no-decore">{linkChild[9]}</a></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header;




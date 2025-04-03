import imageDc from '../assets/img/dc-logo-bg.png';

function Footer() {

    return (
        <>
            <footer>
                <div class="container-footer">
                    <img src={imageDc} alt="foto-dc" class="img-dc" />
                    <card class="card">
                        <div>
                            <h3 class="h3-footer">DC COMICS</h3>
                            <ul>
                                <li>Characters</li>
                                <li>Comics</li>
                                <li>Movies</li>
                                <li>TV</li>
                                <li>Games</li>
                                <li>Videos</li>
                                <li>News</li>
                            </ul>
                            <h3 class="h3-footer">SHOP</h3>
                            <ul>
                                <li>Shop DC</li>
                                <li>Shop DC Collectibles</li>
                            </ul>
                        </div>

                        <div>
                            <h3 class="h3-footer">DC COMICS</h3>
                            <ul>
                                <li>Term Of Use</li>
                                <li>Privacy policy (New)</li>
                                <li>Ad Choices</li>
                                <li>Advertising</li>
                                <li>Jobs</li>
                                <li>Subscriptions</li>
                                <li>CPSC Certificates</li>
                                <li>Ratings</li>
                                <li>Shop Help</li>
                                <li>Contact Us</li>
                            </ul>
                        </div>

                        <div>
                            <h3 class="h3-footer">DC COMICS</h3>
                            <ul>
                                <li>DC</li>
                                <li>MAD Magazine</li>
                                <li>DC Kids</li>
                                <li>DC Universe</li>
                                <li>DC Power Visa</li>
                            </ul>
                        </div>
                    </card>
                </div>
            </footer>

        </>
    )
}

export default Footer;
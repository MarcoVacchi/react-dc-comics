import imageDc from '../assets/img/dc-logo-bg.png';
import footerIconOne from '../assets/img/footer-facebook.png';
import footerIconTwo from '../assets/img/footer-twitter.png';
import footerIconThree from '../assets/img/footer-youtube.png';
import footerIconFour from '../assets/img/footer-pinterest.png';
import footerIconFive from '../assets/img/footer-periscope.png';

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
                                <li class="opacity">Characters</li>
                                <li class="opacity">Comics</li>
                                <li class="opacity">Movies</li>
                                <li class="opacity">TV</li>
                                <li class="opacity">Games</li>
                                <li class="opacity">Videos</li>
                                <li class="opacity">News</li>
                            </ul>
                            <h3 class="h3-footer">SHOP</h3>
                            <ul>
                                <li class="opacity">Shop DC</li>
                                <li class="opacity">Shop DC Collectibles</li>
                            </ul>
                        </div>

                        <div>
                            <h3 class="h3-footer">DC COMICS</h3>
                            <ul>
                                <li class="opacity">Term Of Use</li>
                                <li class="opacity">Privacy policy (New)</li>
                                <li class="opacity">Ad Choices</li>
                                <li class="opacity">Advertising</li>
                                <li class="opacity">Jobs</li>
                                <li class="opacity">Subscriptions</li>
                                <li class="opacity">CPSC Certificates</li>
                                <li class="opacity">Ratings</li>
                                <li class="opacity">Shop Help</li>
                                <li class="opacity">Contact Us</li>
                            </ul>
                        </div>

                        <div>
                            <h3 class="h3-footer">DC COMICS</h3>
                            <ul>
                                <li class="opacity">DC</li>
                                <li class="opacity">MAD Magazine</li>
                                <li class="opacity">DC Kids</li>
                                <li class="opacity">DC Universe</li>
                                <li class="opacity">DC Power Visa</li>
                            </ul>
                        </div>
                    </card>
                    <div class="bar-footer">
                        <div class="row-footer">
                            <div>
                                <h3 class="h3-footer border">SIGN UP NOW!</h3>
                            </div>
                            <div class="d-flex">
                                <h3 class="h3-footer t-azure">FOLLOW US!</h3>
                                <img src={footerIconOne} alt="facebook" class="icon-footer" />
                                <img src={footerIconTwo} alt="twitter" class="icon-footer" />
                                <img src={footerIconThree} alt="youtube" class="icon-footer" />
                                <img src={footerIconFour} alt="pinterest" class="icon-footer" />
                                <img src={footerIconFive} alt="periscope" class="icon-footer" />
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer;
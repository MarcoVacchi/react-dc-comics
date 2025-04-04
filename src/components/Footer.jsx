import imageDc from '../assets/img/dc-logo-bg.png';
import footerIconOne from '../assets/img/footer-facebook.png';
import footerIconTwo from '../assets/img/footer-twitter.png';
import footerIconThree from '../assets/img/footer-youtube.png';
import footerIconFour from '../assets/img/footer-pinterest.png';
import footerIconFive from '../assets/img/footer-periscope.png';

function Footer(props) {

    const footerChild = props.childFooter;
    console.log(footerChild)

    return (
        <>
            <footer>
                <div className="container-footer">
                    <img src={imageDc} alt="foto-dc" className="img-dc" />
                    <card className="card">
                        <div>
                            <h3 className="h3-footer">DC COMICS</h3>
                            <ul>
                                <li className="opacity">{footerChild[0]}</li>
                                <li className="opacity">{footerChild[1]}</li>
                                <li className="opacity">{footerChild[2]}</li>
                                <li className="opacity">{footerChild[3]}</li>
                                <li className="opacity">{footerChild[4]}</li>
                                <li className="opacity">{footerChild[5]}</li>
                                <li className="opacity">{footerChild[6]}</li>
                            </ul>
                            <h3 className="h3-footer">SHOP</h3>
                            <ul>
                                <li className="opacity">{footerChild[7]}</li>
                                <li className="opacity">{footerChild[8]}</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="h3-footer">DC COMICS</h3>
                            <ul>
                                <li className="opacity">{footerChild[9]}</li>
                                <li className="opacity">{footerChild[10]}</li>
                                <li className="opacity">{footerChild[11]}</li>
                                <li className="opacity">{footerChild[12]}</li>
                                <li className="opacity">{footerChild[13]}</li>
                                <li className="opacity">{footerChild[14]}</li>
                                <li className="opacity">{footerChild[15]}</li>
                                <li className="opacity">{footerChild[16]}</li>
                                <li className="opacity">{footerChild[17]}</li>
                                <li className="opacity">{footerChild[18]}</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="h3-footer">DC COMICS</h3>
                            <ul>
                                <li className="opacity">{footerChild[19]}</li>
                                <li className="opacity">{footerChild[20]}</li>
                                <li className="opacity">{footerChild[21]}</li>
                                <li className="opacity">{footerChild[22]}</li>
                                <li className="opacity">{footerChild[23]}</li>
                            </ul>
                        </div>
                    </card>
                    <div className="bar-footer">
                        <div className="row-footer">
                            <div>
                                <h3 className="h3-footer border">SIGN UP NOW!</h3>
                            </div>
                            <div className="d-flex">
                                <h3 className="h3-footer t-azure">FOLLOW US!</h3>
                                <img src={footerIconOne} alt="facebook" className="icon-footer" />
                                <img src={footerIconTwo} alt="twitter" className="icon-footer" />
                                <img src={footerIconThree} alt="youtube" className="icon-footer" />
                                <img src={footerIconFour} alt="pinterest" className="icon-footer" />
                                <img src={footerIconFive} alt="periscope" className="icon-footer" />
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer;
import imageIconOne from "../assets/img/buy-comics-digital-comics.png";
import imageIconTwo from "../assets/img/buy-comics-merchandise.png";
import imageIconThree from "../assets/img/buy-comics-shop-locator.png";
import imageIconFour from "../assets/img/buy-comics-subscriptions.png";
import imageIconFive from "../assets/img/buy-dc-power-visa.svg";
function Main() {

    return (
        <>
            <main>
                <div class="container-h1">
                    <h1>Content goes here</h1>
                </div>
                <div class="container-main">
                    <ul class="icon-list">
                        <li class="icon"><img src={imageIconOne} alt="icon-1" class="img-icon" /><span>DIGITAL COMICS</span></li>
                        <li class="icon"><img src={imageIconTwo} alt="icon-2" class="img-icon" />DC MERCHANDISE</li>
                        <li class="icon"><img src={imageIconThree} alt="icon-3" class="img-icon" />SUBSCRIPTION</li>
                        <li class="icon"><img src={imageIconFour} alt="icon-4" class="img-icon" />COMIC SHOP LOCATOR</li>
                        <li class="icon"><img src={imageIconFive} alt="icon-5" class="img-icon-svg" />DC POWER VISA</li>
                    </ul>
                </div>
            </main>

        </>
    )
}

export default Main;
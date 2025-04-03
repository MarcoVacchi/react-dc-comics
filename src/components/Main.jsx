// import imageIconOne from "../assets/img/buy-comics-digital-comics.png";
// import imageIconTwo from "../assets/img/buy-comics-merchandise.png";
// import imageIconThree from "../assets/img/buy-comics-shop-locator.png";
// import imageIconFour from "../assets/img/buy-comics-subscriptions.png";
// import imageIconFive from "../assets/img/buy-dc-power-visa.svg";
import Rowblue from "./rowBlue";

function Main() {

    const arrowLeft = "-->";
    const arrowRight = "<--";

    return (
        <>
            <main>
                <div className="container-h1">
                    <h1>{arrowLeft}Content goes here{arrowRight}</h1>
                </div>
                <div>
                    {Rowblue}
                </div>
            </main>

        </>
    )
}

export default Main;
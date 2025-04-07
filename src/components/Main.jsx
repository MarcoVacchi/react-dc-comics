
import ProductCard from "./ProductCard";
import Rowblue from "./rowBlue";
import comicsArray from "../data/comics";

function Main() {

    return (
        <>
            <main>
                <div className="img-jumbo"></div>
                <div className="container-h1">
                    < ProductCard comicsArray={comicsArray} />
                </div>
                <div>
                    <Rowblue />
                </div>
            </main>

        </>
    )
}

export default Main;


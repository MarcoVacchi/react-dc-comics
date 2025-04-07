import comicsArray from "../data/comics";


function ProductCard(props) {
    // console.log(comicsArray)

    const element = props.comicsArray;


    return (
        <>
            <div className="image-flex">
                {element.map(param => (

                    <div className="p-card-img">
                        <img src={param.thumb} alt="" className="img-card-dc" />
                        <h4>{param.series}</h4>
                    </div>

                ))}
            </div>

        </>
    )
}



export default ProductCard;


{/* <div className="p-card-img">
                    <img src={comicsArray[0].thumb} alt="" className="img-card-dc" />
                    <h4>{comicsArray[0].series}</h4>
                </div> */}

{/* <div className="p-card-img">
                    <img src={comicsArray[1].thumb} alt="" className="img-card-dc" />
                    <h4>{comicsArray[1].series}</h4>
                </div>


                <div className="p-card-img">
                    <img src={comicsArray[1].thumb} alt="" className="img-card-dc" />
                    <h4>{comicsArray[1].series}</h4>
                </div>

                <div className="p-card-img">
                    <img src={comicsArray[1].thumb} alt="" className="img-card-dc" />
                    <h4>{comicsArray[1].series}</h4>
                </div>

                <div className="p-card-img">
                    <img src={comicsArray[1].thumb} alt="" className="img-card-dc" />
                    <h4>{comicsArray[1].series}</h4>
                </div>

                <div className="p-card-img">
                    <img src={comicsArray[1].thumb} alt="" className="img-card-dc" />
                    <h4>{comicsArray[1].series}</h4>
                </div>

                <div className="p-card-img">
                    <img src={comicsArray[1].thumb} alt="" className="img-card-dc" />
                    <h4>{comicsArray[1].series}</h4>
                </div>

                <div className="p-card-img">
                    <img src={comicsArray[1].thumb} alt="" className="img-card-dc" />
                    <h4>{comicsArray[1].series}</h4>
                </div>

                <div className="p-card-img">
                    <img src={comicsArray[1].thumb} alt="" className="img-card-dc" />
                    <h4>{comicsArray[1].series}</h4>
                </div>

                <div className="p-card-img">
                    <img src={comicsArray[1].thumb} alt="" className="img-card-dc" />
                    <h4>{comicsArray[1].series}</h4>
                </div>

                <div className="p-card-img">
                    <img src={comicsArray[1].thumb} alt="" className="img-card-dc" />
                    <h4>{comicsArray[1].series}</h4>
                </div>

                <div className="p-card-img">
                    <img src={comicsArray[1].thumb} alt="" className="img-card-dc" />
                    <h4>{comicsArray[1].series}</h4>
                </div> */}
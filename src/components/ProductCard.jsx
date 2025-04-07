import comicsArray from "../data/comics";


function ProductCard(props) {
    // console.log(comicsArray)

    const element = props.comicsArray;


    return (
        <>
            <button className="btn-top">CURRENT SERIES</button>
            <div className="image-flex">
                {element.map((param, index) => (

                    <div className="p-card-img" key={index.id}>
                        <img src={param.thumb} alt="" className="img-card-dc" />
                        <h4>{param.series}</h4>
                    </div>

                ))}
            </div>
            <div className="image-flex">
                <button className="btn-bottom">LOAD MORE</button>
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
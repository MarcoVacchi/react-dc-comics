import comics from "../data/comics";
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
                        <p>{param.sale_date}</p>
                        <p>{param.price}</p>
                    </div>
                ))}
            </div>

            <h2 className="title">ENTRY 2020</h2>
            <div className="image-flex">
                {element.filter(el => el.sale_date > "2020-08-25").map(el => (
                    <div className="p-card-img">
                        <img src={el.thumb} alt="" className="img-card-dc" />
                        <h4>{el.series}</h4>
                        <p>{el.sale_date}</p>
                        <p>{el.price}</p>
                    </div>
                ))}
            </div>

            <h2 className="title">OLDER THAN 2020</h2>
            <div className="image-flex">
                {element.filter(el => el.sale_date < "2020-08-25").map(el => (
                    <div className="p-card-img">
                        <img src={el.thumb} alt="" className="img-card-dc" />
                        <h4>{el.series}</h4>
                        <p>{el.sale_date}</p>
                        <p>{el.price}</p>
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
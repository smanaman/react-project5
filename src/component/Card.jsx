import "./Card.css";
import { useState } from "react";

function Card() {
    const initialData = [
        { img: "/5.jpg", c: "veg" },
        { img: "/6.jpg", c: "veg" }


    ];
    const initialData2 = [

        { img: "/2.jpg", c: "nonveg" },
        { img: "/3.jpg", c: "cake & milk" },
        { img: "/4.jpg", c: "cake & milk" },
        { img: "/5.jpg", c: "vegt" },
        { img: "/6.jpg", c: "vegt" },
        { img: "/7.jpg", c: "fru" },
        { img: "/8.jpg", c: "fru" },
        { img: "/9.jpg", c: "nonveg" },
        { img: "/10.jpg", c: "stoberi" },
        { img: "/11.jpg", c: "stoberi" }
    ];
    const [all, setAll] = useState(initialData2)
    const [cardData, setCardData] = useState(initialData);




    const filterCategoryCake = () => {
        let Cakes = all.filter(val => val.c == 'cake & milk')
        setCardData(Cakes)
    }
    const filterCategoryFruits = () => {
        let Fruits = all.filter(val => val.c == 'fru')
        setCardData(Fruits)
    }
    const filterCategoryVegitable = () => {
        let Vegitable = all.filter(val => val.c == 'vegt')
        setCardData(Vegitable)
    }
    const filterCategorystobery = () => {
        let berry = all.filter(val => val.c == 'stoberi')
        setCardData(berry)
    }
    const filterCategorymeat = () => {
        let meat = all.filter(val => val.c == 'nonveg')
        setCardData(meat)
    }

    return (
        <>
            <div className="container">
                <div className="row d-flex">
                    <div className="col-12 col-md-12 col-lg-4 card d-flex">
                        <div className="row p-0  m-0">
                            <div className="col-12 col-sm-6  col-lg-12 first-col d-flex flex-column justify-content-evenly "> <button className="card-button" onClick={() => filterCategoryCake()}><p style={{ color: '#64b496' }} className="category">Cake & Milk</p>
                                <p className="category-item">(iteam 30)</p>
                            </button>
                                <button className="card-button" onClick={() => filterCategorymeat()}><p className="category">Fresh Meat</p>
                                    <p className="category-item">(iteam 30)</p>
                                </button>
                                <button className="card-button" onClick={() => filterCategoryFruits()}><p className="category">Fruits</p>
                                    <p className="category-item">(iteam 30)</p>
                                </button></div>
                            <div className="col-12 col-sm-6 col-lg-12 d-flex flex-column justify-content-evenly first-col-2">
                                <button className="card-button" onClick={() => filterCategoryVegitable()}><p className="category">Vegetables</p>
                                    <p className="category-item">(iteam 30)</p>
                                </button>
                                <button className="card-button" onClick={() => filterCategorystobery()}><p className="category">Strawberry</p>
                                    <p className="category-item">(iteam 30)</p>
                                </button>
                                <button className="card-button-2">View More</button>
                            </div>
                        </div>
                    </div>


                    {/* Card Section */}

                    {cardData.map((val, index) => (
                        <div key={index} className="col-12 col-sm-6 col-lg-4 card p-3">
                            <img className="card-img-one" src={val.img} alt="food" />
                        </div>
                    ))}

                </div>
            </div>
        </>
    );
}

export default Card;

import React, { useState,useEffect } from 'react'
import './Proudect.css'
function Proudect() {
    const [ProudectData,setProudect]=useState([])
    const [AllProudectData,setAllProudect]=useState()
    const proudectobj = [
        {
            imges: "/12.jpg",
            producttext: 'Fresh organic villa farm lomon 500gm pack',
            price: '120.25',
            disprice: '123.25',
            Category:'lamon',
        },
        {
            imges: "/13.jpg",
            producttext: 'Best snakes with hazel nut pack 200gm',
            price: '145.35',
            disprice: '150.35',
            Category:'snack',
        },
        {
            imges: "/14.jpg",
            producttext: 'Fresh organic apple 1kg simla marming',
            price: '200.5',
            disprice: '222.5',
            Category:'sarbat',

        },
        {
            imges: "/15.jpg",
            producttext: 'Delicious white baked fresh bread and toast',
            price: '120.25',
            disprice: '123.25',
            Category:'pavpati',

        },
        
       
        
        {
            imges: "/16.jpg",
            producttext: 'Sweet crunchy nut mix 250gm pack',
            price: '50.23',
            disprice: '72.60',
            Category:'snack',

        },
        {
            imges: "/15.jpg",
            producttext: 'Delicious white baked fresh bread and toast',
            price: '120.25',
            disprice: '123.25',
            Category:'pavpati',

        },
        {
            imges: "/17.jpg",
            producttext: 'Sweet crunchy nut mix 250gm pack',
            price: '120.25',
            disprice: '123.25',
            Category:'snack',

        },
        {
            imges: "/18.jpg",
            producttext: 'Organic fresh venila farm watermelon 5kg',
            price: '20.25',
            disprice: '23.25',
            Category:'sarbat',

        }
    ]
    useEffect(() => {
        setProudect(proudectobj);
        setAllProudect(proudectobj)
    }, []);
        console.log(ProudectData);
        console.log(AllProudectData);
        
        const AllSnack=()=>{
           const snack=AllProudectData.filter((val)=>val.Category =='snack') 
           setProudect(snack)
        }
        const Alllamon=()=>{
            const lamon=AllProudectData.filter((val)=>val.Category =='lamon') 
            setProudect(lamon)
         }
         const Allfruit=()=>{
            const sarbat=AllProudectData.filter((val)=>val.Category =='sarbat') 
            setProudect(sarbat)
         }
         const Allpavpti=()=>{
            const pavpati=AllProudectData.filter((val)=>val.Category =='pavpati') 
            setProudect(pavpati)
         }
         const Allitem=()=>{
            setProudect(AllProudectData)
         }

    return (
        <>
            <div className="populer-prodect-heading">
                <h2>Popular Products</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore lacus vel facilisis.</p>
            </div>

            <div className="container mt-4 border border-dark">

                <div className="row d-flex justify-content-evenly">
                    <div className="col-12 col-md-3 border border-dark populer-prodect-card populer-prodect-button-broup">
                        <div className="row">
                            <div className="col-12 border border-dark populer-prodect-button-broup d-flex flex-column justify-content-evenly">
                                <button className='product-btn-grop' onClick={Allitem}>
                                    <div className="product-btn-grop-text">All</div>
                                    <div className="product-btn-grop-icon"><i class="fa-solid fa-arrow-right"></i></div>
                                </button>
                                <button className='product-btn-grop'  onClick={AllSnack}>
                                    <div className="product-btn-grop-text">Snack</div>
                                    <div className="product-btn-grop-icon"><i class="fa-solid fa-arrow-right"></i></div>
                                </button>
                                <button className='product-btn-grop' onClick={Alllamon}>
                                    <div className="product-btn-grop-text">Vegetables</div>
                                    <div className="product-btn-grop-icon"><i class="fa-solid fa-arrow-right"></i></div>
                                </button>
                                <button className='product-btn-grop' onClick={Allfruit} >
                                    <div className="product-btn-grop-text">Fruit</div>
                                    <div className="product-btn-grop-icon"><i class="fa-solid fa-arrow-right"></i></div>
                                </button>
                                <button className='product-btn-grop' onClick={Allpavpti}>
                                    <div className="product-btn-grop-text">Bakery</div>
                                    <div className="product-btn-grop-icon"><i class="fa-solid fa-arrow-right"></i></div>
                                </button>


                            </div>
                            <div className="col-12 border border-dark populer-prodect-button-broup">aaaa</div>
                        </div>
                    </div>
                    <div className="col-9  border border-dark p-0 ">
                        <div className="row  d-flex  p-0 m-0">

                            {
                                ProudectData.map((val) => {
                                    return (
                                        <div className=" col-12 col-md-3 populer-prodect-card  main-product-card-height">
                                            <div className="populer-prodect-card2">
                                                <img className='populer-prodect-card2-img' src={val.imges} alt="" />
                                                <div className="lock"><i class="fa-solid fa-lock" ></i></div>
                                                <div className="populer-prodect-name">Vegetables</div>
                                                <div className="populer-prodect-star">
                                                    <div className="pro-star">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="#F5885F" class="bi bi-star-fill" viewBox="0 0 16 16">
                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                        </svg></div>
                                                    <div className="pro-star">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="#F5885F" class="bi bi-star-fill" viewBox="0 0 16 16">
                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                        </svg>
                                                    </div>
                                                    <div className="pro-star">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="#F5885F" class="bi bi-star-fill" viewBox="0 0 16 16">
                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                        </svg>
                                                    </div>
                                                    <div className="pro-star">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="#F5885F" class="bi bi-star-fill" viewBox="0 0 16 16">
                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                        </svg>
                                                    </div>
                                                    <div className="pro-star">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="#F5885F" class="bi bi-star-fill" viewBox="0 0 16 16">
                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                        </svg>
                                                    </div>
                                                    <div className="pro-text">(3.4)</div>
                                                </div>
                                                <div className="populer-prodect-card2-text">
                                                    {val.producttext}
                                                </div>
                                                <div className="populer-prodect-card2-price">
                                                    <div className="populer-prodect-card2-price1">${val.price}</div>
                                                    <div className="populer-prodect-card2-price2"><del>${val.disprice}</del></div>
                                                </div>

                                            </div>
                                            <div className="slider-hovee-card2">
                                                <div className="slider-hovee-card2-icon1"><i class="fa-regular fa-heart"></i></div>
                                                <div className="slider-hovee-card2-icon2"><i class="fa-solid fa-eye"></i></div>
                                            </div>
                                        </div>
                                    )

                                })
                            }

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Proudect

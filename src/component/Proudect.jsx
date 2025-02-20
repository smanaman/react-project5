import React from 'react'
import './Proudect.css'
function Proudect() {
    return (
        <>
            <div className="populer-prodect-heading">
                <h2>Popular Products</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore lacus vel facilisis.</p>
            </div>

            <div className="container mt-4 border border-dark">

                <div className="row d-flex justify-content-evenly">
                    <div className="col-3 border border-dark populer-prodect-card populer-prodect-button-broup">
                        <div className="row">
                            <div className="col-12 border border-dark populer-prodect-button-broup">a</div>
                            <div className="col-12 border border-dark populer-prodect-button-broup">a</div>
                        </div>
                    </div>
                    <div className="col-8 border border-dark p-0 ">
                        <div className="row  d-flex justify-content-evenly p-0 m-0">
                            <div className=" border border-dark col-3 populer-prodect-card p-2 ">
                                <div className="populer-prodect-card2">
                                    <img className='populer-prodect-card2-img' src="" alt="" />
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
                                        Fresh organic villa farm <br />lomon 500gm pack
                                    </div>
                                    <div className="populer-prodect-card2-price">
                                        <div className="populer-prodect-card2-price1">120.24$</div>
                                        <div className="populer-prodect-card2-price2"><del>$123.25</del></div>
                                    </div>

                                </div>
<div className="slider-hovee-card2">
    <div className="slider-hovee-card2-icon1"></div>
    <div className="slider-hovee-card2-icon2"></div>
</div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Proudect

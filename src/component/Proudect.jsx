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
                    <div className="col-8 border border-dark ">
                        <div className="row  d-flex justify-content-evenly ">
                            <div className=" border border-dark col-3 populer-prodect-card"></div>
                            <div className=" border border-dark col-3 populer-prodect-card"></div>
                            <div className=" border border-dark col-3 populer-prodect-card"></div>
                            <div className=" border border-dark col-3 populer-prodect-card"></div>
                            <div className=" border border-dark col-3 populer-prodect-card"></div>
                            <div className=" border border-dark col-3 populer-prodect-card"></div>
                            <div className=" border border-dark col-3 populer-prodect-card"></div>
                            <div className=" border border-dark col-3 populer-prodect-card"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Proudect

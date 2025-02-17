import './Scroll.css'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap' 
function Scroll() {
    const  ti=gsap.timeline()
    useGSAP(()=>{
       ti.from(".scroller-text-h5",{
            y:50,
            duration:1,
            // delay:1,
            opacity:0
        })
        ti.from(".scroller-text-h1 p",{
            y:150,
            duration:0.9,
            // delay:1,
            opacity:0
        })
      ti.from(".scroller-text-p",{
            y:150,
            duration:0.9,
            // delay:1,
            opacity:0
        })
        ti.from(".scroller-text-button",{
            y:100,
            duration:0.9,
            // delay:1,
            opacity:0
        })
    })
    return (
        <>
            <div className="container-fluid mt-2 scroller m-0 p-0">
                <div id="carouselExampleRide" className="carousel slide" data-bs-ride="true">
                    <div className="carousel-inner">
                        <div className="carousel-item active back">
                            <div className="back">
                                <div className="back-div">
                                    <div className="scroller-text">
                                        <div  className="scroller-text-h5">
                                            <h5>100%</h5>
                                            <span>Organic Fruits</span>
                                        </div>
                                        <div className="scroller-text-h1">
                                            <p>Explore fresh & <br /> juicy fruits.</p>
                                        </div>
                                        <div className="scroller-text-p">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet <br /> reiciendis consectetur adipisicing elit
                                            </p>
                                        </div>
                                        <button className='scroller-text-button'>Shop Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="..." className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="..." className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleRide"
                        data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleRide"
                        data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>


            </div>

        </>
    )
}
export default Scroll
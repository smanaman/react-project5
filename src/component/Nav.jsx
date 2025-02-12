import './Nav.css'

function Nav() {


  return (
    <>
      <div className="container border-all">
        <nav>
          <div className="row">

            <div className="col-2 border-all logo">
              <img className='' src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/logo/logo.png" alt="" srcset="" />
            </div>
            <div className="col-7 border-all m-0 p-0 d-flex align-items-center justify-content-center">
              <div className="input rounded-start-3">
                <input type="text" placeholder='Search For items...' />
              </div>
              <div className="selection">
                <select>
                  <option value="">All categories</option>
                  <option value="">s</option>
                  <option value="">s</option>
                  <option value="">s</option>
                </select>
              </div>
              <div className="button rounded-end-3"><button><i class="fa-solid fa-magnifying-glass"></i></button></div>
            </div>
            <div className="col-3 border-all d-flex m-0 p-0">

{/* <div className="col-3"></div> */}
              <div className="col-4 border-all d-flex justify-content-center align-items-center justify-content-evenly">
                <div className="nav-icon"><i class="fa-regular fa-user"></i></div>
                <div className="nav-text" style={{ marginLeft: "-5px" }}>Account</div>
              </div>
              <div className="col-4 border-all d-flex justify-content-center align-items-center justify-content-evenly">
                <div className="nav-icon"><i class="fa-regular fa-heart"></i></div>
                <div className="nav-text" style={{ marginLeft: "-5px" }}>Wishlist</div>
              </div>
              <div className="col-4 border-all d-flex justify-content-center align-items-center justify-content-evenly">
                <div className="nav-icon"><i class="fa-solid fa-cart-shopping"></i></div>
                <div className="nav-text" style={{ marginLeft: "-15px" }}>Card</div>
              </div>



            </div>

          </div>
        </nav>
        <div className="row all-border-2">
            <div className="col-2 all-border-2 d-flex align-items-center">
                <div className="hamburger"><i class="fa-solid fa-bars"></i></div>
            </div>
            <div className="col-7 all-border-2  d-flex m-0 p-0">
                <div className='manu d-flex justify-content-center align-items-center'>Home</div>
                <div className='manu d-flex justify-content-center align-items-center'>Category<i class="fa-solid fa-angle-down"></i></div>
                <div className='manu d-flex justify-content-center align-items-center'>Products<i class="fa-solid fa-angle-down"></i></div>
                <div className='manu d-flex justify-content-center align-items-center'>Pages<i class="fa-solid fa-angle-down"></i></div>
                <div className='manu d-flex justify-content-center align-items-center'>Blog<i class="fa-solid fa-angle-down"></i></div>
                <div className='manu d-flex justify-content-center align-items-center'>Elements<i class="fa-solid fa-angle-down"></i></div>

            </div>
            <div className="col-3 all-border-2 d-flex justify-content-end align-items-center phone">
            <i class="fa-solid fa-phone "></i>+123 ( 456 ) ( 7890 )</div>
        </div>
      </div>
    </>
  )
}

export default Nav

import React from "react";
import OwlCarousel from "react-owl-carousel";
import "../../node_modules/owl.carousel/dist/assets/owl.carousel.css"
import "../../node_modules/owl.carousel/dist/assets/owl.theme.default.css"
import './ProudectSlider.css'

const ProudectSlider = () => {
  const options = {
    loop: true,
    margin: 10,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    navText: [
      "<i class='fa fa-chevron-left'></i>",
      "<i class='fa fa-chevron-right'></i>",
    ],
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 3 },
    },
  };

  const slides = [
    {
      img: "https://images.unsplash.com/photo-1596265371388-43edbaadab94?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=301&w=501",
      title: "Slide 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      date: "Oct 27, 2019",
    },
    {
      img: "https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=303&w=503",
      title: "Slide 2",
      description: "Sed do eiusmod tempor incididunt ut labore et dolore.",
      date: "Nov 15, 2020",
    },
    // Add more slides here...
  ];

  return (
    <div className="container mx-auto mt-10 ">
      <OwlCarousel className="owl-theme" {...options}>
        {slides.map((slide, index) => (
          <div key={index} className="post-slide bg-white shadow-lg rounded-xl p-4 ">
            <div className="post-img relative overflow-hidden rounded-xl">
              <img src={slide.img} alt={slide.title} className="w-full h-auto transition-transform duration-300 hover:scale-110" />
              <a href="#" className="over-layer absolute inset-0 bg-gradient-to-br from-blue-500/75 to-blue-600/60 opacity-0 hover:opacity-100 flex items-center justify-center">
                <i className="fa fa-link text-white text-2xl"></i>
              </a>
            </div>
            <div className="post-content p-4">
              <h3 className="post-title text-lg font-bold uppercase">
                <a href="#" className="hover:text-blue-500">{slide.title}</a>
              </h3>
              <p className="post-description text-gray-600">{slide.description}</p>
              <span className="post-date text-sm text-gray-400">
                <i className="fa fa-clock mr-1"></i> {slide.date}
              </span>
              <a href="#" className="read-more float-right bg-blue-500 text-white px-3 py-1 rounded-full text-xs hover:bg-blue-600">
                Read More
              </a>
            </div>
          </div>
        ))}
      </OwlCarousel>
    </div>
  );
};

export default ProudectSlider;
